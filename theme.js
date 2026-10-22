// Chế độ sáng / tối: lưu lựa chọn trên trình duyệt, mặc định là tối.
// (Phần chống nháy màu nằm ở thẻ <script> nhỏ trong <head> của mỗi trang.)
(function () {
  var KHOA = "bangTuanHoan3D_theme";
  var goc = document.documentElement;

  function laSang() { return goc.getAttribute("data-theme") === "light"; }

  function datTheme(sang) {
    if (sang) goc.setAttribute("data-theme", "light");
    else goc.removeAttribute("data-theme");
    try { localStorage.setItem(KHOA, sang ? "light" : "dark"); } catch (e) {}
    capNhatNut();
  }

  var nut = document.createElement("button");
  nut.id = "theme-toggle";
  nut.type = "button";

  function capNhatNut() {
    var sang = laSang();
    nut.textContent = sang ? "🌙" : "☀️";
    nut.title = sang ? "Chuyển sang chế độ tối" : "Chuyển sang chế độ sáng";
    nut.setAttribute("aria-label", nut.title);
    nut.setAttribute("aria-pressed", sang ? "true" : "false");
  }

  nut.addEventListener("click", function () { datTheme(!laSang()); });
  capNhatNut();
  document.body.appendChild(nut);

  // Đồng bộ khi đổi chế độ ở tab khác
  window.addEventListener("storage", function (e) {
    if (e.key !== KHOA) return;
    if (e.newValue === "light") goc.setAttribute("data-theme", "light");
    else goc.removeAttribute("data-theme");
    capNhatNut();
  });
})();