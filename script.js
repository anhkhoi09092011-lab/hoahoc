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


  // HELIX: một sợi xoắn ốc duy nhất, mỗi ô lệch 0.32 rad, ô đầu ở trên cùng
  var gocHelix = (i * 0.32 + Math.PI) * RAD;
  boCuc.helix.push(
    "rotateY(" + gocHelix + "deg) translateY(" + ((i - (tong - 1) / 2) * 7) +
    "px) translateZ(380px)");
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


  var noiDungO =
    '<div class="so">' + nguyenTo.so + '</div>' +
    '<div class="kh">' + nguyenTo.kyHieu + '</div>' +
    '<div class="kl">' + nguyenTo.khoiLuong + '</div>';
  o.innerHTML =
    '<div class="mat truoc">' + noiDungO + '</div>' +
    '<div class="mat sau">' + noiDungO + '</div>';


  // Lưu dữ liệu để tìm kiếm: ký hiệu, tên (bỏ dấu) và số hiệu tách riêng
  o.dataset.ky = nguyenTo.kyHieu.toLowerCase();
  o.dataset.ten = boDau(nguyenTo.ten);
  o.dataset.so = String(nguyenTo.so);


  // Bấm vào ô thì hiện thông tin (bỏ qua nếu vừa kéo chuột)
  o.addEventListener("click", function () {
    if (daKeoXa) return;
    hienThongTin(nguyenTo, loai, o);
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
      "transform " + troi + "s cubic-bezier(0.2, 0.8, 0.2, 1) " + tre + "s";
    o.style.setProperty("--tre", tre + "s");   // độ trễ hiện ra (opacity nằm ở 2 mặt .mat)
    o.style.transform = boCuc[ten][i];
    o.classList.add("hien-ra");
  });
  // bỏ độ trễ sau khi hiện xong để hiệu ứng tìm kiếm không bị chậm
  setTimeout(function () {
    tatCaO.forEach(function (o) { o.style.removeProperty("--tre"); });
  }, 3500);


  document.querySelectorAll("#nut button").forEach(function (b) {
    b.classList.toggle("dang-chon", b.dataset.che === ten);
  });
}


