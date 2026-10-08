// 1. DỮ LIỆU: mỗi nguyên tố viết dạng "Ký hiệu|Tên|Khối lượng"
    //    Số hiệu nguyên tử chính là thứ tự trong danh sách (bắt đầu từ 1)
    var duLieu = [
      "H|Hiđro|1.008", "He|Heli|4.0026", "Li|Liti|6.94", "Be|Beri|9.0122",
      "B|Bo|10.81", "C|Cacbon|12.011", "N|Nitơ|14.007", "O|Oxi|15.999",
      "F|Flo|18.998", "Ne|Neon|20.180", "Na|Natri|22.990", "Mg|Magie|24.305",
      "Al|Nhôm|26.982", "Si|Silic|28.085", "P|Photpho|30.974", "S|Lưu huỳnh|32.06",
      "Cl|Clo|35.45", "Ar|Argon|39.948", "K|Kali|39.098", "Ca|Canxi|40.078",
      "Sc|Scandi|44.956", "Ti|Titan|47.867", "V|Vanadi|50.942", "Cr|Crom|51.996",
      "Mn|Mangan|54.938", "Fe|Sắt|55.845", "Co|Coban|58.933", "Ni|Niken|58.693",
      "Cu|Đồng|63.546", "Zn|Kẽm|65.38", "Ga|Gali|69.723", "Ge|Gecmani|72.630",
      "As|Asen|74.922", "Se|Selen|78.971", "Br|Brom|79.904", "Kr|Krypton|83.798",
      "Rb|Rubidi|85.468", "Sr|Stronti|87.62", "Y|Ytri|88.906", "Zr|Zirconi|91.224",
      "Nb|Niobi|92.906", "Mo|Molipden|95.95", "Tc|Tecnexi|98", "Ru|Rutheni|101.07",
      "Rh|Rhodi|102.91", "Pd|Paladi|106.42", "Ag|Bạc|107.87", "Cd|Cadimi|112.41",
      "In|Indi|114.82", "Sn|Thiếc|118.71", "Sb|Antimon|121.76", "Te|Telu|127.60",
      "I|Iot|126.90", "Xe|Xenon|131.29", "Cs|Xesi|132.91", "Ba|Bari|137.33",
      "La|Lantan|138.91", "Ce|Xeri|140.12", "Pr|Praseodim|140.91", "Nd|Neodim|144.24",
      "Pm|Promethi|145", "Sm|Samari|150.36", "Eu|Europi|151.96", "Gd|Gadolini|157.25",
      "Tb|Terbi|158.93", "Dy|Dysprosi|162.50", "Ho|Honmi|164.93", "Er|Erbi|167.26",
      "Tm|Thuli|168.93", "Yb|Ytterbi|173.05", "Lu|Luteti|174.97", "Hf|Hafni|178.49",
      "Ta|Tantan|180.95", "W|Vonfram|183.84", "Re|Reni|186.21", "Os|Osmi|190.23",
      "Ir|Iridi|192.22", "Pt|Bạch kim|195.08", "Au|Vàng|196.97", "Hg|Thủy ngân|200.59",
      "Tl|Tali|204.38", "Pb|Chì|207.2", "Bi|Bismut|208.98", "Po|Poloni|209",
      "At|Astatin|210", "Rn|Radon|222", "Fr|Franxi|223", "Ra|Radi|226",
      "Ac|Actini|227", "Th|Thori|232.04", "Pa|Protactini|231.04", "U|Urani|238.03",
      "Np|Neptuni|237", "Pu|Plutoni|244", "Am|Americi|243", "Cm|Curi|247",
      "Bk|Berkeli|247", "Cf|Californi|251", "Es|Einsteini|252", "Fm|Fermi|257",
      "Md|Mendelevi|258", "No|Nobeli|259", "Lr|Lawrenxi|266", "Rf|Rutherfordi|267",
      "Db|Dubni|268", "Sg|Seaborgi|269", "Bh|Bohri|270", "Hs|Hassi|277",
      "Mt|Meitneri|278", "Ds|Darmstadti|281", "Rg|Roentgeni|282", "Cn|Copernixi|285",
      "Nh|Nihoni|286", "Fl|Flerovi|289", "Mc|Moscovi|290", "Lv|Livermori|293",
      "Ts|Tennessin|294", "Og|Oganesson|294"
    ];
 
    // 2. CÁC LOẠI NGUYÊN TỐ: tên class CSS + tên hiển thị
    var tenLoai = {
      kimLoaiKiem: "Kim loại kiềm",
      kimLoaiKiemTho: "Kim loại kiềm thổ",
      kimLoaiChuyenTiep: "Kim loại chuyển tiếp",
      kimLoaiYeu: "Kim loại yếu",
      banKimLoai: "Bán kim loại",
      phiKim: "Phi kim",
      halogen: "Halogen",

khiHiem: "Khí hiếm",
      lantanit: "Họ Lantan",
      actinit: "Họ Actini"
    };
 
    // Hàm cho biết nguyên tố số n thuộc loại nào
    function layLoai(n) {
      if ([3, 11, 19, 37, 55, 87].includes(n)) return "kimLoaiKiem";
      if ([4, 12, 20, 38, 56, 88].includes(n)) return "kimLoaiKiemTho";
      if ([5, 14, 32, 33, 51, 52].includes(n)) return "banKimLoai";
      if ([1, 6, 7, 8, 15, 16, 34].includes(n)) return "phiKim";
      if ([9, 17, 35, 53, 85, 117].includes(n)) return "halogen";
      if ([2, 10, 18, 36, 54, 86, 118].includes(n)) return "khiHiem";
      if (n >= 57 && n <= 71) return "lantanit";
      if (n >= 89 && n <= 103) return "actinit";
      if ((n >= 21 && n <= 30) || (n >= 39 && n <= 48) ||
          (n >= 72 && n <= 80) || (n >= 104 && n <= 112)) return "kimLoaiChuyenTiep";
      return "kimLoaiYeu";
    }
 
    // 3. VỊ TRÍ: hàm trả về [cột, hàng] của nguyên tố số n trong lưới
    function layViTri(n) {
      if (n === 1)  return [1, 1];
      if (n === 2)  return [18, 1];
      if (n <= 4)   return [n - 2, 2];
      if (n <= 10)  return [n + 8, 2];
      if (n <= 12)  return [n - 10, 3];
      if (n <= 18)  return [n, 3];
      if (n <= 36)  return [n - 18, 4];
      if (n <= 54)  return [n - 36, 5];
      if (n <= 56)  return [n - 54, 6];
      if (n >= 57 && n <= 71)  return [n - 57 + 3, 9];   // hàng f-block thứ nhất
      if (n <= 86)  return [n - 68, 6];
      if (n <= 88)  return [n - 86, 7];
      if (n >= 89 && n <= 103) return [n - 89 + 3, 10];  // hàng f-block thứ hai
      return [n - 100, 7];
    }
 

