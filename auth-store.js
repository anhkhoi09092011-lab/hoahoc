// Tài khoản + dữ liệu người chơi lưu trên Firebase (Authentication + Firestore).
// Giữ nguyên các hàm xuất ra như bản localStorage để auth.js / auth-status.js dùng lại.
//
// Firestore:
//   tienTrinh/{uid}  (riêng tư)  : huy hiệu, câu đúng, nguyên tố đã xem, từ khóa tìm kiếm...
//   xepHang/{uid}    (công khai) : { ten, diemCao, diemCaoLuc, luot, xep }  -> chỉ có tên, KHÔNG có email
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged, updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, collection, query, orderBy, limit, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

var app = initializeApp(firebaseConfig);
var auth = getAuth(app);
var db = getFirestore(app);

var nguoiNghe = [];
var nguoiHienTai = null;   // { uid, email, ten }
var daCoTrangThai = false; // đã biết chắc đăng nhập hay chưa (Firebase trả lời xong)
var tamDung = false;       // true khi đang đăng ký (tránh báo "đã đăng nhập" giữa chừng)

export function chuanHoaEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function taoLoi(ma) {
  var e = new Error(ma);
  e.code = ma;
  return e;
}

// Đổi mã lỗi Firebase sang mã lỗi nội bộ mà auth.js đã biết dịch
function doiLoi(e) {
  var m = {
    "auth/email-already-in-use": "email-da-dung",
    "auth/invalid-email": "email-khong-hop-le",
    "auth/user-not-found": "chua-co-tai-khoan",
    "auth/wrong-password": "sai-mat-khau",
    "auth/invalid-credential": "sai-mat-khau",
    "auth/invalid-login-credentials": "sai-mat-khau",
    "auth/weak-password": "mat-khau-yeu",
    "auth/network-request-failed": "mat-mang",
    "auth/too-many-requests": "qua-nhieu-lan"
  };
  return taoLoi(m[e && e.code] || (e && e.code) || "loi-khac");
}

function tuUser(u) {
  return u ? { uid: u.uid, email: u.email, ten: u.displayName || u.email } : null;
}

export function layNguoiDung() {
  return nguoiHienTai ? { ten: nguoiHienTai.ten, email: nguoiHienTai.email } : null;
}

function thongBaoThayDoi() {
  window.nguoiHienTai = nguoiHienTai;
  var u = layNguoiDung();
  nguoiNghe.forEach(function (cb) { cb(u); });
  // script.js (huy hiệu, xếp hạng) lắng nghe sự kiện này để nạp dữ liệu của tài khoản mới
  window.dispatchEvent(new CustomEvent("tai-khoan-doi"));
}

// Gọi cb khi đã biết trạng thái đăng nhập, rồi mỗi khi đăng nhập/đăng xuất (kể cả ở tab khác)
export function onThayDoi(cb) {
  nguoiNghe.push(cb);
  if (daCoTrangThai) cb(layNguoiDung());
}

onAuthStateChanged(auth, function (u) {
  if (tamDung) return;
  nguoiHienTai = tuUser(u);
  daCoTrangThai = true;
  thongBaoThayDoi();
});

// Đăng ký: KHÔNG tự đăng nhập, người dùng sẽ sang trang đăng nhập
export async function dangKy(ten, email, matKhau) {
  email = chuanHoaEmail(email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw taoLoi("email-khong-hop-le");
  tamDung = true;
  try {
    var kq = await createUserWithEmailAndPassword(auth, email, matKhau);
    await updateProfile(kq.user, { displayName: ten });
    await signOut(auth);
  } catch (e) {
    throw doiLoi(e);
  } finally {
    tamDung = false;
  }
}

export async function dangNhap(email, matKhau) {
  try {
    await signInWithEmailAndPassword(auth, chuanHoaEmail(email), matKhau);
  } catch (e) {
    throw doiLoi(e);
  }
  // onAuthStateChanged sẽ tự báo thay đổi
}

export function dangXuat() {
  return signOut(auth);
}

// ===== Dữ liệu người chơi trên máy chủ (script.js gọi qua window.mayChu) =====
function uidHienTai() {
  return auth.currentUser ? auth.currentUser.uid : null;
}

async function docTienTrinh() {
  var uid = uidHienTai();
  if (!uid) return null;
  var s = await getDoc(doc(db, "tienTrinh", uid));
  return s.exists() ? s.data() : null;
}

async function luuTienTrinh(t) {
  var uid = uidHienTai();
  if (!uid) return;
  var ten = auth.currentUser.displayName || auth.currentUser.email;
  await setDoc(doc(db, "tienTrinh", uid), {
    dung: t.dung, khamPha: t.khamPha, timKiem: t.timKiem.slice(0, 200),
    diemCao: t.diemCao, diemCaoLuc: t.diemCaoLuc, luot: t.luot, daMo: t.daMo
  });
  if (t.luot >= 1) {
    // "xep" là một số duy nhất để xếp hạng: điểm cao hơn trước, bằng điểm thì ai đạt sớm hơn xếp trên
    var luc = t.diemCaoLuc > 0 ? t.diemCaoLuc : 9e12;
    await setDoc(doc(db, "xepHang", uid), {
      ten: ten, diemCao: t.diemCao, diemCaoLuc: t.diemCaoLuc, luot: t.luot,
      xep: t.diemCao * 1e13 + (1e13 - luc)
    });
  }
}

async function layXepHang() {
  var q = query(collection(db, "xepHang"), orderBy("xep", "desc"), limit(10));
  var s = await getDocs(q);
  var kq = [];
  s.forEach(function (d) {
    var v = d.data();
    kq.push({ uid: d.id, ten: v.ten || "Ẩn danh", diem: v.diemCao || 0 });
  });
  return kq;
}

window.mayChu = {
  docTienTrinh: docTienTrinh,
  luuTienTrinh: luuTienTrinh,
  layXepHang: layXepHang
};