// Xử lý đăng nhập / đăng ký (dùng chung cho dangnhap.html và dangky.html)
// Tài khoản được lưu trong localStorage (xem auth-store.js)
import { dangKy, dangNhap, layNguoiDung, daCoTaiKhoan } from "./auth-store.js";

var TRANG_CHU = "index.html";

var form = document.getElementById("auth-form");
var thongBao = document.getElementById("auth-msg");
var nutGui = document.getElementById("auth-submit");
var laDangKy = document.body.dataset.trang === "dangky";
var thamSo = new URLSearchParams(window.location.search);

function hienThongBao(loai, noiDung) {
  thongBao.className = "auth-msg " + loai;
  thongBao.textContent = noiDung;
  thongBao.style.display = loai ? "block" : "none";
}

// Đã đăng nhập sẵn thì quay về trang chủ
if (layNguoiDung()) {
  window.location.replace(TRANG_CHU);
}

// Vừa đăng ký xong thì được chuyển sang đây để đăng nhập
if (!laDangKy && thamSo.get("dkxong") === "1") {
  hienThongBao("ok", "Đăng ký thành công! Hãy đăng nhập để bắt đầu chơi.");
}
// Điền sẵn email (khi được chuyển từ trang khác sang)
if (thamSo.get("email")) {
  form.email.value = thamSo.get("email");
}
if (!laDangKy && thamSo.get("dkxong") === "1" && form.email.value) {
  form.matKhau.focus();
}

function dichLoi(e) {
  var m = {
    "email-da-dung": "Email này đã được đăng ký. Hãy đăng nhập.",
    "email-khong-hop-le": "Email không hợp lệ.",
    "sai-mat-khau": "Email hoặc mật khẩu không đúng.",
    "khong-luu-duoc": "Không thể lưu dữ liệu trên trình duyệt (bộ nhớ đầy hoặc đang chặn lưu trữ)."
  };
  return m[e.code] || ("Có lỗi xảy ra: " + (e.code || e.message));
}

// Nút hiện / ẩn mật khẩu
document.querySelectorAll(".auth-toggle").forEach(function (nut) {
  nut.addEventListener("click", function () {
    var o = document.getElementById(nut.dataset.cho);
    var hien = o.type === "password";
    o.type = hien ? "text" : "password";
    nut.textContent = hien ? "🙈" : "👁";
    nut.setAttribute("aria-label", hien ? "Ẩn mật khẩu" : "Hiện mật khẩu");
  });
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  hienThongBao("", "");

  var email = form.email.value.trim();
  var matKhau = form.matKhau.value;

  if (laDangKy) {
    var ten = form.ten.value.trim();
    if (ten.length < 2) return hienThongBao("loi", "Vui lòng nhập họ tên (ít nhất 2 ký tự).");
    if (matKhau.length < 6) return hienThongBao("loi", "Mật khẩu cần ít nhất 6 ký tự.");
    if (matKhau !== form.nhapLai.value) return hienThongBao("loi", "Mật khẩu nhập lại không khớp.");
  } else if (!email || !matKhau) {
    return hienThongBao("loi", "Vui lòng nhập email và mật khẩu.");
  }

  // Đăng nhập bằng email chưa đăng ký -> báo và tự chuyển sang trang đăng ký
  if (!laDangKy && !daCoTaiKhoan(email)) {
    hienThongBao("loi", "Bạn chưa có tài khoản. Cần đăng ký! Đang chuyển sang trang đăng ký...");
    nutGui.disabled = true;
    setTimeout(function () {
      window.location.href = "dangky.html?email=" + encodeURIComponent(email);
    }, 1500);
    return;
  }

  nutGui.disabled = true;
  nutGui.textContent = "Đang xử lý...";

  try {
    if (laDangKy) {
      await dangKy(ten, email, matKhau);
      hienThongBao("ok", "Đăng ký thành công! Đang chuyển sang trang đăng nhập...");
      setTimeout(function () {
        window.location.href = "dangnhap.html?dkxong=1&email=" + encodeURIComponent(email);
      }, 900);
    } else {
      await dangNhap(email, matKhau);
      hienThongBao("ok", "Đăng nhập thành công! Đang chuyển về trang chủ...");
      setTimeout(function () { window.location.href = TRANG_CHU; }, 900);
    }
  } catch (err) {
    console.error(err);
    if (err.code === "chua-co-tai-khoan") {
      hienThongBao("loi", "Bạn chưa có tài khoản. Cần đăng ký! Đang chuyển sang trang đăng ký...");
      setTimeout(function () {
        window.location.href = "dangky.html?email=" + encodeURIComponent(email);
      }, 1500);
      return;
    }
    hienThongBao("loi", dichLoi(err));
    nutGui.disabled = false;
    nutGui.textContent = laDangKy ? "Tạo tài khoản" : "Đăng nhập";
  }
});