// 4. VẼ BẢNG 3D
var bang = document.getElementById("bang");          // "sân khấu" 3D chứa các ô
var thongTin = document.getElementById("thongTin");
var tatCaO = [];
var tong = duLieu.length;
var cheDo = "table";

// ----- 4a. Tính vị trí của từng ô trong 4 kiểu sắp xếp -----
// Mỗi kiểu trả về một chuỗi transform CSS
var boCuc = { table: [], sphere: [], helix: [] };
var RAD = 180 / Math.PI;

for (var i = 0; i < tong; i++) {
  var n = i + 1;

  // TABLE: dùng lại vị trí [cột, hàng], đưa hàng f-block xuống gần hơn
  var vt = layViTri(n);
  var hang = vt[1] <= 7 ? vt[1] : vt[1] - 0.55;
  var tx = (vt[0] - 9.5) * 66;
  var ty = (hang - 4) * 72 - 88;
  boCuc.table.push("translate3d(" + tx + "px," + ty + "px,0px)");

  // SPHERE: rải đều trên mặt cầu (Fibonacci)
  var phi = Math.acos(-1 + 2 * (i + 0.5) / tong);
  var theta = Math.sqrt(tong * Math.PI) * phi;
  boCuc.sphere.push(
    "rotateY(" + (theta * RAD) + "deg) rotateX(" + (90 - phi * RAD) +
    "deg) translateZ(340px)");

  // HELIX: hai sợi xoắn đan nhau
  var k = Math.floor(i / 2);
  var goc = k * 22 + (i % 2) * 180;
  boCuc.helix.push(
    "rotateY(" + goc + "deg) translateY(" + ((k - 29.5) * 12) +
    "px) translateZ(420px)");
}

