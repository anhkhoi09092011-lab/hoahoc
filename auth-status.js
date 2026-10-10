// Hiện trạng thái tài khoản ở trang index (nút Đăng nhập / tên + Đăng xuất)
// Tài khoản lưu bằng localStorage (xem auth-store.js)
import { onThayDoi, dangXuat } from "./auth-store.js";

var thanh = document.getElementById("thanh-tai-khoan");

// ===== CHẶN ĐỐ VUI: phải đăng nhập mới được chơi =====
var daDangNhap = false;

var yeuCau = null;       // hộp thoại yêu cầu đăng nhập (tạo 1 lần khi cần)

function taoYeuCau() {
  var nen = document.createElement("div");
  nen.id = "yc-backdrop";

  var hop = document.createElement("div");
  hop.className = "yc-hop";
  hop.setAttribute("role", "dialog");
  hop.setAttribute("aria-modal", "true");
  hop.setAttribute("aria-labelledby", "yc-tieu-de");

  var bieuTuong = document.createElement("div");
  bieuTuong.className = "yc-icon";
  bieuTuong.textContent = "🔒";

  var tieuDe = document.createElement("h3");
  tieuDe.id = "yc-tieu-de";
  tieuDe.textContent = "Cần có tài khoản để chơi";

  var moTa = document.createElement("p");
  moTa.textContent = "Hãy đăng nhập để tham gia đố vui nguyên tố.";

  var hang = document.createElement("div");
  hang.className = "yc-nut";

  var dn = document.createElement("a");
  dn.href = "dangnhap.html";
  dn.className = "yc-dang-nhap";
  dn.textContent = "Đăng nhập";

  hang.appendChild(dn);

  var dong = document.createElement("button");
  dong.type = "button";
  dong.className = "yc-dong";
  dong.textContent = "Để sau";
  dong.addEventListener("click", dongYeuCau);

  hop.appendChild(bieuTuong);
  hop.appendChild(tieuDe);
  hop.appendChild(moTa);
  hop.appendChild(hang);
  hop.appendChild(dong);
  nen.appendChild(hop);

  nen.addEventListener("click", function (e) {
    if (e.target === nen) dongYeuCau();
  });
  document.body.appendChild(nen);
  return nen;
}

function hienYeuCau() {
  if (!yeuCau) yeuCau = taoYeuCau();
  yeuCau.classList.add("hien");
}
function dongYeuCau() {
  if (yeuCau) yeuCau.classList.remove("hien");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") dongYeuCau();
});

// Chặn nút "Đố vui nguyên tố" khi chưa đăng nhập (bắt sự kiện trước script.js)
document.addEventListener("click", function (e) {
  if (!e.target.closest("#quiz-open-button")) return;
  if (daDangNhap) return;
  e.stopPropagation();
  e.preventDefault();
  hienYeuCau();
}, true);

// Đăng xuất thì đóng luôn khu đố vui đang mở
function dongDoVui() {
  var khu = document.getElementById("khu-do-vui");
  var nutQ = document.getElementById("quiz-open-button");
  if (khu && nutQ && khu.classList.contains("quiz-dang-mo")) {
    khu.classList.remove("quiz-dang-mo");
    nutQ.innerHTML = '🎯 Đố vui nguyên tố<span>Khám phá ứng dụng hóa học trong đời sống →</span>';
  }
}

// Menu xổ xuống: đóng khi bấm ra ngoài / nhấn Esc (đăng ký 1 lần)
var dongMenuHienTai = null;
document.addEventListener("click", function () { if (dongMenuHienTai) dongMenuHienTai(); });
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && dongMenuHienTai) dongMenuHienTai();
});

onThayDoi(function (user) {
  daDangNhap = !!user;
  if (user) dongYeuCau(); else dongDoVui();

  thanh.replaceChildren();
  dongMenuHienTai = null;

  if (user) {
    var ten = user.ten || user.email;

    // Một khung duy nhất chỉ hiện tên; bấm vào mới xổ ra nút Đăng xuất
    var hop = document.createElement("div");
    hop.className = "tk-hop";

    var chip = document.createElement("button");
    chip.type = "button";
    chip.className = "tk-chip";
    chip.setAttribute("aria-haspopup", "true");
    chip.setAttribute("aria-expanded", "false");

    var avatar = document.createElement("span");
    avatar.className = "tk-avatar";

    // Icon tài khoản (SVG): đầu tròn + vai
    var NS = "http://www.w3.org/2000/svg";
    var icon = document.createElementNS(NS, "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");
    var dau = document.createElementNS(NS, "circle");
    dau.setAttribute("cx", "12");
    dau.setAttribute("cy", "8");
    dau.setAttribute("r", "4");
    var vai = document.createElementNS(NS, "path");
    vai.setAttribute("d", "M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z");
    icon.appendChild(dau);
    icon.appendChild(vai);
    avatar.appendChild(icon);

    var tenEl = document.createElement("span");
    tenEl.className = "ten-nguoi-dung";
    tenEl.textContent = ten;

    var mui = document.createElement("span");
    mui.className = "tk-mui";
    mui.textContent = "▾";

    chip.appendChild(avatar);
    chip.appendChild(tenEl);
    chip.appendChild(mui);

    var menu = document.createElement("div");
    menu.className = "tk-menu";

    var nut = document.createElement("button");
    nut.type = "button";
    nut.className = "tk-dang-xuat";
    nut.textContent = "Đăng xuất";
    nut.addEventListener("click", function () { dangXuat(); });
    menu.appendChild(nut);

    function dongMenu() {
      hop.classList.remove("mo");
      chip.setAttribute("aria-expanded", "false");
    }
    dongMenuHienTai = dongMenu;
    chip.addEventListener("click", function (e) {
      e.stopPropagation();
      var mo = hop.classList.toggle("mo");
      chip.setAttribute("aria-expanded", mo ? "true" : "false");
    });

    hop.appendChild(chip);
    hop.appendChild(menu);
    thanh.appendChild(hop);
  } else {
    var dnLink = document.createElement("a");
    dnLink.href = "dangnhap.html";
    dnLink.textContent = "Đăng nhập";
    thanh.appendChild(dnLink);
  }
});