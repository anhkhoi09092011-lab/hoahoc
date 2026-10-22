// ⭐ Nguyên tố yêu thích: bấm sao ở popup để đánh dấu, nút lọc "chỉ hiện yêu thích".
// Lưu theo tài khoản: Firestore (tienTrinh/{uid}.yeuThich) + bản sao trên máy để mở nhanh.
// Cần nạp SAU script.js (dùng tatCaO, giuCho, hienThongTin) và cần đăng nhập mới lưu được.
(function () {
  "use strict";

  var KHOA = "bangTuanHoan3D_yeuThich_v1:";
  var ds = [];                 // số hiệu nguyên tử đã yêu thích
  var nguoi = null;            // { uid, ... } hoặc null nếu chưa đăng nhập
  var dangLoc = false;         // đang bật "chỉ hiện yêu thích"
  var dangTai = false;         // đang tải dữ liệu từ máy chủ
  var suaTrongKhiTai = false;  // người dùng bấm sao trong lúc đang tải
  var henGio = null;

  var modal = document.getElementById("detail-modal");
  var oKyHieu = document.getElementById("modal-symbol");
  if (!modal || !oKyHieu || typeof tatCaO === "undefined") {
    console.error("Yêu thích: thiếu phần tử hoặc script.js chưa được nạp trước.");
    return;
  }

  // ----- Tiện ích -----
  function sach(mang) {
    var tap = {}, kq = [];
    (mang || []).forEach(function (n) {
      n = Number(n);
      if (Number.isInteger(n) && n >= 1 && n <= 118 && !tap[n]) { tap[n] = true; kq.push(n); }
    });
    return kq.sort(function (a, b) { return a - b; });
  }

  function khoaLuu() { return nguoi ? KHOA + nguoi.uid : null; }

  function docLocal() {
    try {
      var k = khoaLuu();
      return k ? sach(JSON.parse(localStorage.getItem(k) || "[]")) : [];
    } catch (e) { return []; }
  }
  function luuLocal() {
    try { var k = khoaLuu(); if (k) localStorage.setItem(k, JSON.stringify(ds)); } catch (e) {}
  }

  // Thông báo nhỏ, dùng lại kiểu "toast" của huy hiệu
  function thongBao(bieuTuong, nho, noiDung) {
    var khung = document.getElementById("badge-toast-wrap");
    if (!khung) {
      khung = document.createElement("div");
      khung.id = "badge-toast-wrap";
      khung.setAttribute("aria-live", "polite");
      document.body.appendChild(khung);
    }
    var tb = document.createElement("div");
    tb.className = "badge-toast";
    var bt = document.createElement("span");
    bt.className = "badge-toast-icon";
    bt.textContent = bieuTuong;
    var chu = document.createElement("span");
    chu.className = "badge-toast-text";
    var n = document.createElement("small");
    n.textContent = nho;
    var nd = document.createElement("strong");
    nd.textContent = noiDung;
    chu.appendChild(n);
    chu.appendChild(nd);
    tb.appendChild(bt);
    tb.appendChild(chu);
    khung.appendChild(tb);
    setTimeout(function () {
      tb.classList.add("badge-toast-hide");
      setTimeout(function () { tb.remove(); }, 500);
    }, 3800);
  }

  function luuServer() {
    if (!nguoi || !window.mayChu || !window.mayChu.luuYeuThich) return;
    clearTimeout(henGio);
    henGio = setTimeout(function () {
      if (!nguoi) return;
      window.mayChu.luuYeuThich(ds.slice()).catch(function (e) {
        console.warn("Không lưu được yêu thích lên máy chủ:", e);
        thongBao("⚠️", "KHÔNG LƯU ĐƯỢC YÊU THÍCH", String((e && (e.code || e.message)) || "Lỗi không rõ"));
      });
    }, 400);
  }

  // ----- Giao diện -----
  // Nút sao trong popup
  var sao = document.createElement("button");
  sao.id = "yt-sao";
  sao.type = "button";
  modal.appendChild(sao);

  // Nút lọc, nằm ngay dưới 3 nút Table / Sphere / Helix
  var thanhLoc = document.createElement("div");
  thanhLoc.id = "yt-thanh";
  var nutLoc = document.createElement("button");
  nutLoc.id = "yt-loc";
  nutLoc.type = "button";
  thanhLoc.appendChild(nutLoc);
  var nutKieu = document.getElementById("nut");
  if (nutKieu && nutKieu.parentNode) nutKieu.parentNode.insertBefore(thanhLoc, nutKieu.nextSibling);
  else document.body.insertBefore(thanhLoc, document.body.firstChild);

  function soDangMo() { return Number(oKyHieu.dataset.so) || 0; }

  function capNhatSao() {
    var thich = ds.indexOf(soDangMo()) !== -1;
    sao.classList.toggle("dang-thich", thich);
    sao.textContent = thich ? "★ Đã yêu thích" : "☆ Yêu thích";
    sao.setAttribute("aria-label", thich ? "Bỏ khỏi danh sách yêu thích" : "Thêm vào danh sách yêu thích");
    sao.setAttribute("aria-pressed", thich ? "true" : "false");
    sao.title = thich ? "Bỏ khỏi danh sách yêu thích" : "Thêm vào danh sách yêu thích";
  }

  function ve() {
    var tap = {};
    ds.forEach(function (n) { tap[n] = true; });

    tatCaO.forEach(function (o) {
      var f = !!tap[o.dataset.so];
      o.classList.toggle("yeu-thich", f);
      o.classList.toggle("yt-mo", dangLoc && !f);
    });
    if (typeof giuCho !== "undefined") {
      giuCho.forEach(function (g) { g.classList.toggle("yt-mo", dangLoc); });
    }

    nutLoc.textContent = (dangLoc ? "★" : "☆") + " Chỉ hiện yêu thích" + (ds.length ? " (" + ds.length + ")" : "");
    nutLoc.classList.toggle("dang-chon", dangLoc);
    nutLoc.setAttribute("aria-pressed", dangLoc ? "true" : "false");
    nutLoc.title = dangLoc ? "Bấm để hiện lại tất cả nguyên tố" : "Chỉ hiện các nguyên tố bạn đã đánh dấu ⭐";
    capNhatSao();
  }

  // ----- Hành động -----
  function doiYeuThich() {
    if (!nguoi) {
      thongBao("🔒", "YÊU THÍCH ĐANG BỊ KHÓA", "Cần đăng nhập để lưu nguyên tố yêu thích");
      return;
    }
    var so = soDangMo();
    if (!(so >= 1 && so <= 118)) return;

    var i = ds.indexOf(so);
    if (i === -1) ds.push(so); else ds.splice(i, 1);
    ds = sach(ds);
    if (dangTai) suaTrongKhiTai = true;
    if (dangLoc && !ds.length) dangLoc = false;

    luuLocal();
    luuServer();
    ve();

    sao.classList.remove("yt-no");
    void sao.offsetWidth;            // chạy lại hiệu ứng nảy
    sao.classList.add("yt-no");
  }

  function doiLoc() {
    if (!nguoi) {
      thongBao("🔒", "YÊU THÍCH ĐANG BỊ KHÓA", "Cần đăng nhập để dùng danh sách yêu thích");
      return;
    }
    if (!dangLoc && !ds.length) {
      thongBao("☆", "CHƯA CÓ NGUYÊN TỐ YÊU THÍCH", "Mở một nguyên tố rồi bấm ☆ để thêm");
      return;
    }
    dangLoc = !dangLoc;
    ve();
  }

  sao.addEventListener("click", doiYeuThich);
  nutLoc.addEventListener("click", doiLoc);

  // Mỗi lần mở popup nguyên tố, cập nhật trạng thái sao
  if (typeof window.hienThongTin === "function") {
    var goc = window.hienThongTin;
    window.hienThongTin = function () {
      var kq = goc.apply(this, arguments);
      capNhatSao();
      return kq;
    };
  }

  // ----- Đồng bộ theo tài khoản -----
  function dongBo() {
    nguoi = window.nguoiHienTai || null;
    dangLoc = false;
    dangTai = false;
    suaTrongKhiTai = false;

    if (!nguoi) { ds = []; ve(); return; }

    var uid = nguoi.uid;
    ds = docLocal();
    ve();
    if (!window.mayChu || !window.mayChu.docYeuThich) return;

    dangTai = true;
    window.mayChu.docYeuThich().then(function (tuServer) {
      if (!nguoi || nguoi.uid !== uid) return;   // đã đổi tài khoản trong lúc chờ
      dangTai = false;
      if (Array.isArray(tuServer)) {
        var sv = sach(tuServer);
        if (suaTrongKhiTai) { ds = sach(sv.concat(ds)); luuServer(); }
        else ds = sv;
      } else if (ds.length) {
        luuServer();                              // máy chủ chưa có -> đẩy bản trên máy lên
      }
      luuLocal();
      ve();
    }).catch(function (e) {
      dangTai = false;
      console.warn("Không tải được yêu thích từ máy chủ:", e);
    });
  }

  window.addEventListener("tai-khoan-doi", dongBo);
  window.addEventListener("storage", function (e) {
    var k = khoaLuu();
    if (k && e.key === k) { ds = docLocal(); ve(); }   // tab khác vừa đổi
  });

  dongBo();   // phòng trường hợp trạng thái đăng nhập đã có sẵn
})();