// Vị trí ngẫu nhiên lúc đầu (các ô bay vào từ đây)
function viTriNgauNhien() {
  function r(a) { return (Math.random() - 0.5) * a; }
  return "translate3d(" + r(1600) + "px," + r(1200) + "px," + r(1800) + "px) " +
         "rotateX(" + r(360) + "deg) rotateY(" + r(360) + "deg) rotateZ(" + r(360) + "deg) scale(0.2)";
}

// ----- 4b. Tạo các ô -----
duLieu.forEach(function (chuoi, i) {
  var phan = chuoi.split("|");
  var nguyenTo = { so: i + 1, kyHieu: phan[0], ten: phan[1], khoiLuong: phan[2] };
  var loai = layLoai(nguyenTo.so);

  var o = document.createElement("div");
  o.className = "o " + loai;
  o.style.transform = viTriNgauNhien();

  o.innerHTML =
    '<div class="so">' + nguyenTo.so + '</div>' +
    '<div class="kh">' + nguyenTo.kyHieu + '</div>' +
    '<div class="kl">' + nguyenTo.khoiLuong + '</div>';

  // Lưu chữ để tìm kiếm
  o.dataset.tim = (nguyenTo.kyHieu + " " + nguyenTo.ten + " " + nguyenTo.so).toLowerCase();

  // Bấm vào ô thì hiện thông tin (bỏ qua nếu vừa kéo chuột)
  o.addEventListener("click", function () {
    if (daKeoXa) return;
    thongTin.innerHTML =
      "<h2>" + nguyenTo.ten + " (" + nguyenTo.kyHieu + ")</h2>" +
      "<p>Số hiệu nguyên tử: <b>" + nguyenTo.so + "</b></p>" +
      "<p>Khối lượng nguyên tử: <b>" + nguyenTo.khoiLuong + " u</b></p>" +
      "<p>Phân loại: <b>" + tenLoai[loai] + "</b></p>";
  });

  bang.appendChild(o);
  tatCaO.push(o);
});

// Hai ô giữ chỗ ở nhóm 3 (chỉ cho biết họ Lantan/Actini nằm ở hàng dưới)
var giuCho = [];
function themGiuCho(chu, hang, loai) {
  var g = document.createElement("div");
  g.className = "giu-cho an " + loai;
  g.textContent = chu;
  g.style.transform =
    "translate3d(" + ((3 - 9.5) * 66) + "px," + ((hang - 4) * 72 - 88) + "px,0px)";
  bang.appendChild(g);
  giuCho.push(g);
}
themGiuCho("57-71", 6, "lantanit");
themGiuCho("89-103", 7, "actinit");

// ----- Nhãn Cột / Nhóm / Chu kì (giống sách, chỉ hiện ở dạng table) -----
var nhan = [];
function themNhan(lop, noiDung, x, y) {
  var d = document.createElement("div");
  d.className = "nhan an " + lop;
  d.innerHTML = "<div>" + noiDung + "</div>";
  d.style.transform = "translate3d(" + x + "px," + y + "px,0px)";
  bang.appendChild(d);
  nhan.push(d);
}

