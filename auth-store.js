// Lưu tài khoản bằng localStorage (thay cho Firebase)
// Cấu trúc: { "email@abc.com": { ten, email, muoi, matKhauBam, taoLuc } }

var KHOA_TAI_KHOAN = "bangTuanHoan3D_taiKhoan_v1";
var KHOA_PHIEN = "bangTuanHoan3D_phien_v1"; // email đang đăng nhập

var nguoiNghe = [];

export function chuanHoaEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function docTatCa() {
  try {
    var d = JSON.parse(localStorage.getItem(KHOA_TAI_KHOAN));
    return d && typeof d === "object" && !Array.isArray(d) ? d : {};
  } catch (e) {
    return {};
  }
}

function ghiTatCa(d) {
  localStorage.setItem(KHOA_TAI_KHOAN, JSON.stringify(d));
}

function taoLoi(ma) {
  var e = new Error(ma);
  e.code = ma;
  return e;
}

function taoMuoi() {
  var a = new Uint8Array(16);
  if (window.crypto && crypto.getRandomValues) {
    crypto.getRandomValues(a);
  } else {
    for (var i = 0; i < a.length; i++) a[i] = Math.floor(Math.random() * 256);
  }
  return Array.prototype.map.call(a, function (b) {
    return ("0" + b.toString(16)).slice(-2);
  }).join("");
}

// Băm mật khẩu (SHA-256 + muối) để không lưu mật khẩu dạng chữ thường
async function bam(matKhau, muoi) {
  if (window.crypto && crypto.subtle) {
    var buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(muoi + matKhau));
    return Array.prototype.map.call(new Uint8Array(buf), function (b) {
      return ("0" + b.toString(16)).slice(-2);
    }).join("");
  }
  return "plain:" + matKhau; // trình duyệt không hỗ trợ (trang không an toàn)
}

function layNguoiDungTuEmail(email) {
  var tk = docTatCa()[email];
  return tk ? { ten: tk.ten, email: tk.email } : null;
}

export function layNguoiDung() {
  try {
    var email = localStorage.getItem(KHOA_PHIEN);
    return email ? layNguoiDungTuEmail(email) : null;
  } catch (e) {
    return null;
  }
}

function thongBaoThayDoi() {
  var u = layNguoiDung();
  nguoiNghe.forEach(function (cb) { cb(u); });
  // script.js (huy hiệu, điểm) lắng nghe sự kiện này để đổi sang dữ liệu của tài khoản mới
  window.dispatchEvent(new CustomEvent("tai-khoan-doi"));
}

// Gọi cb ngay lúc đầu và mỗi khi đăng nhập/đăng xuất (kể cả ở tab khác)
export function onThayDoi(cb) {
  nguoiNghe.push(cb);
  cb(layNguoiDung());
}
window.addEventListener("storage", function (e) {
  if (e.key === KHOA_PHIEN || e.key === KHOA_TAI_KHOAN) thongBaoThayDoi();
});

export function daCoTaiKhoan(email) {
  return !!docTatCa()[chuanHoaEmail(email)];
}

// Đăng ký: KHÔNG tự đăng nhập, người dùng sẽ sang trang đăng nhập
export async function dangKy(ten, email, matKhau) {
  email = chuanHoaEmail(email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw taoLoi("email-khong-hop-le");
  var tatCa = docTatCa();
  if (tatCa[email]) throw taoLoi("email-da-dung");
  var muoi = taoMuoi();
  tatCa[email] = {
    ten: ten,
    email: email,
    muoi: muoi,
    matKhauBam: await bam(matKhau, muoi),
    taoLuc: Date.now()
  };
  try {
    ghiTatCa(tatCa);
  } catch (e) {
    throw taoLoi("khong-luu-duoc");
  }
}

export async function dangNhap(email, matKhau) {
  email = chuanHoaEmail(email);
  var tk = docTatCa()[email];
  if (!tk) throw taoLoi("chua-co-tai-khoan");
  if ((await bam(matKhau, tk.muoi)) !== tk.matKhauBam) throw taoLoi("sai-mat-khau");
  try {
    localStorage.setItem(KHOA_PHIEN, email);
  } catch (e) {
    throw taoLoi("khong-luu-duoc");
  }
  thongBaoThayDoi();
}

export function dangXuat() {
  try { localStorage.removeItem(KHOA_PHIEN); } catch (e) {}
  thongBaoThayDoi();
}