document.querySelectorAll("#nut button").forEach(function (b) {
  b.addEventListener("click", function () {
    if (b.dataset.che === "table") {
      // về dạng bảng thì đưa góc xoay về 0 theo đường ngắn nhất
      ry = ((ry + 180) % 360 + 360) % 360 - 180;
      rx = ((rx + 180) % 360 + 360) % 360 - 180;
      vx = vy = 0;
      datLai = true;
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
var datLai = true;   // true: table đang ở thế nhìn thẳng (tự nghiêng theo chuột)
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
  if (tongKeo > 5) datLai = false;   // đã kéo thật -> cho xoay tự do, kể cả ra mặt sau
  ry += dx * 0.3;
  rx -= dy * 0.3;
  vy = dx * 0.3;
  vx = -dy * 0.3;
});


function vong() {
  var t = thongSo[cheDo];


  if (cheDo === "table" && datLai) {
    // dạng bảng chưa bị kéo: nghiêng nhẹ theo chuột
    if (!dangKeo) {
      rx += (-chuot.y * 8 - rx) * 0.06;
      ry += (chuot.x * 12 - ry) * 0.06;
    }
  } else if (!dangKeo) {
    // sau khi kéo (và ở sphere/helix): quán tính, table không giới hạn góc nên xoay ra mặt sau được
    ry += vy + t.xoay;
    rx += vx;
    vy *= 0.95; vx *= 0.95;
    if (cheDo !== "table") rx = Math.max(-70, Math.min(70, rx));
  }


  z += (t.z - z) * 0.06;
  bang.style.transform =
    "translateZ(" + z + "px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)";


  requestAnimationFrame(vong);
}


vong();


// ----- POPUP THÔNG TIN -----
var khi = ["H", "He", "N", "O", "F", "Ne", "Cl", "Ar", "Kr", "Xe", "Rn", "Og"];
var long = ["Br", "Hg"];


function layChuKi(n) {
  if (n <= 2) return 1;
  if (n <= 10) return 2;
  if (n <= 18) return 3;
  if (n <= 36) return 4;
  if (n <= 54) return 5;
  if (n <= 86) return 6;
  return 7;
}


function layNhom(n) {
  if ((n >= 57 && n <= 71) || (n >= 89 && n <= 103)) {
    return (n === 57 || n === 89) ? 3 : "F-block";
  }
  return layViTri(n)[0];
}


function layTrangThai(kyHieu) {
  if (khi.includes(kyHieu)) return "Khí";
  if (long.includes(kyHieu)) return "Lỏng";
  return "Rắn";
}


function hienThongTin(nguyenTo, loai, o) {
  var modal = document.getElementById("detail-modal");
  // lấy màu của loại nguyên tố để viền popup cùng màu với ô
  modal.style.setProperty("--rgb", getComputedStyle(o).getPropertyValue("--rgb").trim());


  document.getElementById("modal-symbol").textContent = nguyenTo.kyHieu;
  document.getElementById("modal-title").textContent =
    nguyenTo.ten + " (" + nguyenTo.kyHieu + ")";
  document.getElementById("modal-desc").innerHTML =
    "<strong>Số hiệu nguyên tử:</strong> " + nguyenTo.so + "<br>" +
    "<strong>Ký hiệu:</strong> " + nguyenTo.kyHieu + "<br>" +
    "<strong>Khối lượng nguyên tử:</strong> " + nguyenTo.khoiLuong + " u<br>" +
    "<strong>Chu kỳ:</strong> " + layChuKi(nguyenTo.so) + "<br>" +
    "<strong>Nhóm:</strong> " + layNhom(nguyenTo.so) + "<br>" +
    "<strong>Phân loại:</strong> " + tenLoai[loai] + "<br>" +
    "<strong>Trạng thái ở điều kiện thường:</strong> " + layTrangThai(nguyenTo.kyHieu);


  document.getElementById("modal-backdrop").style.display = "block";
  modal.style.display = "block";
}


function dongThongTin() {
  document.getElementById("detail-modal").style.display = "none";
  document.getElementById("modal-backdrop").style.display = "none";
}


document.getElementById("close-button").addEventListener("click", dongThongTin);
document.getElementById("modal-backdrop").addEventListener("click", dongThongTin);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") dongThongTin();
});


// 5. CHÚ THÍCH MÀU
var chuThich = document.getElementById("chuThich");
for (var khoa in tenLoai) {
  var muc = document.createElement("span");
  muc.className = "chu-thich-o " + khoa;
  muc.textContent = tenLoai[khoa];
  chuThich.appendChild(muc);
}


// 6. TÌM KIẾM: gõ chữ thì ô nào không khớp sẽ bị mờ đi
//  - gõ số        -> chỉ khớp đúng số hiệu nguyên tử (gõ 26 -> Fe, không dính 2, 12, 126...)
//  - gõ 1 chữ cái -> chỉ khớp theo ký hiệu (a -> Al, Ar, As, Ag, Au, At, Ac, Am)
//  - gõ từ 2 chữ  -> khớp ký hiệu HOẶC tên bắt đầu bằng chữ đó (an -> Antimon, sat -> Sắt)
//                    không phân biệt hoa thường, có/không dấu
function boDau(chuoi) {
  return chuoi.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}


document.getElementById("timKiem").addEventListener("input", function () {
  var tuKhoa = boDau(this.value.trim());
  var laSo = /^\d+$/.test(tuKhoa);


  tatCaO.forEach(function (o) {
    var khop;
    if (tuKhoa === "") {
      khop = true;
    } else if (laSo) {
      khop = o.dataset.so === String(Number(tuKhoa));
    } else {
      // ký hiệu bắt đầu bằng từ khóa
      khop = o.dataset.ky.indexOf(tuKhoa) === 0;
      // từ 2 chữ trở lên: tên (hay một từ trong tên, vd "huynh", "kim") bắt đầu bằng từ khóa cũng khớp
      if (!khop && tuKhoa.length >= 2) {
        khop = o.dataset.ten.indexOf(tuKhoa) === 0 ||
               o.dataset.ten.indexOf(" " + tuKhoa) !== -1;
      }
    }
    o.classList.toggle("mo", !khop);
  });


  // 2 ô "57-71" và "89-103" không phải nguyên tố -> ẩn đi khi đang tìm kiếm
  giuCho.forEach(function (g) {
    g.classList.toggle("mo", tuKhoa !== "");
  });
});
// ===== 7. MINI GAME: THỬ THÁCH NGUYÊN TỐ =====
(function () {
  var nganHangCauHoi = [
    {
      icon: "🏗️",
      context: "XÂY DỰNG",
      question: "Nguyên tố nào là thành phần chính để sản xuất thép dùng trong cầu và nhà cao tầng?",
      answers: ["Fe — Sắt", "Cu — Đồng", "He — Heli", "Ne — Neon"],
      correct: 0,
      explain: "Sắt là nguyên liệu chính để sản xuất thép. Thép được sử dụng rộng rãi trong kết cấu nhà, cầu và nhiều công trình xây dựng."
    },
    {
      icon: "🔌",
      context: "ĐIỆN TỬ",
      question: "Dây điện thường sử dụng nguyên tố nào nhờ khả năng dẫn điện tốt?",
      answers: ["S — Lưu huỳnh", "Cu — Đồng", "P — Photpho", "Cl — Clo"],
      correct: 1,
      explain: "Đồng dẫn điện tốt, dễ kéo thành sợi nên được sử dụng phổ biến trong dây điện và mạch điện."
    },
    {
      icon: "💻",
      context: "CÔNG NGHỆ",
      question: "Nguyên tố nào là vật liệu bán dẫn quan trọng trong chip máy tính?",
      answers: ["Ar — Argon", "Ca — Canxi", "Si — Silic", "Au — Vàng"],
      correct: 2,
      explain: "Silic tinh khiết được dùng làm chất bán dẫn trong vi mạch. Việc pha tạp có kiểm soát giúp điều chỉnh tính chất điện của nó."
    },
    {
      icon: "🚰",
      context: "XỬ LÝ NƯỚC",
      question: "Nguyên tố nào được sử dụng trong các hợp chất khử trùng nước uống và hồ bơi?",
      answers: ["Fe — Sắt", "Ag — Bạc", "N — Nitơ", "Cl — Clo"],
      correct: 3,
      explain: "Các hợp chất chứa clo được sử dụng để khử trùng nước. Clo dùng đúng liều lượng giúp kiểm soát nhiều vi sinh vật gây bệnh."
    },
    {
      icon: "🎈",
      context: "ĐỜI SỐNG",
      question: "Khí nào thường được bơm vào bóng bay để bóng có thể bay lên?",
      answers: ["O₂ — Oxi", "He — Heli", "CO₂ — Cacbon đioxit", "Cl₂ — Clo"],
      correct: 1,
      explain: "Heli nhẹ hơn không khí và không cháy nên được dùng trong bóng bay. Tuy nhiên, không nên hít khí từ bóng bay vì có thể gây thiếu oxi."
    },
    {
      icon: "🥫",
      context: "ĐỒ GIA DỤNG",
      question: "Nguyên tố nào được dùng để sản xuất nhiều loại lon nước và giấy bạc bọc thực phẩm?",
      answers: ["Al — Nhôm", "Hg — Thủy ngân", "Br — Brom", "U — Urani"],
      correct: 0,
      explain: "Nhôm nhẹ, dễ tạo hình và có lớp oxit bảo vệ bề mặt. Nhôm được sử dụng trong lon đồ uống và lá nhôm dùng trong thực phẩm."
    },
    {
      icon: "✏️",
      context: "HỌC TẬP",
      question: "Chất nào trong ruột bút chì chủ yếu được tạo nên từ một dạng của cacbon?",
      answers: ["Kim cương", "Than chì", "Canxi cacbonat", "Silic tinh khiết"],
      correct: 1,
      explain: "Ruột bút chì chứa than chì, một dạng cấu trúc của cacbon. Các lớp của than chì dễ trượt và để lại vết trên giấy."
    },
    {
      icon: "🦴",
      context: "CƠ THỂ NGƯỜI",
      question: "Nguyên tố nào là thành phần khoáng chất quan trọng của xương và răng?",
      answers: ["Ne — Neon", "He — Heli", "Ca — Canxi", "Ar — Argon"],
      correct: 2,
      explain: "Canxi có trong các khoáng chất cấu tạo nên xương và răng. Trong cơ thể, canxi còn tham gia co cơ và truyền tín hiệu tế bào."
    },
    {
      icon: "🧂",
      context: "NHÀ BẾP",
      question: "Muối ăn thông thường chứa hợp chất nào được tạo thành từ natri và clo?",
      answers: ["NaOH", "Na₂CO₃", "HCl", "NaCl"],
      correct: 3,
      explain: "Muối ăn chủ yếu là natri clorua (NaCl), gồm hai nguyên tố natri và clo. Đây là hợp chất ion, không phải hỗn hợp kim loại natri với khí clo."
    },
    {
      icon: "🔋",
      context: "NĂNG LƯỢNG",
      question: "Nguyên tố nào được sử dụng rộng rãi trong pin sạc của điện thoại và máy tính xách tay?",
      answers: ["Li — Liti", "Ne — Neon", "Ca — Canxi", "Kr — Krypton"],
      correct: 0,
      explain: "Pin lithium-ion sử dụng liti trong vật liệu điện cực. Đây là công nghệ pin sạc phổ biến trong điện thoại, laptop và nhiều thiết bị điện tử."
    },
    {
      icon: "💡",
      context: "THIẾT BỊ ĐIỆN",
      question: "Nguyên tố nào có nhiệt độ nóng chảy rất cao và từng được dùng phổ biến làm dây tóc bóng đèn sợi đốt?",
      answers: ["Na — Natri", "W — Vonfram", "Pb — Chì", "Zn — Kẽm"],
      correct: 1,
      explain: "Vonfram có nhiệt độ nóng chảy rất cao nên thích hợp làm dây tóc bóng đèn sợi đốt. Đèn LED hiện đại hoạt động theo nguyên lý khác."
    },
    {
      icon: "📱",
      context: "THIẾT BỊ ĐIỆN TỬ",
      question: "Nguyên tố quý nào có khả năng chống ăn mòn và được sử dụng ở một số đầu nối, tiếp điểm điện tử?",
      answers: ["K — Kali", "Ca — Canxi", "Au — Vàng", "S — Lưu huỳnh"],
      correct: 2,
      explain: "Vàng có khả năng chống ăn mòn tốt và dẫn điện tốt nên được dùng ở một số đầu nối, tiếp điểm điện tử. Lượng vàng trong mỗi thiết bị thường nhỏ."
    },
    {
      icon: "🌱",
      context: "NÔNG NGHIỆP",
      question: "Nguyên tố nào là thành phần dinh dưỡng quan trọng trong nhiều loại phân bón giúp cây phát triển?",
      answers: ["Ar — Argon", "Au — Vàng", "He — Heli", "N — Nitơ"],
      correct: 3,
      explain: "Nitơ là nguyên tố thiết yếu cho sự phát triển của cây. Nhiều loại phân bón cung cấp nitơ dưới dạng hợp chất như amoni hoặc nitrat."
    },
    {
      icon: "🍽️",
      context: "ĐỒ DÙNG",
      question: "Nguyên tố nào thường có mặt trong thép không gỉ giúp tăng khả năng chống ăn mòn?",
      answers: ["Cr — Crom", "H — Hiđro", "C — Cacbon", "Ne — Neon"],
      correct: 0,
      explain: "Crom giúp thép không gỉ hình thành lớp màng oxit mỏng bảo vệ bề mặt, nhờ đó tăng khả năng chống ăn mòn."
    },
    {
      icon: "🧲",
      context: "CÔNG NGHỆ XANH",
      question: "Nguyên tố đất hiếm nào được sử dụng trong nhiều nam châm vĩnh cửu mạnh của tua-bin gió?",
      answers: ["Na — Natri", "Nd — Neodim", "O — Oxi", "He — Heli"],
      correct: 1,
      explain: "Neodim được dùng trong nam châm neodim-sắt-bo (NdFeB), có lực từ mạnh và được sử dụng trong một số thiết kế máy phát điện tua-bin gió."
    }
  ];


  var soCauMoiLuot = 10;
  var boCauHoi = [];
  var viTriCau = 0;
  var diem = 0;
  var daTraLoi = 0;
  var khoaTraLoi = false;


  var el = {
    card: document.getElementById("quiz-card"),
    score: document.getElementById("quiz-score"),
    progress: document.getElementById("quiz-progress"),
    accuracy: document.getElementById("quiz-accuracy"),
    bar: document.getElementById("quiz-progress-bar"),
    category: document.getElementById("quiz-category"),
    symbol: document.getElementById("quiz-symbol"),
    name: document.getElementById("quiz-element-name"),
    question: document.getElementById("quiz-question"),
    answers: document.getElementById("quiz-answers"),
    feedback: document.getElementById("quiz-feedback"),
    next: document.getElementById("quiz-next"),
    restart: document.getElementById("quiz-restart")
  };


  // Trộn mảng theo Fisher-Yates, không làm thay đổi ngân hàng gốc.
  function tronMang(mang) {
    var ketQua = mang.slice();


    for (var i = ketQua.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tam = ketQua[i];
      ketQua[i] = ketQua[j];
      ketQua[j] = tam;
    }


    return ketQua;
  }


  function capNhatThongKe() {
    el.score.textContent = diem;
    el.progress.textContent =
      Math.min(viTriCau + 1, soCauMoiLuot) + "/" + soCauMoiLuot;


    el.accuracy.textContent = daTraLoi
      ? Math.round(diem / daTraLoi * 100) + "%"
      : "—";


    el.bar.style.width =
      (viTriCau / soCauMoiLuot * 100) + "%";
  }


  function hienCauHoi() {
    khoaTraLoi = false;
    var cau = boCauHoi[viTriCau];


    el.category.textContent = cau.context;
    el.symbol.textContent = cau.icon;
    el.name.textContent = "Ứng dụng trong đời sống";
    el.question.textContent = cau.question;
    el.answers.replaceChildren();


    el.feedback.className = "quiz-feedback";
    el.feedback.textContent =
      "Chọn một đáp án để khám phá kiến thức nhé!";


    el.next.disabled = true;
    el.next.textContent =
      viTriCau === soCauMoiLuot - 1
        ? "Xem kết quả →"
        : "Câu tiếp theo →";


    cau.answers.forEach(function (dapAn, i) {
      var nut = document.createElement("button");
      nut.type = "button";
      nut.className = "quiz-answer";


      var chuCai = document.createElement("span");
      chuCai.className = "answer-letter";
      chuCai.textContent = String.fromCharCode(65 + i);


      var noiDung = document.createElement("span");
      noiDung.textContent = dapAn;


      nut.appendChild(chuCai);
      nut.appendChild(noiDung);


      nut.addEventListener("click", function () {
        chonDapAn(i);
      });


      el.answers.appendChild(nut);
    });


    capNhatThongKe();
  }


  function chonDapAn(luaChon) {
    if (khoaTraLoi) return;


    khoaTraLoi = true;
    daTraLoi++;


    var cau = boCauHoi[viTriCau];
    var dung = luaChon === cau.correct;
    var cacNut = el.answers.querySelectorAll(".quiz-answer");


    if (dung) diem++;


    cacNut.forEach(function (nut, i) {
      nut.disabled = true;


      if (i === cau.correct) {
        nut.classList.add("dung");
      } else if (i === luaChon) {
        nut.classList.add("sai");
      }
    });


    el.feedback.className =
      "quiz-feedback " + (dung ? "dung" : "sai");


    el.feedback.textContent =
      (dung ? "✓ Chính xác! " : "✗ Chưa đúng. ") +
      cau.explain;


    el.next.disabled = false;
    capNhatThongKe();
  }


  function hienKetQua() {
    el.bar.style.width = "100%";
    el.progress.textContent =
      soCauMoiLuot + "/" + soCauMoiLuot;
    el.accuracy.textContent =
      Math.round(diem / soCauMoiLuot * 100) + "%";


    el.category.textContent = "HOÀN THÀNH THỬ THÁCH";
    el.symbol.textContent =
      diem === soCauMoiLuot ? "🏆" :
      diem >= 7 ? "🧪" : "📚";
    el.name.textContent = "Kết quả của bạn";
    el.question.textContent =
      "Bạn trả lời đúng " + diem + "/" + soCauMoiLuot +
      " câu hỏi!";


    el.answers.replaceChildren();


    var danhGia;
    if (diem === soCauMoiLuot) {
      danhGia = "Xuất sắc! Bạn là chuyên gia nguyên tố!";
    } else if (diem >= 7) {
      danhGia = "Rất tốt! Bạn đã hiểu khá nhiều ứng dụng hóa học.";
    } else if (diem >= 4) {
      danhGia = "Khá ổn! Chơi lại để khám phá thêm nhé.";
    } else {
      danhGia = "Đừng nản nhé! Mỗi câu sai là một kiến thức mới.";
    }


    el.feedback.className = "quiz-feedback dung";
    el.feedback.textContent = danhGia +
      " Điểm được tính theo số câu trả lời đúng.";


    el.next.disabled = true;
    el.next.textContent = "Đã hoàn thành ✓";
  }


  function batDauLai() {
    boCauHoi = tronMang(nganHangCauHoi).slice(0, soCauMoiLuot);
    viTriCau = 0;
    diem = 0;
    daTraLoi = 0;
    hienCauHoi();
  }


  el.next.addEventListener("click", function () {
    if (!khoaTraLoi) return;


    if (viTriCau < soCauMoiLuot - 1) {
      viTriCau++;
      hienCauHoi();
    } else {
      hienKetQua();
    }
  });


  el.restart.addEventListener("click", batDauLai);


  // Khởi tạo game sau khi kiểm tra các phần tử HTML.
  if (
    el.card && el.score && el.progress && el.accuracy &&
    el.bar && el.category && el.symbol && el.name &&
    el.question && el.answers && el.feedback &&
    el.next && el.restart
  ) {
    batDauLai();
  } else {
    console.error("Mini game: Không tìm thấy đủ phần tử HTML.");
  }
})();
// MỞ / ĐÓNG MỤC ĐỐ VUI
var nutMoQuiz = document.getElementById("quiz-open-button");
var khuVucQuiz = document.getElementById("khu-do-vui");


if (nutMoQuiz && khuVucQuiz) {
  nutMoQuiz.addEventListener("click", function () {
    var dangMo = khuVucQuiz.classList.toggle("quiz-dang-mo");


    nutMoQuiz.innerHTML = dangMo
      ? '✖ Đóng mục đố vui<span>Quay lại bảng tuần hoàn</span>'
      : '🎯 Đố vui nguyên tố<span>Khám phá ứng dụng hóa học trong đời sống →</span>';


    if (dangMo) {
      khuVucQuiz.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
} else {
  console.error("Thiếu #quiz-open-button hoặc #khu-do-vui trong HTML!");
}