// Nhóm của 18 cột (theo sách)
var tenNhom = ["IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "VIIIB", "VIIIB",
               "VIIIB", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"];
var yDau = (1 - 4) * 72 - 88 - 62;   // hàng tiêu đề nằm phía trên hàng 1

themNhan("goc", "Cột →<br>Nhóm →<br>Chu kì ↓", -611, yDau);
for (var c = 1; c <= 18; c++) {
  themNhan("cot", "<b>" + c + "</b><br>" + tenNhom[c - 1], (c - 9.5) * 66, yDau);
}
for (var h = 1; h <= 7; h++) {
  themNhan("chu-ki", h, -610, (h - 4) * 72 - 88);
}

// ----- 4c. Chuyển sang một kiểu sắp xếp -----
function datBoCuc(ten, tuanTu) {
  cheDo = ten;
  giuCho.forEach(function (g) {
    g.classList.toggle("an", ten !== "table");
  });
  nhan.forEach(function (d) {
    d.classList.toggle("an", ten !== "table");
  });
  tatCaO.forEach(function (o, i) {
    // mỗi ô bay với thời gian và độ trễ hơi khác nhau cho tự nhiên
    var troi = 1.2 + Math.random() * 0.9;
    var tre = tuanTu ? i * 0.015 : Math.random() * 0.6;
    o.style.transition =
      "transform " + troi + "s cubic-bezier(0.2, 0.8, 0.2, 1) " + tre + "s," +
      "opacity 0.5s ease " + tre + "s," +
      "box-shadow 0.2s ease, filter 0.2s ease";
    o.style.transform = boCuc[ten][i];
    o.classList.add("hien-ra");
  });

  document.querySelectorAll("#nut button").forEach(function (b) {
    b.classList.toggle("dang-chon", b.dataset.che === ten);
  });
}

document.querySelectorAll("#nut button").forEach(function (b) {
  b.addEventListener("click", function () {
    if (b.dataset.che === "table") {
      // về dạng bảng thì đưa góc xoay về 0 theo đường ngắn nhất
      ry = ((ry + 180) % 360 + 360) % 360 - 180;
      vx = vy = 0;
    }
    datBoCuc(b.dataset.che, false);
  });
});

// Lúc mở trang: các ô bay vào dạng bảng
window.addEventListener("load", function () {
  setTimeout(function () { datBoCuc("table", true); }, 300);
});

// ----- 4d. Xoay cả sân khấu bằng chuột (kéo để xoay) -----
var rx = 0, ry = 0, vx = 0, vy = 0, z = 0;
var dangKeo = false, daKeoXa = false, tongKeo = 0;
var truocX = 0, truocY = 0;
var chuot = { x: 0, y: 0 };

// độ lùi và tốc độ tự xoay của từng kiểu
var thongSo = {
  table:  { z: 0,    xoay: 0 },
  sphere: { z: -260, xoay: 0.18 },
  helix:  { z: -480, xoay: 0.25 },
};

var khung = document.querySelector(".khung-bang");

khung.addEventListener("mousedown", function (e) {
  dangKeo = true; tongKeo = 0; daKeoXa = false;
  truocX = e.clientX; truocY = e.clientY;
  khung.classList.add("dang-keo");
});
window.addEventListener("mouseup", function () {
  if (!dangKeo) return;
  dangKeo = false;
  khung.classList.remove("dang-keo");
  daKeoXa = tongKeo > 5;
  setTimeout(function () { daKeoXa = false; }, 0);
});
window.addEventListener("mousemove", function (e) {
  chuot.x = e.clientX / window.innerWidth * 2 - 1;
  chuot.y = e.clientY / window.innerHeight * 2 - 1;
  if (!dangKeo) return;
  var dx = e.clientX - truocX, dy = e.clientY - truocY;
  truocX = e.clientX; truocY = e.clientY;
  tongKeo += Math.abs(dx) + Math.abs(dy);
  ry += dx * 0.3;
  rx -= dy * 0.3;
  vy = dx * 0.3;
  vx = -dy * 0.3;
});

function vong() {
  var t = thongSo[cheDo];

  if (cheDo === "table") {
    // dạng bảng: nghiêng nhẹ theo chuột, buông ra thì tự về lại
    if (!dangKeo) {
      rx += (-chuot.y * 8 - rx) * 0.06;
      ry += (chuot.x * 12 - ry) * 0.06;
    }
    rx = Math.max(-30, Math.min(30, rx));
    ry = Math.max(-40, Math.min(40, ry));
  } else if (!dangKeo) {
    // các dạng khác: tự xoay chậm + quán tính sau khi thả chuột
    ry += vy + t.xoay;
    rx += vx;
    vy *= 0.95; vx *= 0.95;
    rx = Math.max(-70, Math.min(70, rx));
  }

  z += (t.z - z) * 0.06;
  bang.style.transform =
    "translateZ(" + z + "px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)";

  requestAnimationFrame(vong);
}

vong();

// 5. CHÚ THÍCH MÀU
var chuThich = document.getElementById("chuThich");
for (var khoa in tenLoai) {
  var muc = document.createElement("span");
  muc.className = "chu-thich-o " + khoa;
  muc.textContent = tenLoai[khoa];
  chuThich.appendChild(muc);
}

// 6. TÌM KIẾM: gõ chữ thì ô nào không khớp sẽ bị mờ đi
document.getElementById("timKiem").addEventListener("input", function () {
  var tuKhoa = this.value.trim().toLowerCase();
  tatCaO.forEach(function (o) {
    if (tuKhoa === "" || o.dataset.tim.includes(tuKhoa)) {
      o.classList.remove("mo");
    } else {
      o.classList.add("mo");
    }
  });
});