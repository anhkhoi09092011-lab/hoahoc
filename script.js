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
var rx = 0, ry = 0, vx = 0, vy = 0, z = 0, tiLe = 1;
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
// ----- Cảm ứng (điện thoại): vuốt ngang/dọc để xoay; cuộn dọc trang vẫn hoạt động -----
khung.addEventListener("touchstart", function (e) {
  if (e.touches.length !== 1) return;
  var t = e.touches[0];
  dangKeo = true; tongKeo = 0; daKeoXa = false;
  truocX = t.clientX; truocY = t.clientY;
  khung.classList.add("dang-keo");
}, { passive: true });
khung.addEventListener("touchmove", function (e) {
  if (!dangKeo || e.touches.length !== 1) return;
  var t = e.touches[0];
  var dx = t.clientX - truocX, dy = t.clientY - truocY;
  truocX = t.clientX; truocY = t.clientY;
  tongKeo += Math.abs(dx) + Math.abs(dy);
  if (tongKeo > 5) datLai = false;
  ry += dx * 0.4;
  rx -= dy * 0.4;
  vy = dx * 0.4;
  vx = -dy * 0.4;
  if (cheDo === "table") gioiHanTable();
}, { passive: true });
function ketThucCham() {
  if (!dangKeo) return;
  dangKeo = false;
  khung.classList.remove("dang-keo");
  daKeoXa = tongKeo > 8;
  setTimeout(function () { daKeoXa = false; }, 400);   // chặn "click" giả sinh ra sau khi vuốt
}
khung.addEventListener("touchend", ketThucCham);
khung.addEventListener("touchcancel", ketThucCham);

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
  if (cheDo === "table") gioiHanTable();
});

// Dạng table: chỉ cho xoay trong một góc giới hạn, không cho xoay ra mặt sau
var GIOI_HAN_TABLE_Y = 60, GIOI_HAN_TABLE_X = 40;
function gioiHanTable() {
  if (Math.abs(ry) > GIOI_HAN_TABLE_Y) { ry = Math.sign(ry) * GIOI_HAN_TABLE_Y; vy = 0; }
  if (Math.abs(rx) > GIOI_HAN_TABLE_X) { rx = Math.sign(rx) * GIOI_HAN_TABLE_X; vx = 0; }
}




function vong() {
  var t = thongSo[cheDo];




  if (cheDo === "table" && datLai) {
    // dạng bảng chưa bị kéo: nghiêng nhẹ theo chuột
    if (!dangKeo) {
      rx += (-chuot.y * 8 - rx) * 0.06;
      ry += (chuot.x * 12 - ry) * 0.06;
    }
  } else if (!dangKeo) {
    // sau khi kéo (và ở sphere/helix): quán tính; table bị giới hạn góc nên không xoay ra mặt sau
    ry += vy + t.xoay;
    rx += vx;
    vy *= 0.95; vx *= 0.95;
    if (cheDo !== "table") rx = Math.max(-70, Math.min(70, rx));
    else gioiHanTable();
  }




  z += (t.z - z) * 0.06;
  // Co sân khấu theo chiều rộng màn hình để vừa điện thoại (bảng rộng ~1250px, cầu/xoắn ốc ~900px)
  var tiLeMuc = Math.min(1, window.innerWidth / (cheDo === "table" ? 1250 : 900));
  tiLe += (tiLeMuc - tiLe) * 0.12;
  bang.style.transform =
    "translateZ(" + z + "px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) scale(" + tiLe + ")";




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






// ===== MÔ HÌNH NGUYÊN TỬ RUTHERFORD–BOHR 2D =====


// Thứ tự điền electron vào các phân lớp theo quy tắc Aufbau.
// Mỗi phân lớp có sức chứa: s=2, p=6, d=10, f=14.
function layPhanBoLop(soProton) {
  var cacPhanLop = [
    ["1s", 2], ["2s", 2], ["2p", 6],
    ["3s", 2], ["3p", 6], ["4s", 2],
    ["3d", 10], ["4p", 6], ["5s", 2],
    ["4d", 10], ["5p", 6], ["6s", 2],
    ["4f", 14], ["5d", 10], ["6p", 6],
    ["7s", 2], ["5f", 14], ["6d", 10],
    ["7p", 6]
  ];


  var soElectronMoiLop = [0, 0, 0, 0, 0, 0, 0];


  var conLai = soProton;


  for (var i = 0; i < cacPhanLop.length && conLai > 0; i++) {
    var tenPhanLop = cacPhanLop[i][0];
    var sucChua = cacPhanLop[i][1];
    var soLop = parseInt(tenPhanLop, 10);


    var soElectron = Math.min(conLai, sucChua);


    soElectronMoiLop[soLop - 1] += soElectron;
    conLai -= soElectron;
  }


  // Điều chỉnh một số cấu hình ngoại lệ phổ biến của nguyên tố chuyển tiếp.
  // Mỗi mục: [lớp chuyển electron đi, lớp nhận electron, số electron].
  var ngoaiLe = {
    24: [[4, 3, 1]],  // Cr
    29: [[4, 3, 1]],  // Cu
    41: [[5, 4, 1]],  // Nb
    42: [[5, 4, 1]],  // Mo
    44: [[5, 4, 1]],  // Ru
    45: [[5, 4, 1]],  // Rh
    46: [[5, 4, 2]],  // Pd
    47: [[5, 4, 1]],  // Ag
    78: [[6, 5, 1]],  // Pt
    79: [[6, 5, 1]]   // Au
  };


  var dieuChinh = ngoaiLe[soProton] || [];


  dieuChinh.forEach(function (muc) {
    var lopDi = muc[0] - 1;
    var lopNhan = muc[1] - 1;
    var soLuong = muc[2];


    if (soElectronMoiLop[lopDi] >= soLuong) {
      soElectronMoiLop[lopDi] -= soLuong;
      soElectronMoiLop[lopNhan] += soLuong;
    }
  });


  // Loại bỏ các lớp trống ở cuối.
  while (
    soElectronMoiLop.length > 1 &&
    soElectronMoiLop[soElectronMoiLop.length - 1] === 0
  ) {
    soElectronMoiLop.pop();
  }


  return soElectronMoiLop;
}




// Tạo SVG mô hình nguyên tử. Electron được gom theo lớp vào các nhóm quay quanh hạt nhân.
function taoSVGNguyenTu(soProton, phanBo) {
  var NS = "http://www.w3.org/2000/svg";
  var kichThuoc = 400;
  var tam = kichThuoc / 2;
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 400 400");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Mô hình nguyên tử có " + soProton + " proton và " + soProton + " electron");

  function themHinh(cha, ten, thuocTinh) {
    var hinh = document.createElementNS(NS, ten);
    Object.keys(thuocTinh).forEach(function (khoa) { hinh.setAttribute(khoa, thuocTinh[khoa]); });
    cha.appendChild(hinh);
    return hinh;
  }

  var soLop = phanBo.length;
  var banKinhHatNhan = Math.min(10 + Math.sqrt(soProton) * 1.6, 30);
  var banKinhLop = [];
  // Các lớp giãn đều từ gần hạt nhân ra gần sát mép khung để mô hình cân đối, không bị dồn vào giữa.
  var banKinhTrong = Math.max(banKinhHatNhan + 20, 44);
  var banKinhNgoai = 180;
  for (var i = 0; i < soLop; i++) {
    banKinhLop.push(soLop === 1 ? 100 : banKinhTrong + i * ((banKinhNgoai - banKinhTrong) / (soLop - 1)));
  }
  var mauLop = ["#6edc3c", "#45d6b5", "#5bbcff", "#b18cff", "#ffb454", "#ff7fa8", "#d4e36c"];

  // Các vòng lớp electron cố định.
  banKinhLop.forEach(function (banKinh, i) {
    themHinh(svg, "circle", { cx: tam, cy: tam, r: banKinh, class: "atom-shell-ring", stroke: mauLop[i % mauLop.length] });
  });

  themHinh(svg, "circle", { cx: tam, cy: tam, r: banKinhHatNhan + 3, class: "atom-nucleus-glow" });

  // Xếp proton trong hạt nhân.
  var banKinhProton = 2.8;
  var buocProton = banKinhProton * 2.15;
  var cacViTriProton = [[tam, tam]];
  var soVongToiDa = Math.ceil((banKinhHatNhan + buocProton) / buocProton) + 2;
  for (var vong = 1; vong <= soVongToiDa && cacViTriProton.length < soProton; vong++) {
    var soDiemVong = Math.max(6, Math.round(2 * Math.PI * vong));
    for (var j = 0; j < soDiemVong && cacViTriProton.length < soProton; j++) {
      var goc = (2 * Math.PI * j / soDiemVong) + (vong % 2) * 0.18;
      var x = tam + Math.cos(goc) * vong * buocProton;
      var y = tam + Math.sin(goc) * vong * buocProton;
      if (Math.hypot(x - tam, y - tam) <= banKinhHatNhan - 2) cacViTriProton.push([x, y]);
    }
  }
  if (cacViTriProton.length < soProton) {
    cacViTriProton = [];
    for (var p = 0; p < soProton; p++) {
      var gocProton = p * 2.399963229728653;
      var banKinhDat = Math.sqrt(p / Math.max(soProton, 1)) * Math.max(0, banKinhHatNhan - 3);
      cacViTriProton.push([tam + Math.cos(gocProton) * banKinhDat, tam + Math.sin(gocProton) * banKinhDat]);
    }
  }
  cacViTriProton.forEach(function (viTri) {
    themHinh(svg, "circle", { cx: viTri[0], cy: viTri[1], r: banKinhProton, class: "atom-proton" });
  });
  if (soProton >= 20) {
    var nhan = themHinh(svg, "text", { x: tam, y: tam, class: "atom-center-label" });
    nhan.textContent = soProton + "p+";
  }

  // Mỗi lớp có một nhóm riêng; animateTransform làm electron quay quanh tâm hạt nhân.
  phanBo.forEach(function (soElectron, index) {
    var banKinh = banKinhLop[index];
    var orbit = themHinh(svg, "g", { class: "atom-orbit", "data-shell": index + 1 });
    orbit.style.animationDuration = (16 + index * 5) + "s";   // quay chậm
    orbit.style.animationDirection = index % 2 ? "reverse" : "normal";
    for (var e = 0; e < soElectron; e++) {
      var gocElectron = (2 * Math.PI * e / soElectron) + index * 0.32;
      var ex = tam + Math.cos(gocElectron) * banKinh;
      var ey = tam + Math.sin(gocElectron) * banKinh;
      themHinh(orbit, "circle", { cx: ex, cy: ey, r: 4, class: "atom-electron" });
    }
  });
  return svg;
}

// Cấu hình phân lớp electron, giữ nguyên dữ liệu và các ngoại lệ đã dùng cho mô hình lớp.
function layCauHinhPhanLop(soProton) {
  var cacPhanLop = [["1s",2],["2s",2],["2p",6],["3s",2],["3p",6],["4s",2],["3d",10],["4p",6],["5s",2],["4d",10],["5p",6],["6s",2],["4f",14],["5d",10],["6p",6],["7s",2],["5f",14],["6d",10],["7p",6]];
  var ngoaiLe = {24:[["4s",1],["3d",5]],29:[["4s",1],["3d",10]],41:[["5s",1],["4d",4]],42:[["5s",1],["4d",5]],44:[["5s",1],["4d",7]],45:[["5s",1],["4d",8]],46:[["5s",0],["4d",10]],47:[["5s",1],["4d",10]],78:[["6s",1],["5d",9]],79:[["6s",1],["5d",10]]};
  var conLai = soProton, ketQua = [];
  cacPhanLop.forEach(function (muc) {
    var so = Math.min(conLai, muc[1]);
    if (so > 0) ketQua.push({ten:muc[0], so:so});
    conLai -= so;
  });
  var ngoai = ngoaiLe[soProton];
  if (ngoai) {
    ketQua = ketQua.filter(function (m) { return m.ten !== ngoai[0][0] && m.ten !== ngoai[1][0]; });
    ngoai.forEach(function (m) { if (m[1] > 0) ketQua.push({ten:m[0], so:m[1]}); });
    var thuTu = cacPhanLop.map(function (m) { return m[0]; });
    ketQua.sort(function (a,b) { return thuTu.indexOf(a.ten)-thuTu.indexOf(b.ten); });
  }
  return ketQua.map(function (m) { return m.ten + "<sup>" + m.so + "</sup>"; }).join(" ");
}


function layCauHinhRutGon(soProton) {
  var khiHiem = [{so:86,k:"Rn"},{so:54,k:"Xe"},{so:36,k:"Kr"},{so:18,k:"Ar"},{so:10,k:"Ne"},{so:2,k:"He"}];
  var full = layCauHinhPhanLop(soProton);
  for (var i=0;i<khiHiem.length;i++){ if(soProton<=khiHiem[i].so) continue; var prefix=layCauHinhPhanLop(khiHiem[i].so); if(full.indexOf(prefix)===0) return "["+khiHiem[i].k+"]"+full.slice(prefix.length); }
  return full;
}
function toggleCauHinhElectron(el){ var box=el.closest(".electron-config-box"); if(box) box.classList.toggle("expanded"); }

// Cập nhật toàn bộ mô hình khi chọn nguyên tố.
function veMoHinhNguyenTu(soProton) {
  var khung = document.getElementById("atom-visual");
  var thongKe = document.getElementById("atom-summary");
  var danhSachLop = document.getElementById("atom-shell-list");


  if (!khung || !thongKe || !danhSachLop) {
    console.error("Thiếu khu vực hiển thị mô hình nguyên tử trong HTML.");
    return;
  }


  var phanBo = layPhanBoLop(soProton);


  // Xóa mô hình nguyên tố trước.
  khung.replaceChildren();
  danhSachLop.replaceChildren();


  // Tạo và gắn SVG mới.
  khung.appendChild(taoSVGNguyenTu(soProton, phanBo));


  thongKe.textContent =
    "Proton: " + soProton +
    "  |  Electron: " + soProton +
    "  |  Số lớp electron: " + phanBo.length;


  var tenLop = [
    "K (lớp 1)", "L (lớp 2)", "M (lớp 3)",
    "N (lớp 4)", "O (lớp 5)", "P (lớp 6)",
    "Q (lớp 7)"
  ];


  phanBo.forEach(function (soElectron, i) {
    var muc = document.createElement("div");
    muc.className = "atom-shell-item";


    var ten = document.createElement("strong");
    ten.textContent = tenLop[i] + ": ";


    var so = document.createElement("span");
    so.textContent = soElectron + " electron";


    muc.appendChild(ten);
    muc.appendChild(so);
    danhSachLop.appendChild(muc);
  });

  var cauHinh = document.getElementById("electron-configuration");
  if (cauHinh) {
    var rutGon = layCauHinhRutGon(soProton);
    var dayDu = layCauHinhPhanLop(soProton);
    if (/^\[[A-Za-z]+\]/.test(rutGon)) {
      cauHinh.innerHTML = "<strong>Cấu hình phân lớp:</strong><br><span class=\"electron-config-box\"><span class=\"electron-config-short\" role=\"button\" tabindex=\"0\" onclick=\"toggleCauHinhElectron(this)\" onkeydown=\"if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleCauHinhElectron(this)}\">" + rutGon + "</span><span class=\"electron-config-full\" role=\"button\" tabindex=\"0\" onclick=\"toggleCauHinhElectron(this)\" onkeydown=\"if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleCauHinhElectron(this)}\">" + dayDu + "</span></span>";
    } else { cauHinh.innerHTML = "<strong>Cấu hình phân lớp:</strong><br>" + dayDu; }
  }
}





var DU_LIEU_DONG_VI_TU_NHIEN = {"H": [[1, 1.007825, 99.9885], [2, 2.014102, 0.0115]], "He": [[3, 3.016029, 0.000137], [4, 4.002603, 99.999863]], "Li": [[6, 6.015123, 7.59], [7, 7.016005, 92.41]], "Be": [[9, 9.012183, 100]], "B": [[10, 10.012937, 19.9], [11, 11.009305, 80.1]], "C": [[12, 12.0, 98.93], [13, 13.003355, 1.07]], "N": [[14, 14.003074, 99.636], [15, 15.000109, 0.364]], "O": [[16, 15.994915, 99.757], [17, 16.999132, 0.038], [18, 17.99916, 0.205]], "F": [[19, 18.998403, 100]], "Ne": [[20, 19.99244, 90.48], [21, 20.993847, 0.27], [22, 21.991386, 9.25]], "Na": [[23, 22.989769, 100]], "Mg": [[24, 23.985042, 78.99], [25, 24.985837, 10.0], [26, 25.982593, 11.01]], "Al": [[27, 26.981539, 100]], "Si": [[28, 27.976927, 92.223], [29, 28.976495, 4.685], [30, 29.97377, 3.092]], "P": [[31, 30.973762, 100]], "S": [[32, 31.972071, 94.99], [33, 32.971459, 0.75], [34, 33.967868, 4.25], [36, 35.967081, 0.01]], "Cl": [[35, 34.968853, 75.78], [37, 36.965903, 24.22]], "Ar": [[36, 35.967545, 0.3336], [38, 37.962732, 0.0629], [40, 39.962383, 99.6035]], "K": [[39, 38.963707, 93.2581], [40, 39.963999, 0.0117], [41, 40.961826, 6.7302]], "Ca": [[40, 39.962591, 96.941], [42, 41.958618, 0.647], [43, 42.958767, 0.135], [44, 43.955482, 2.086], [46, 45.953689, 0.004], [48, 47.952523, 0.187]], "Sc": [[45, 44.955908, 100]], "Ti": [[46, 45.952628, 8.25], [47, 46.951759, 7.44], [48, 47.947942, 73.72], [49, 48.947866, 5.41], [50, 49.944787, 5.18]], "V": [[50, 49.947156, 0.25], [51, 50.943957, 99.75]], "Cr": [[50, 49.946042, 4.345], [52, 51.940506, 83.789], [53, 52.940648, 9.501], [54, 53.938879, 2.365]], "Mn": [[55, 54.938044, 100]], "Fe": [[54, 53.939609, 5.845], [56, 55.934936, 91.754], [57, 56.935393, 2.119], [58, 57.933274, 0.282]], "Co": [[59, 58.933194, 100]], "Ni": [[58, 57.935342, 68.077], [60, 59.930786, 26.223], [61, 60.931056, 1.1399], [62, 61.928345, 3.6346], [64, 63.927967, 0.9255]], "Cu": [[63, 62.929598, 69.15], [65, 64.92779, 30.85]], "Zn": [[64, 63.929142, 49.17], [66, 65.926034, 27.73], [67, 66.927128, 4.04], [68, 67.924845, 18.45], [70, 69.92532, 0.61]], "Ga": [[69, 68.925574, 60.108], [71, 70.924703, 39.892]], "Ge": [[70, 69.924249, 20.57], [72, 71.922076, 27.45], [73, 72.923459, 7.75], [74, 73.921178, 36.5], [76, 75.921403, 7.73]], "As": [[75, 74.921595, 100]], "Se": [[74, 73.922476, 0.89], [76, 75.919214, 9.37], [77, 76.919914, 7.63], [78, 77.917309, 23.77], [80, 79.916522, 49.61], [82, 81.9167, 8.73]], "Br": [[79, 78.918338, 50.69], [81, 80.916291, 49.31]], "Kr": [[78, 77.920365, 0.355], [80, 79.916378, 2.286], [82, 81.913483, 11.593], [83, 82.914127, 11.5], [84, 83.911498, 56.987], [86, 85.910611, 17.279]], "Rb": [[85, 84.91179, 72.17], [87, 86.909181, 27.83]], "Sr": [[84, 83.913419, 0.56], [86, 85.909261, 9.86], [87, 86.908878, 7], [88, 87.905612, 82.58]], "Y": [[89, 88.90584, 100]], "Zr": [[90, 89.904698, 51.45], [91, 90.90564, 11.22], [92, 91.905035, 17.15], [94, 93.906311, 17.38], [96, 95.908271, 2.8]], "Nb": [[93, 92.906373, 100]], "Mo": [[92, 91.906808, 14.53], [94, 93.905085, 9.15], [95, 94.905839, 15.84], [96, 95.904676, 16.67], [97, 96.906018, 9.6], [98, 97.905405, 24.39], [100, 99.907472, 9.82]], "Ru": [[96, 95.90759, 5.54], [98, 97.905287, 1.87], [99, 98.905934, 12.76], [100, 99.904214, 12.6], [101, 100.905577, 17.06], [102, 101.904344, 31.55], [104, 103.905428, 18.62]], "Rh": [[103, 102.905498, 100]], "Pd": [[102, 101.905602, 1.02], [104, 103.90403, 11.14], [105, 104.90508, 22.33], [106, 105.90348, 27.33], [108, 107.903892, 26.46], [110, 109.905172, 11.72]], "Ag": [[107, 106.905092, 51.839], [109, 108.904756, 48.161]], "Cd": [[106, 105.90646, 1.25], [108, 107.904183, 0.89], [110, 109.903007, 12.49], [111, 110.904183, 12.8], [112, 111.902763, 24.13], [113, 112.904408, 12.22], [114, 113.903365, 28.73], [116, 115.904763, 7.49]], "In": [[113, 112.904062, 4.29], [115, 114.903879, 95.71]], "Sn": [[112, 111.904824, 0.97], [114, 113.902783, 0.66], [115, 114.903344, 0.34], [116, 115.901743, 14.54], [117, 116.902954, 7.68], [118, 117.901607, 24.22], [119, 118.903311, 8.59], [120, 119.902202, 32.58], [122, 121.903444, 4.63], [124, 123.905277, 5.79]], "Sb": [[121, 120.903812, 57.21], [123, 122.904213, 42.79]], "Te": [[120, 119.904059, 0.09], [122, 121.903044, 2.55], [123, 122.90427, 0.89], [124, 123.902817, 4.74], [125, 124.90443, 7.07], [126, 125.903311, 18.84], [128, 127.904461, 31.74], [130, 129.906223, 34.08]], "I": [[127, 126.904472, 100]], "Xe": [[124, 123.905893, 0.095], [126, 125.904274, 0.089], [128, 127.903531, 1.91], [129, 128.90478, 26.401], [130, 129.903509, 4.071], [131, 130.905084, 21.232], [132, 131.904155, 26.909], [134, 133.905394, 10.436], [136, 135.907214, 8.857]], "Cs": [[133, 132.905452, 100]], "Ba": [[130, 129.906321, 0.106], [132, 131.905061, 0.101], [134, 133.904508, 2.417], [135, 134.905688, 6.592], [136, 135.904576, 7.854], [137, 136.905827, 11.232], [138, 137.905247, 71.698]], "La": [[138, 137.907115, 0.08881], [139, 138.906356, 99.91119]], "Ce": [[136, 135.907129, 0.185], [138, 137.905991, 0.251], [140, 139.905443, 88.45], [142, 141.90925, 11.114]], "Pr": [[141, 140.907658, 100]], "Nd": [[142, 141.907729, 27.152], [143, 142.90982, 12.174], [144, 143.910093, 23.798], [145, 144.912579, 8.293], [146, 145.913123, 17.189], [148, 147.916899, 5.756], [150, 149.920902, 5.638]], "Sm": [[144, 143.912006, 3.07], [147, 146.914904, 14.99], [148, 147.914829, 11.24], [149, 148.917192, 13.82], [150, 149.917283, 7.38], [152, 151.91974, 26.75], [154, 153.922217, 22.75]], "Eu": [[151, 150.919858, 47.81], [153, 152.921238, 52.19]], "Gd": [[152, 151.9198, 0.2], [154, 153.920874, 2.18], [155, 154.92263, 14.8], [156, 155.922131, 20.47], [157, 156.923969, 15.65], [158, 157.924112, 24.84], [160, 159.927062, 21.86]], "Tb": [[159, 158.925355, 100]], "Dy": [[156, 155.924285, 0.056], [158, 157.924416, 0.095], [160, 159.925205, 2.329], [161, 160.92694, 18.889], [162, 161.926806, 25.475], [163, 162.928738, 24.896], [164, 163.929182, 28.26]], "Ho": [[165, 164.930329, 100]], "Er": [[162, 161.928788, 0.139], [164, 163.929209, 1.601], [166, 165.9303, 33.503], [167, 166.932055, 22.869], [168, 167.932377, 26.978], [170, 169.93547, 14.91]], "Tm": [[169, 168.934218, 100]], "Yb": [[168, 167.93389, 0.123], [170, 169.934766, 2.982], [171, 170.93633, 14.09], [172, 171.936386, 21.68], [173, 172.938215, 16.103], [174, 173.938866, 32.026], [176, 175.942576, 12.996]], "Lu": [[175, 174.940775, 97.401], [176, 175.94269, 2.599]], "Hf": [[174, 173.940046, 0.16], [176, 175.941408, 5.26], [177, 176.943228, 18.6], [178, 177.943706, 27.28], [179, 178.945823, 13.62], [180, 179.946557, 35.08]], "Ta": [[180, 179.947465, 0.01201], [181, 180.947996, 99.98799]], "W": [[180, 179.946711, 0.12], [182, 181.948204, 26.5], [183, 182.950223, 14.31], [184, 183.950931, 30.64], [186, 185.954363, 28.43]], "Re": [[185, 184.952954, 37.4], [187, 186.95575, 62.6]], "Os": [[184, 183.952488, 0.02], [186, 185.953835, 1.59], [187, 186.955747, 1.96], [188, 187.955835, 13.24], [189, 188.958144, 16.15], [190, 189.958444, 26.26], [192, 191.961477, 40.78]], "Ir": [[191, 190.960589, 37.3], [193, 192.962922, 62.7]], "Pt": [[190, 189.95993, 0.012], [192, 191.961039, 0.782], [194, 193.962681, 32.86], [195, 194.964792, 33.78], [196, 195.964952, 25.21], [198, 197.967895, 7.356]], "Au": [[197, 196.966569, 100]], "Hg": [[196, 195.965833, 0.15], [198, 197.966769, 9.97], [199, 198.968281, 16.87], [200, 199.968327, 23.1], [201, 200.970303, 13.18], [202, 201.970644, 29.86], [204, 203.973494, 6.87]], "Tl": [[203, 202.972345, 29.52], [205, 204.974428, 70.48]], "Pb": [[204, 203.973044, 1.4], [206, 205.974466, 24.1], [207, 206.975897, 22.1], [208, 207.976652, 52.4]], "Bi": [[209, 208.980399, 100]], "Th": [[232, 232.038056, 100]], "Pa": [[231, 231.035884, 100]], "U": [[234, 234.040952, 0.0054], [235, 235.04393, 0.7204], [238, 238.050788, 99.2742]]};
// Các đồng vị phóng xạ được hiển thị trong bảng nhưng không gán phần trăm tự nhiên.
// Dữ liệu hiện tại tích hợp triti (H-3) làm ví dụ.
var DONG_VI_PHONG_XA = {
  H: [[3, 3.016049]], C: [[14, 14.003242]], N: [[13, 13.005739]], O: [[15, 15.003066]],
  P: [[32, 31.973907]], S: [[35, 34.969032]], K: [[40, 39.963999]], Ca: [[41, 40.962278]],
  Fe: [[55, 54.938294]], Co: [[60, 59.933822]], Ni: [[63, 62.929669]], Cu: [[64, 63.929764]],
  Zn: [[65, 64.929241]], Kr: [[85, 84.912527]], Sr: [[90, 89.907738]], Tc: [[98, 97.907216]],
  Ru: [[106, 105.907329]], Pd: [[107, 106.905128]], Ag: [[110, 109.906110]], Cd: [[109, 108.904986]],
  In: [[115, 114.903878]], Sn: [[121, 120.904243]], Sb: [[124, 123.905277]], Te: [[127, 126.904473]],
  I: [[131, 130.906126]], Xe: [[133, 132.905910]], Cs: [[137, 136.907089]], Ba: [[140, 139.910606]],
  La: [[140, 139.911038]], Ce: [[144, 143.913653]], Pm: [[145, 144.912755]], Sm: [[151, 150.919939]],
  Eu: [[152, 151.921752]], Gd: [[153, 152.921238]], Tb: [[158, 157.925420]], Dy: [[165, 164.931703]],
  Ho: [[166, 165.932290]], Er: [[169, 168.935183]], Tm: [[170, 169.935477]], Yb: [[169, 168.935182]],
  Lu: [[176, 175.942576]], Hf: [[182, 181.950563]], Ta: [[180, 179.947466]], W: [[185, 184.953419]],
  Re: [[186, 185.954986]], Os: [[194, 193.965078]], Ir: [[192, 191.962605]], Pt: [[193, 192.962984]],
  Au: [[198, 197.968243]], Hg: [[203, 202.970602]], Tl: [[204, 203.973863]], Pb: [[210, 209.984188]],
  Bi: [[210, 209.984120]], Po: [[210, 209.982874]], At: [[210, 209.987148]], Rn: [[222, 222.017578]],
  Fr: [[223, 223.019736]], Ra: [[226, 226.025410]], Ac: [[227, 227.027752]], Th: [[230, 230.033134]],
  Pa: [[231, 231.035884]], U: [[239, 239.054293]], Np: [[237, 237.048173]], Pu: [[239, 239.052163]],
  Am: [[241, 241.056829]], Cm: [[244, 244.062752]], Bk: [[247, 247.070307]], Cf: [[251, 251.079588]],
  Es: [[252, 252.082980]], Fm: [[257, 257.095106]], Md: [[258, 258.098431]], No: [[259, 259.101030]],
  Lr: [[266, 266.119830]], Rf: [[267, 267.121790]], Db: [[268, 268.125670]], Sg: [[269, 269.128630]],
  Bh: [[270, 270.133360]], Hs: [[269, 269.133750]], Mt: [[278, 278.156310]], Ds: [[281, 281.162060]],
  Rg: [[282, 282.169120]], Cn: [[285, 285.177120]], Nh: [[286, 286.182210]], Fl: [[289, 289.190420]],
  Mc: [[290, 290.196790]], Lv: [[293, 293.204490]], Ts: [[294, 294.210460]], Og: [[294, 294.213920]]
};

// Nguồn dữ liệu: NIST Atomic Weights and Isotopic Compositions — All isotopes.
// Các đồng vị không có isotopic composition trong bảng NIST được hiển thị "—".
// Nếu trình duyệt chặn truy cập chéo nguồn (CORS) hoặc đang ngoại tuyến, dữ liệu dự phòng tích hợp sẵn vẫn được dùng.
var NIST_ISOTOPE_URL = "https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl?ascii=ascii&isotype=all";
var NIST_DA_TAI = false;
var NIST_DANG_TAI = null;

function taiDongViTuNIST() {
  if (NIST_DA_TAI || typeof fetch !== "function") return Promise.resolve(false);
  if (NIST_DANG_TAI) return NIST_DANG_TAI;   // chỉ tải 1 lần, dù mở nhiều popup liên tiếp
  NIST_DANG_TAI = fetch(NIST_ISOTOPE_URL)
    .then(function (response) {
      if (!response.ok) throw new Error("NIST HTTP " + response.status);
      return response.text();
    })
    .then(function (text) {
      var result = {};
      var currentSymbol = "";
      text.split(/\r?\n/).forEach(function (line) {
        var clean = line.replace(/\s+/g, " ").trim();
        if (!clean || /^_{3,}/.test(clean) || /Relative Atomic Mass|Atomic Weights|Isotope/.test(clean)) return;
        var first = clean.match(/^(\d{1,3})\s+([A-Z][a-z]?)\s+(\d{1,3})\s+([0-9]+(?:\.[0-9]+)?(?:\([0-9#]+\))?)(.*)$/);
        var cont = clean.match(/^(?:[DT]\s+)?(\d{1,3})\s+([0-9]+(?:\.[0-9]+)?(?:\([0-9#]+\))?)(.*)$/);
        var massNumber, massText, rest;
        if (first) {
          currentSymbol = first[2];
          massNumber = Number(first[3]);
          massText = first[4];
          rest = first[5] || "";
        } else if (cont && currentSymbol) {
          massNumber = Number(cont[1]);
          massText = cont[2];
          rest = cont[3] || "";
        } else return;
        var mass = Number(massText.replace(/\([^)]*\)/g, ""));
        if (!Number.isFinite(mass) || !massNumber || !currentSymbol) return;
        // Chống dữ liệu lệch dòng: khối lượng nguyên tử phải xấp xỉ số khối
        if (Math.abs(mass - massNumber) > 3) return;
        // Trong bảng "all isotopes" của NIST, ô tỉ lệ tự nhiên để trống = không có tỉ lệ tự nhiên.
        // Chỉ lấy các đồng vị đó rồi gộp với dữ liệu phóng xạ dự phòng.
        var abundance = rest.match(/^\s+(0?\.\d+(?:\([0-9#]+\))?|1(?:\([0-9#]+\))?)(?:\s|$)/);
        if (!abundance) {
          if (!result[currentSymbol]) result[currentSymbol] = [];
          if (!result[currentSymbol].some(function (x) { return x[0] === massNumber; })) {
            result[currentSymbol].push([massNumber, mass]);
          }
        }
      });
      var count = Object.keys(result).reduce(function (n, k) { return n + result[k].length; }, 0);
      if (count < 100) throw new Error("NIST data parse incomplete");
      Object.keys(result).forEach(function (symbol) {
        var merged = (DONG_VI_PHONG_XA[symbol] || []).slice();
        result[symbol].forEach(function (iso) {
          if (!merged.some(function (x) { return Number(x[0]) === Number(iso[0]); })) merged.push(iso);
        });
        merged.sort(function (a, b) { return a[0] - b[0]; });
        DONG_VI_PHONG_XA[symbol] = merged;
      });
      NIST_DA_TAI = true;
      return true;
    })
    .catch(function (error) {
      console.warn("Không tải được dữ liệu đồng vị NIST; dùng dữ liệu dự phòng.", error);
      return false;
    });
  return NIST_DANG_TAI;
}

function veBieuDoDongVi(kyHieu, khoiLuong) {
  var panel = document.getElementById("nist-isotope-source");
  if (!panel) return;
  var data = DU_LIEU_DONG_VI_TU_NHIEN[kyHieu] || [];
  var radioactive = DONG_VI_PHONG_XA[kyHieu] || [];
  var chart = panel.querySelector(".isotope-chart");
  var note = panel.querySelector(".isotope-note");
  var table = panel.querySelector(".isotope-table");
  if (!chart || !note || !table) return;

  if (!data.length && !radioactive.length) {
    chart.innerHTML = "";
    table.innerHTML = "";
    note.textContent = "Chưa có dữ liệu đồng vị tích hợp cho nguyên tố này. Có thể tra cứu tại nguồn NIST bên dưới.";
    return;
  }

  // Chỉ đồng vị có tỉ lệ tự nhiên hợp lệ mới được vẽ trên biểu đồ.
  var naturalData = data.filter(function (d) {
    return d[2] !== null && d[2] !== undefined && d[2] !== "" && Number.isFinite(Number(d[2]));
  });
  if (!naturalData.length) {
    chart.innerHTML = "";
  } else {
    var W = 520, H = 250, L = 44, R = 16, T = 24, B = 42;
    var maxMass = Math.max.apply(null, naturalData.map(function (d) { return d[0]; }));
    var minMass = Math.min.apply(null, naturalData.map(function (d) { return d[0]; }));
    var maxPct = Math.max.apply(null, naturalData.map(function (d) { return Number(d[2]); }));
    var maxY = maxPct <= 1 ? 1 : (maxPct <= 10 ? 10 : Math.ceil(maxPct / 10) * 10);
    var y = function (v) { return H - B - v / maxY * (H - T - B); };
    var x = function (mass) {
      if (maxMass === minMass) return (L + W - R) / 2;
      return L + 18 + (mass - minMass) / (maxMass - minMass) * (W - L - R - 36);
    };
    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Biểu đồ tỉ lệ đồng vị tự nhiên của ' + kyHieu + '">';
    for (var tick = 0; tick <= 4; tick++) {
      var value = maxY * tick / 4;
      var yy = y(value);
      svg += '<line x1="' + L + '" y1="' + yy + '" x2="' + (W - R) + '" y2="' + yy + '" stroke="currentColor" stroke-opacity=".18"/>';
      svg += '<text x="' + (L - 8) + '" y="' + (yy + 4) + '" text-anchor="end" fill="currentColor" opacity=".8" font-size="11">' + value.toFixed(value % 1 ? 1 : 0) + '%</text>';
    }
    naturalData.forEach(function (d) {
      var xx = x(d[0]), yy = y(Number(d[2]));
      svg += '<line x1="' + xx + '" y1="' + y(0) + '" x2="' + xx + '" y2="' + yy + '" stroke="#8ee66b" stroke-width="2.4"/>';
      svg += '<circle cx="' + xx + '" cy="' + yy + '" r="3.5" fill="#c9ffad"/>';
      svg += '<text x="' + xx + '" y="' + Math.max(13, yy - 8) + '" text-anchor="middle" fill="currentColor" font-size="11">' + d[2] + '%</text>';
      svg += '<text x="' + xx + '" y="' + (H - B + 18) + '" text-anchor="middle" fill="currentColor" font-size="11">' + d[0] + '</text>';
    });
    svg += '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + y(0) + '" stroke="currentColor" stroke-opacity=".7"/>';
    svg += '<line x1="' + L + '" y1="' + y(0) + '" x2="' + (W - R) + '" y2="' + y(0) + '" stroke="currentColor" stroke-opacity=".7"/>';
    svg += '<text x="' + ((L + W - R) / 2) + '" y="' + (H - 5) + '" text-anchor="middle" fill="currentColor" font-size="11">Số khối đồng vị</text></svg>';
    chart.innerHTML = svg;
  }

  var rows = '<div class="isotope-row isotope-head"><span>Đồng vị</span><span>Khối lượng (u)</span><span>Tỉ lệ tự nhiên</span></div>';
  rows += data.map(function (d) {
    return '<div class="isotope-row"><span>' + kyHieu + '-' + d[0] + '</span><span>' + d[1] + '</span><span>' + d[2] + '%</span></div>';
  }).join('');
  radioactive.forEach(function (d) {
    // Không thêm trùng nếu đồng vị đã có trong dữ liệu nền.
    if (data.some(function (natural) { return Number(natural[0]) === Number(d[0]); })) return;
    rows += '<div class="isotope-row"><span>' + kyHieu + '-' + d[0] +
      ' <span class="radioactive-icon" title="Vì là nguyên tố phóng xạ nên không thể xác định chính xác đồng vị" aria-label="Vì là nguyên tố phóng xạ nên không thể xác định chính xác đồng vị">☢</span></span>' +
      '<span>' + d[1] + '</span><span>—</span></div>';
  });
  table.innerHTML = rows;
  note.textContent = "";
  note.style.display = "none";
}

// ===== NGƯỜI TÌM RA NGUYÊN TỐ =====
// Mỗi mục theo thứ tự số hiệu nguyên tử: "Người / nhóm phát hiện|Năm".
// Năm "Cổ đại" nghĩa là đã được con người biết đến từ thời tiền sử / cổ đại.
// Một số nguyên tố có nhiều người cùng được ghi nhận; ở đây ghi người/nhóm thường được nhắc đến nhất.
var DU_LIEU_NGUOI_PHAT_HIEN = [
  "Henry Cavendish|1766", "Pierre Janssen & Norman Lockyer (quang phổ Mặt Trời); William Ramsay (phân lập trên Trái Đất)|1868",
  "Johan August Arfwedson|1817", "Louis-Nicolas Vauquelin|1798",
  "Joseph Louis Gay-Lussac & Louis Jacques Thénard; Humphry Davy|1808", "Đã được biết đến từ thời cổ đại|Cổ đại",
  "Daniel Rutherford|1772", "Joseph Priestley & Carl Wilhelm Scheele|1774",
  "Henri Moissan (phân lập)|1886", "William Ramsay & Morris Travers|1898",
  "Humphry Davy|1807", "Humphry Davy|1808",
  "Hans Christian Ørsted|1825", "Jöns Jacob Berzelius|1823",
  "Hennig Brand|1669", "Đã được biết đến từ thời cổ đại|Cổ đại",
  "Carl Wilhelm Scheele|1774", "Lord Rayleigh & William Ramsay|1894",
  "Humphry Davy|1807", "Humphry Davy|1808",
  "Lars Fredrik Nilson|1879", "William Gregor|1791",
  "Andrés Manuel del Río; Nils Gabriel Sefström (tái phát hiện)|1801", "Louis-Nicolas Vauquelin|1797",
  "Johan Gottlieb Gahn|1774", "Đã được biết đến từ thời cổ đại|Cổ đại",
  "Georg Brandt|1735", "Axel Fredrik Cronstedt|1751",
  "Đã được biết đến từ thời cổ đại|Cổ đại", "Andreas Sigismund Marggraf|1746",
  "Paul-Émile Lecoq de Boisbaudran|1875", "Clemens Winkler|1886",
  "Albertus Magnus (thường được ghi nhận)|~1250", "Jöns Jacob Berzelius & Johan Gottlieb Gahn|1817",
  "Antoine Jérôme Balard & Carl Jacob Löwig|1826", "William Ramsay & Morris Travers|1898",
  "Robert Bunsen & Gustav Kirchhoff|1861", "Adair Crawford|1790",
  "Johan Gadolin|1794", "Martin Heinrich Klaproth|1789",
  "Charles Hatchett|1801", "Carl Wilhelm Scheele|1778",
  "Carlo Perrier & Emilio Segrè|1937", "Karl Ernst Claus|1844",
  "William Hyde Wollaston|1803", "William Hyde Wollaston|1803",
  "Đã được biết đến từ thời cổ đại|Cổ đại", "Friedrich Stromeyer|1817",
  "Ferdinand Reich & Hieronymus Theodor Richter|1863", "Đã được biết đến từ thời cổ đại|Cổ đại",
  "Đã được biết đến từ thời cổ đại|Cổ đại", "Franz-Joseph Müller von Reichenstein|1782",
  "Bernard Courtois|1811", "William Ramsay & Morris Travers|1898",
  "Robert Bunsen & Gustav Kirchhoff|1860", "Humphry Davy|1808",
  "Carl Gustaf Mosander|1839", "Jöns Jacob Berzelius & Wilhelm Hisinger; Martin Klaproth (độc lập)|1803",
  "Carl Auer von Welsbach|1885", "Carl Auer von Welsbach|1885",
  "Jacob Marinsky, Lawrence Glendenin & Charles Coryell|1945", "Paul-Émile Lecoq de Boisbaudran|1879",
  "Eugène-Anatole Demarçay|1901", "Jean Charles Galissard de Marignac|1880",
  "Carl Gustaf Mosander|1843", "Paul-Émile Lecoq de Boisbaudran|1886",
  "Per Teodor Cleve|1879", "Carl Gustaf Mosander|1843",
  "Per Teodor Cleve|1879", "Jean Charles Galissard de Marignac|1878",
  "Georges Urbain|1907", "Dirk Coster & George de Hevesy|1923",
  "Anders Gustaf Ekeberg|1802", "Fausto & Juan José Elhuyar|1783",
  "Walter Noddack, Ida Tacke & Otto Berg|1925", "Smithson Tennant|1803",
  "Smithson Tennant|1803", "Antonio de Ulloa (ghi nhận ở châu Âu)|1735",
  "Đã được biết đến từ thời cổ đại|Cổ đại", "Đã được biết đến từ thời cổ đại|Cổ đại",
  "William Crookes|1861", "Đã được biết đến từ thời cổ đại|Cổ đại",
  "Đã được biết đến từ thời cổ đại|Cổ đại", "Marie & Pierre Curie|1898",
  "Dale Corson, Kenneth MacKenzie & Emilio Segrè|1940", "Friedrich Ernst Dorn|1900",
  "Marguerite Perey|1939", "Marie & Pierre Curie|1898",
  "André-Louis Debierne|1899", "Jöns Jacob Berzelius|1829",
  "Otto Hahn & Lise Meitner|1917", "Martin Heinrich Klaproth|1789",
  "Edwin McMillan & Philip Abelson|1940", "Glenn Seaborg, Edwin McMillan, Joseph Kennedy & Arthur Wahl|1940",
  "Glenn Seaborg, Ralph James, Leon Morgan & Albert Ghiorso|1944", "Glenn Seaborg, Ralph James & Albert Ghiorso|1944",
  "Stanley Thompson, Albert Ghiorso, Glenn Seaborg & Kenneth Street|1949", "Stanley Thompson, Kenneth Street, Albert Ghiorso & Glenn Seaborg|1950",
  "Albert Ghiorso và cộng sự (Berkeley)|1952", "Albert Ghiorso và cộng sự (Berkeley)|1952",
  "Albert Ghiorso, Glenn Seaborg và cộng sự|1955", "Nhóm Georgy Flerov (JINR, Dubna)|1966",
  "Albert Ghiorso và cộng sự (Berkeley)|1961", "Nhóm Georgy Flerov (Dubna) & Albert Ghiorso (Berkeley)|1964",
  "Nhóm Dubna (Nga) & Berkeley (Mỹ)|1968", "Albert Ghiorso và cộng sự (Berkeley)|1974",
  "Peter Armbruster & Gottfried Münzenberg (GSI)|1981", "Peter Armbruster & Gottfried Münzenberg (GSI)|1984",
  "Peter Armbruster & Gottfried Münzenberg (GSI)|1982", "Sigurd Hofmann và cộng sự (GSI)|1994",
  "Sigurd Hofmann và cộng sự (GSI)|1994", "Sigurd Hofmann và cộng sự (GSI)|1996",
  "Nhóm Kosuke Morita (RIKEN, Nhật Bản)|2004", "Nhóm Dubna (Nga) & Livermore (Mỹ)|1998",
  "Nhóm Dubna (Nga) & Livermore (Mỹ)|2003", "Nhóm Dubna (Nga) & Livermore (Mỹ)|2000",
  "Nhóm Dubna, Oak Ridge & Livermore (Nga – Mỹ)|2010", "Yuri Oganessian và cộng sự (Dubna – Livermore)|2002"
];

function escHTML(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}

// Thẻ "Người tìm ra" hiển thị ở cuối phần thông tin chính của popup
function taoTheNguoiPhatHien(so) {
  var muc = DU_LIEU_NGUOI_PHAT_HIEN[so - 1];
  if (!muc) return "";
  var phan = muc.split("|");
  var coDai = phan[1] === "Cổ đại";
  var nhan = coDai ? "Nguồn gốc" : "Năm phát hiện";
  var nguoi = coDai
    ? "Không rõ người đầu tiên — con người đã biết và sử dụng từ thời cổ đại"
    : phan[0];

  return '<div class="nguoi-phat-hien">' +
    '<div class="npd-icon" aria-hidden="true">🔭</div>' +
    '<div class="npd-noidung">' +
      '<div class="npd-nhan">NGƯỜI TÌM RA</div>' +
      '<div class="npd-ten">' + escHTML(nguoi) + '</div>' +
    '</div>' +
    '<div class="npd-nam"><small>' + nhan + '</small><strong>' +
      (coDai ? "Cổ đại" : escHTML(phan[1])) + '</strong></div>' +
  '</div>';
}

// ===== NHỮNG ĐIỀU ÍT AI BIẾT =====
// Khóa là số hiệu nguyên tử. Nguyên tố chưa có dữ liệu sẽ hiện dòng "Chưa có thông tin".
var DU_LIEU_FUN_FACT = {
  1: "Là nguyên tố nhẹ nhất và phổ biến nhất trong vũ trụ.",
  2: "Được phát hiện trên Mặt Trời trước khi người ta tìm thấy nó trên Trái Đất.",
  3: "Là kim loại nhẹ nhất, được dùng làm pin lithium-ion trong điện thoại và xe điện.",
  4: "Rất độc: hít phải bụi beri có thể gây bệnh phổi mạn tính.",
  5: "Hợp chất của bo tạo ngọn lửa màu xanh lá trong pháo hoa.",
  6: "Là nền tảng của sự sống, tạo nên cả than chì mềm lẫn kim cương cứng.",
  7: "Chiếm khoảng 78% khí quyển Trái Đất; nitơ lỏng lạnh đến mức làm đông cứng nhiều vật tức thì.",
  8: "Cần cho hô hấp; oxi lỏng và oxi rắn có màu xanh nhạt.",
  9: "Là nguyên tố phản ứng mạnh nhất trong bảng tuần hoàn và rất độc.",
  10: "Phát sáng màu đỏ cam khi có dòng điện chạy qua, thường dùng làm biển hiệu.",
  11: "Phản ứng dữ dội với nước nên phải bảo quản ngâm trong dầu.",
  12: "Cháy với ánh sáng trắng chói, từng được dùng làm đèn flash trong nhiếp ảnh.",
  13: "Là kim loại phổ biến nhất trong vỏ Trái Đất, nhưng từng đắt hơn vàng vì rất khó tách.",
  14: "Là chất bán dẫn nền tảng của vi mạch; Thung lũng Silicon được đặt tên theo nguyên tố này.",
  15: "Được phát hiện khi Hennig Brand chưng cất nước tiểu để tìm cách tạo ra vàng.",
  16: "Được biết từ thời cổ đại; một số hợp chất như H₂S có mùi rất khó chịu.",
  17: "Là khí màu vàng lục, nặng hơn không khí và từng bị dùng làm vũ khí hóa học.",
  18: "Là khí hiếm phổ biến thứ ba trong khí quyển, thường dùng trong bóng đèn.",
  19: "Nhẹ và mềm; khi thả vào nước, kali cháy với ngọn lửa màu tím.",
  20: "Là thành phần chính của xương và răng, và là kim loại phổ biến thứ năm trong vỏ Trái Đất.",
  21: "Hợp kim nhôm–scandi vừa nhẹ vừa bền, được dùng trong ngành hàng không.",
  22: "Bền gần như thép nhưng nhẹ hơn nhiều, nên rất được ưa chuộng trong kỹ thuật.",
  23: "Tên lấy theo nữ thần Vanadis của Bắc Âu vì các hợp chất của nó có màu sắc rực rỡ.",
  24: "Tạo màu đỏ cho ruby và màu xanh cho ngọc lục bảo, đồng thời giúp thép không gỉ chống ăn mòn.",
  25: "Cần thiết cho quá trình trao đổi chất của cơ thể và được dùng nhiều trong sản xuất thép.",
  26: "Là thành phần chính của lõi Trái Đất và có trong hemoglobin giúp máu vận chuyển oxi.",
  27: "Hợp chất của coban tạo ra màu xanh lam bền đẹp cho gốm sứ và thủy tinh.",
  28: "Là một trong số ít kim loại có từ tính tự nhiên ở nhiệt độ phòng.",
  29: "Có màu đặc trưng khác hẳn xám hay bạc và có khả năng kháng khuẩn tự nhiên.",
  30: "Thường được dùng để mạ lên sắt thép nhằm chống gỉ.",
  31: "Nóng chảy ở nhiệt độ rất thấp, có thể tan ngay trong lòng bàn tay.",
  32: "Là chất bán dẫn quan trọng, từng được dùng trong những chiếc transistor đầu tiên.",
  33: "Nổi tiếng là chất độc, nhưng một lượng rất nhỏ từng được dùng làm thuốc.",
  34: "Có tính quang dẫn nên từng được dùng trong những máy photocopy đời đầu.",
  35: "Là một trong hai đơn chất ở thể lỏng ở nhiệt độ phòng, có màu nâu đỏ.",
  36: "Tên có gốc Hy Lạp nghĩa là \"kẻ ẩn náu\", vì nó rất khó bị phát hiện.",
  37: "Cháy với ngọn lửa đỏ sẫm và phản ứng mạnh với nước.",
  38: "Tạo ánh sáng đỏ khi cháy nên được dùng trong pháo hoa và pháo sáng.",
  39: "Tên lấy từ làng Ytterby ở Thụy Điển; từng dùng để tạo màu đỏ trong tivi màu đời cũ.",
  40: "Dạng zirconia được dùng làm đá quý nhân tạo giá rẻ.",
  41: "Từng có tên là \"columbium\" trước khi được đổi tên theo thần thoại Hy Lạp.",
  42: "Chịu nhiệt rất tốt, thường được thêm vào thép để tạo hợp kim siêu bền.",
  43: "Hoàn toàn phóng xạ; tên của nó có nghĩa là \"nhân tạo\".",
  44: "Thuộc nhóm kim loại bạch kim, được dùng làm chất xúc tác trong công nghệ năng lượng.",
  45: "Là một trong những kim loại quý hiếm và đắt nhất thế giới; thường được mạ lên trang sức bạch kim và vàng trắng để tăng độ sáng bóng.",
  46: "Tên lấy theo tiểu hành tinh Pallas, được phát hiện chỉ vài năm trước đó; paladi còn hấp thụ lượng khí hiđro gấp hàng trăm lần thể tích của nó.",
  47: "Dẫn điện và dẫn nhiệt tốt nhất trong tất cả các kim loại, tốt hơn cả đồng.",
  48: "Rất độc nên bị hạn chế sử dụng, nhưng từng là thành phần quan trọng trong pin sạc niken–cadimi.",
  49: "Khi uốn cong một thanh indi nguyên chất, bạn có thể nghe thấy tiếng kêu rắc rắc đặc trưng do các tinh thể bên trong biến dạng.",
  50: "Ở nhiệt độ rất thấp, thiếc kim loại có thể chuyển sang dạng xám giòn rồi vỡ vụn, hiện tượng được gọi là 'bệnh dịch thiếc'.",
  51: "Người Ai Cập cổ đại đã dùng hợp chất của antimon làm chất kẻ mắt đen (kohl).",
  52: "Tiếp xúc với telu có thể khiến hơi thở có mùi tỏi kéo dài nhiều tuần; nó thường đi cùng vàng trong quặng.",
  53: "Thăng hoa từ thể rắn màu tím sang hơi màu tím và rất cần cho tuyến giáp.",
  54: "Năm 1962, xenon trở thành khí hiếm đầu tiên được tạo thành hợp chất; nó còn dùng trong đèn pha và động cơ ion.",
  55: "Phản ứng nổ với nước; đồng vị Cs-133 được dùng để định nghĩa \"1 giây\".",
  56: "BaSO₄ không tan trong nước nên được dùng làm chất cản quang khi chụp X-quang dạ dày.",
  57: "Tên có nghĩa là \"ẩn nấp\" và là nguyên tố mở đầu cho họ lantan.",
  58: "Là nguyên tố đất hiếm phổ biến nhất, dùng làm đá lửa trong bật lửa.",
  59: "Dùng trong kính didymium để lọc ánh sáng vàng cho thợ thổi thủy tinh.",
  60: "Tạo ra nam châm Nd₂Fe₁₄B, loại nam châm vĩnh cửu mạnh nhất hiện nay.",
  61: "Hoàn toàn phóng xạ; vỏ Trái Đất chứa rất ít promethi.",
  62: "Nam châm samari–coban vẫn hoạt động ở nhiệt độ trên 700°C.",
  63: "Phát huỳnh quang đỏ dưới tia cực tím nên được dùng để chống làm giả tiền.",
  64: "Được dùng làm chất tương phản khi chụp cộng hưởng từ (MRI).",
  65: "Phát ánh sáng xanh lục nên được dùng trong điểm ảnh của màn hình.",
  66: "Hấp thụ neutron tốt nên được dùng làm thanh điều khiển trong lò phản ứng hạt nhân.",
  67: "Có từ tính rất cao; laser holmi được dùng để tán sỏi thận.",
  68: "Được dùng để khuếch đại tín hiệu trong cáp quang.",
  69: "Tên bắt nguồn từ Thule, tên cổ của vùng Scandinavia; một đồng vị phóng xạ của nó có thể làm nguồn tia X trong thiết bị chuyên dụng.",
  70: "Được dùng trong đồng hồ nguyên tử cực kỳ chính xác; hai chiếc đặt ở độ cao khác nhau sẽ chạy lệch nhau chút ít do trọng trường khác nhau.",
  71: "Đồng vị Lu-177 được dùng trong một số liệu pháp điều trị ung thư nhắm đích.",
  72: "Luôn đi kèm zirconi trong khoáng vật và có tính chất hóa học rất giống nhau, nên việc tách hai nguyên tố này từng rất khó.",
  73: "Chống ăn mòn tốt và tương thích với cơ thể nên được dùng trong một số thiết bị cấy ghép y tế.",
  74: "Có nhiệt độ nóng chảy rất cao nên từng được dùng làm dây tóc bóng đèn.",
  75: "Được thêm vào siêu hợp kim của tua-bin động cơ phản lực để giữ độ bền ở nhiệt độ cực cao.",
  76: "Thuộc nhóm nguyên tố tự nhiên có khối lượng riêng lớn nhất; hợp chất osmi tetroxit rất độc.",
  77: "Lớp đất đá giàu iridi khoảng 66 triệu năm tuổi là bằng chứng ủng hộ giả thuyết tiểu hành tinh va vào Trái Đất làm khủng long tuyệt chủng.",
  78: "Được dùng làm chất xúc tác trong bộ chuyển đổi khí thải của ô tô.",
  79: "Hiệu ứng tương đối tính làm thay đổi năng lượng electron của vàng, góp phần tạo nên màu vàng đặc trưng.",
  80: "Là kim loại ở thể lỏng ở nhiệt độ phòng, nhưng hơi thủy ngân rất độc với hệ thần kinh.",
  81: "Được William Crookes phát hiện nhờ quang phổ; tên gọi liên quan đến vạch màu xanh lục của nó.",
  82: "Hấp thụ bức xạ tốt nên dùng làm vật liệu che chắn, nhưng rất độc, đặc biệt với hệ thần kinh đang phát triển.",
  83: "Màu sắc nhiều lớp trên tinh thể bismut chủ yếu do lớp oxit mỏng làm giao thoa ánh sáng, chứ không phải do kim loại có nhiều màu.",
  84: "Được Marie và Pierre Curie phát hiện năm 1898 khi nghiên cứu quặng urani; phóng xạ rất mạnh và rất độc.",
  85: "Phóng xạ, phân rã nhanh và có lượng tồn tại tự nhiên cực nhỏ nên rất khó nghiên cứu trực tiếp.",
  86: "Là khí phóng xạ tự nhiên, nặng nhất trong các khí; có thể tích tụ trong tầng hầm và là một trong những nguyên nhân gây ung thư phổi hàng đầu, chỉ sau hút thuốc lá.",
  87: "Cực kỳ hiếm: trong vỏ Trái Đất, tại cùng một thời điểm chỉ có khoảng vài chục gam franxi, vì đồng vị bền nhất của nó phân rã chỉ sau chừng 22 phút.",
  88: "Từng được pha vào sơn dạ quang cho mặt đồng hồ; các nữ công nhân sơn đồng hồ ('Radium Girls') bị nhiễm độc phóng xạ, thúc đẩy việc cải thiện quy định an toàn lao động.",
  89: "Phát ra ánh sáng xanh nhạt trong bóng tối vì phóng xạ của nó làm ion hóa không khí xung quanh.",
  90: "Tên lấy theo thần sấm Thor của Bắc Âu; từng được dùng trong lưới đèn măng-sông vì phát sáng rực rỡ khi bị nung nóng.",
  91: "Tên có nghĩa là 'đứng trước actini', vì nó phân rã tạo thành actini.",
  92: "Tên lấy theo hành tinh Uranus, được phát hiện chỉ vài năm trước khi urani được tìm ra.",
  93: "Là nguyên tố siêu urani đầu tiên được tổng hợp (năm 1940); tên lấy theo hành tinh Neptune, nằm sau Uranus.",
  94: "Tên lấy theo Pluto; đồng vị Pu-238 từng được dùng làm nguồn điện cho nhiều tàu thăm dò vũ trụ, trong đó có Voyager.",
  95: "Đồng vị Am-241 có mặt với lượng cực nhỏ trong nhiều đầu báo khói ion hóa trong gia đình.",
  96: "Được đặt tên để vinh danh Marie và Pierre Curie; đồng vị Cm-244 từng được dùng làm nguồn hạt alpha cho thiết bị phân tích đất đá trên xe tự hành thám hiểm Sao Hỏa.",
  97: "Tên lấy theo thành phố Berkeley (California, Mỹ), nơi nguyên tố này được tổng hợp lần đầu; bia berkeli-249 từng được dùng để tạo ra tennessin.",
  98: "Đồng vị Cf-252 là nguồn neutron rất mạnh, được dùng để khởi động lò phản ứng hạt nhân và dò tìm khoáng sản, dầu mỏ.",
  99: "Được phát hiện trong bụi phóng xạ sau vụ thử bom khinh khí đầu tiên của Mỹ năm 1952; tên đặt theo Albert Einstein.",
  100: "Cũng được tìm thấy trong bụi phóng xạ của vụ thử bom khinh khí năm 1952; tên đặt theo nhà vật lý Enrico Fermi.",
  101: "Đặt tên theo Dmitri Mendeleev, người sáng tạo ra bảng tuần hoàn; lần đầu tổng hợp chỉ thu được khoảng 17 nguyên tử.",
  102: "Tên lấy theo Alfred Nobel, người sáng lập giải Nobel; từng có tranh cãi về việc ai phát hiện đầu tiên, nhưng tên gọi này vẫn được giữ lại.",
  103: "Lawrenxi là nguyên tố cuối cùng của họ actini (nhóm nguyên tố phóng xạ siêu nặng nằm dưới đáy bảng tuần hoàn). Theo quy luật thông thường, cấu hình electron của nó phải kết thúc ở phân lớp f, nhưng electron lớp ngoài cùng của nguyên tố này lại thuộc phân lớp 7p.",
  104: "Trong nhiều năm, Mỹ và Liên Xô tranh cãi xem nước nào phát hiện ra nguyên tố này đầu tiên và có quyền đặt tên. Mỹ là bên thắng và đặt tên là Rutherfordi.",
  105: "Dubni được đặt tên theo thành phố Dubna của Nga để vinh danh những đóng góp của các nhà khoa học Nga trong việc tìm ra các nguyên tố hóa học.",
  106: "Seaborgi là nguyên tố đầu tiên trong lịch sử được đặt tên theo một nhà khoa học còn sống (ông Glenn T. Seaborg).",
  107: "Vì tồn tại quá ngắn và chỉ tạo ra được vài nguyên tử một lúc, Bohri hiện không có ứng dụng nào trong đời sống hay thương mại. Nó chỉ phục vụ nghiên cứu khoa học.",
  108: "Nếu gom đủ lượng Hassi để đúc thành một khối kim loại ở điều kiện thường, Hassi có thể cứng ngang kim cương.",
  109: "Nguyên tố này cực hiếm: chưa ai trên Trái Đất từng nhìn thấy hay cầm một cục kim loại Meitneri bằng mắt thường.",
  110: "Nguyên tố này từng được đề xuất tên là Policium, theo số điện thoại khẩn cấp của cảnh sát Đức (110 trùng đúng với số hiệu nguyên tố).",
  111: "Tên tạm thời do IUPAC quy định cho nguyên tố này là Unununium (viết tắt Uuu), nghe giống tiếng quạ kêu.",
  112: "Là kim loại nhưng có tính chất giống khí hiếm và có thể tồn tại ở thể khí.",
  113: "Là nguyên tố đầu tiên do các nhà khoa học châu Á (Nhật Bản) phát hiện. \"Nihon\" trong Nihoni có nghĩa là Nhật Bản.",
  114: "Là kim loại nhưng có tính chất của khí hiếm; tổng số nguyên tử Flerovi con người tổng hợp được trên toàn thế giới chỉ dừng lại ở vài chục nguyên tử.",
  115: "Bob Lazar, một người Mỹ từng tuyên bố đã làm việc tại Khu vực 51 và nghiên cứu đĩa bay (UFO) của người ngoài hành tinh, khẳng định đĩa bay vận hành nhờ một đồng vị bền của Moscovi.",
  116: "Năm 1999, một nhóm nhà khoa học Mỹ tuyên bố phát hiện ra Livermori nhưng bị phát hiện đã làm giả báo cáo. Đến năm 2000, nguyên tố này mới thật sự được phát hiện.",
  117: "Trên bảng tuần hoàn, Tennessin được xếp ở nhóm 17 (nhóm halogen), nhưng không hành xử như một halogen phi kim mà mang đặc tính của một kim loại siêu nặng.",
  118: "Oganesson được đặt theo tên nhà vật lý hạt nhân người Nga gốc Armenia Yuri Oganessian. Tính đến nay, ông vẫn còn sống và đã 93 tuổi."
};

var DU_LIEU_FUN_FACT_2 = {
  1: "Mỗi giây, Mặt Trời biến đổi khoảng 600 triệu tấn hiđro thành heli để tạo ra ánh sáng và nhiệt.",
  2: "Là nguyên tố duy nhất không đông đặc ở áp suất thường, dù được làm lạnh đến gần độ không tuyệt đối; heli lỏng còn có thể 'bò' lên thành cốc nhờ tính siêu chảy.",
  3: "Muối liti được dùng làm thuốc ổn định tâm trạng trong điều trị rối loạn lưỡng cực.",
  4: "Ngọc lục bảo và ngọc aquamarine đều là khoáng vật chứa beri; gương của kính viễn vọng James Webb làm từ beri phủ vàng.",
  5: "Thủy tinh borosilicat chứa bo giãn nở rất ít khi nóng lên nên chịu được thay đổi nhiệt độ đột ngột, thường dùng làm dụng cụ thí nghiệm và đồ nấu nướng.",
  6: "Đồng vị cacbon-14 phóng xạ được dùng để xác định tuổi của hóa thạch và di vật hữu cơ đến khoảng 50.000 năm.",
  7: "Cây họ đậu sống cộng sinh với vi khuẩn ở rễ có khả năng 'cố định' nitơ từ không khí thành chất dinh dưỡng cho đất.",
  8: "Là nguyên tố chiếm nhiều khối lượng nhất trong vỏ Trái Đất (khoảng 46%), chủ yếu nằm trong các khoáng vật silicat.",
  9: "Tên bắt nguồn từ tiếng Latin 'fluere' (chảy), vì khoáng vật florit từng được dùng làm chất trợ chảy khi luyện kim.",
  10: "Được tìm thấy năm 1898 khi chưng cất không khí hóa lỏng; tên của nó có nghĩa là 'mới'.",
  11: "Natri là thành phần của muối ăn, và ngọn lửa màu vàng cam của đèn đường natri chính là màu đặc trưng của nguyên tố này.",
  12: "Là nguyên tử trung tâm trong phân tử diệp lục, chất giúp cây xanh thực hiện quang hợp.",
  13: "Nhôm có thể tái chế gần như vô hạn, và tái chế chỉ tốn khoảng 5% năng lượng so với sản xuất nhôm mới từ quặng.",
  14: "Là nguyên tố phổ biến thứ hai trong vỏ Trái Đất, sau oxi; cát và thạch anh chủ yếu là silic đioxit.",
  15: "Tên có nghĩa là 'mang ánh sáng'; photpho trắng phát sáng mờ trong bóng tối khi bị oxi hóa chậm.",
  16: "Lưu huỳnh cháy với ngọn lửa xanh lam; ở miệng núi lửa Kawah Ijen (Indonesia), khí lưu huỳnh bốc cháy tạo nên những dòng 'lửa xanh' ban đêm.",
  17: "Trong dạ dày của bạn có axit clohiđric (HCl) giúp tiêu hóa thức ăn.",
  18: "Tên có nghĩa là 'lười biếng' trong tiếng Hy Lạp, vì argon gần như không tham gia phản ứng hóa học.",
  19: "Cơ thể người chứa một lượng nhỏ đồng vị K-40 phóng xạ rất yếu, nên chuối và nhiều thực phẩm giàu kali phát ra bức xạ cực nhỏ, vô hại.",
  20: "Vỏ trứng, san hô và đá vôi đều chủ yếu là canxi cacbonat.",
  21: "Tồn tại của scandi đã được Mendeleev dự đoán trước (ông gọi là 'eka-bo'), và khi tìm ra, tính chất của nó khớp với dự đoán.",
  22: "Tên lấy theo các Titan, những vị thần khổng lồ trong thần thoại Hy Lạp.",
  23: "Henry Ford từng dùng thép vanadi cho khung xe Model T vì nhẹ mà rất bền.",
  24: "Tên bắt nguồn từ 'chroma' (màu sắc), vì các hợp chất của crom có nhiều màu rực rỡ.",
  25: "Mangan đioxit là thành phần trong pin kiềm và pin kẽm–cacbon thông dụng.",
  26: "Cột sắt ở Delhi (Ấn Độ) cao hơn 7 mét, đã hơn 1.600 năm tuổi mà hầu như không bị gỉ.",
  27: "Vitamin B12 là một hợp chất chứa coban, cần thiết cho cơ thể.",
  28: "Tên bắt nguồn từ 'Kupfernickel' (đồng của quỷ), vì thợ mỏ xưa tưởng quặng này chứa đồng nhưng không thể luyện ra đồng.",
  29: "Tượng Nữ thần Tự do làm bằng đồng; màu xanh lục của tượng là lớp gỉ đồng (patina) hình thành qua thời gian.",
  30: "Đồng xu 1 cent hiện nay của Mỹ chủ yếu làm từ kẽm, chỉ phủ một lớp đồng mỏng bên ngoài.",
  31: "Giống nước, gali giãn nở khi đông đặc.",
  32: "Giống scandi, germani cũng đã được Mendeleev dự đoán trước (gọi là 'eka-silic') và tính chất thật khớp với dự đoán.",
  33: "Vào thế kỷ 19, màu xanh lục Scheele, một chất tạo màu chứa asen, từng được dùng nhiều trong giấy dán tường và thuốc nhuộm.",
  34: "Tên lấy theo Selene, nữ thần Mặt Trăng Hy Lạp, đặt cặp với telu (từ 'tellus' nghĩa là Trái Đất).",
  35: "Tên bắt nguồn từ tiếng Hy Lạp 'bromos' nghĩa là 'mùi hôi' vì hơi brom có mùi rất nồng.",
  36: "Từ năm 1960 đến 1983, độ dài 1 mét từng được định nghĩa dựa trên bước sóng ánh sáng phát ra từ đồng vị krypton-86.",
  37: "Tên có nghĩa là 'đỏ sẫm', vì Bunsen và Kirchhoff nhận ra nó nhờ hai vạch đỏ trong quang phổ.",
  38: "Tên lấy từ làng Strontian ở Scotland, nơi khoáng vật chứa stronti được tìm thấy.",
  39: "Hợp chất YBCO chứa ytri là một trong những chất siêu dẫn nhiệt độ cao được nghiên cứu nhiều nhất.",
  40: "Ống bọc nhiên liệu trong nhiều lò phản ứng hạt nhân làm từ hợp kim zirconi vì nó hấp thụ rất ít neutron.",
  41: "Tên lấy theo Niobe, con gái của Tantalus, vì niobi có tính chất rất giống tantan.",
  42: "Tên bắt nguồn từ 'molybdos' (chì) vì quặng molipden từng bị nhầm với quặng chì.",
  43: "Đồng vị Tc-99m là chất đánh dấu phóng xạ được dùng phổ biến nhất trong chẩn đoán hình ảnh y học.",
  44: "Tên lấy từ Ruthenia, tên Latin của nước Nga.",
  45: "Tên bắt nguồn từ 'rhodon' (hoa hồng) vì nhiều muối của rhodi có màu hồng.",
  46: "Paladi cùng rhodi và bạch kim là những kim loại xúc tác quan trọng trong bộ chuyển đổi khí thải ô tô.",
  47: "Ký hiệu Ag bắt nguồn từ tiếng Latin 'argentum'; tên nước Argentina cũng có nguồn gốc từ chữ này.",
  48: "Tên bắt nguồn từ 'cadmia', tên cổ của khoáng vật calamin, nơi nguyên tố này được tìm thấy lần đầu.",
  49: "Tên lấy từ màu chàm (indigo), vì vạch quang phổ xanh chàm đã giúp phát hiện ra nó.",
  50: "Thiếc có 10 đồng vị bền, nhiều nhất trong tất cả các nguyên tố.",
  51: "Ký hiệu Sb bắt nguồn từ 'stibium', tên Latin cổ của antimon.",
  52: "Tên lấy theo 'tellus', tiếng Latin nghĩa là Trái Đất.",
  53: "Muối ăn bổ sung iot được dùng ở nhiều nước để phòng bệnh bướu cổ do thiếu iot.",
  54: "Tên có nghĩa là 'kẻ lạ' trong tiếng Hy Lạp.",
  55: "Tên bắt nguồn từ 'caesius' (xanh da trời), vì hai vạch xanh trong quang phổ đã giúp phát hiện ra nó.",
  56: "Tên bắt nguồn từ 'barys' (nặng), vì khoáng vật chứa bari có khối lượng riêng rất lớn.",
  57: "Lantan được thêm vào thủy tinh quang học để làm ống kính máy ảnh chất lượng cao.",
  58: "Tên lấy theo tiểu hành tinh Ceres, được phát hiện vài năm trước đó.",
  59: "Tên có nghĩa là 'cặp sinh đôi xanh lá hành', vì muối của nó có màu xanh lục.",
  60: "Tên có nghĩa là 'cặp sinh đôi mới'; neodim từng bị lẫn với praseodim trong hỗn hợp gọi là 'didymium'.",
  61: "Tên lấy theo Prometheus, vị thần trong thần thoại Hy Lạp đã đánh cắp lửa trao cho loài người.",
  62: "Tên bắt nguồn từ khoáng vật samarskit, gián tiếp trở thành nguyên tố đầu tiên mang tên của một con người (viên đại tá Samarsky).",
  63: "Tên lấy theo châu Âu.",
  64: "Tên lấy theo nhà hóa học Phần Lan Johan Gadolin.",
  65: "Hợp kim Terfenol-D chứa terbi co giãn mạnh khi đặt trong từ trường, được dùng trong cảm biến và loa đặc biệt.",
  66: "Tên có nghĩa là 'khó tiếp cận' trong tiếng Hy Lạp, vì rất khó tách dysprosi ra khỏi hỗn hợp.",
  67: "Tên bắt nguồn từ 'Holmia', tên Latin của Stockholm, thủ đô Thụy Điển.",
  68: "Hợp chất của erbi tạo màu hồng trong thủy tinh và men gốm.",
  69: "Là một trong những nguyên tố đất hiếm tự nhiên khan hiếm nhất.",
  70: "Ytterbi là một trong bốn nguyên tố mang tên từ làng Ytterby của Thụy Điển, cùng với ytri, terbi và erbi.",
  71: "Tên bắt nguồn từ 'Lutetia', tên Latin cổ của Paris.",
  72: "Tên bắt nguồn từ 'Hafnia', tên Latin của Copenhagen, nơi hafni được phát hiện.",
  73: "Tụ điện tantan có mặt trong nhiều điện thoại và máy tính nhờ kích thước nhỏ mà dung lượng lớn.",
  74: "Ký hiệu W bắt nguồn từ 'wolfram', tên gọi khác của vonfram.",
  75: "Reni là một trong những nguyên tố bền cuối cùng được phát hiện (năm 1925); tên lấy theo sông Rhine (Rhenus).",
  76: "Tên bắt nguồn từ 'osme' nghĩa là 'mùi', vì osmi tetroxit có mùi hắc đặc trưng.",
  77: "Tên lấy theo Iris, nữ thần cầu vồng Hy Lạp, vì các muối iridi có nhiều màu sắc.",
  78: "Tên bắt nguồn từ tiếng Tây Ban Nha 'platina', nghĩa là 'bạc nhỏ'.",
  79: "Một gam vàng có thể được dát thành tấm mỏng rộng khoảng 1 mét vuông.",
  80: "Ký hiệu Hg bắt nguồn từ 'hydrargyrum' nghĩa là 'bạc lỏng'; tên thủy ngân trong tiếng Anh (mercury) lấy theo thần Mercury.",
  81: "Rất độc và không mùi, từng được dùng làm thuốc diệt chuột trước khi bị cấm ở nhiều nước.",
  82: "Ký hiệu Pb bắt nguồn từ 'plumbum', cũng là gốc của từ 'plumber' (thợ ống nước) trong tiếng Anh.",
  83: "Một số hợp chất của bismut được dùng trong thuốc điều trị khó chịu ở dạ dày.",
  84: "Marie Curie đặt tên theo Ba Lan, quê hương của bà.",
  85: "Tên có nghĩa là 'không bền' trong tiếng Hy Lạp.",
  86: "Radon là sản phẩm phân rã của radi, tên của nó cũng bắt nguồn từ chữ radi.",
  87: "Tên lấy theo nước Pháp, quê hương của nhà khoa học Marguerite Perey, người phát hiện ra nó.",
  88: "Marie Curie phải xử lý hàng tấn quặng urani để tách được chỉ khoảng một phần mười gam radi.",
  89: "Đồng vị Ac-225 đang được nghiên cứu trong liệu pháp điều trị ung thư nhắm đích.",
  90: "Thori được nghiên cứu làm nhiên liệu hạt nhân thay thế urani, vì phổ biến hơn urani trong vỏ Trái Đất.",
  91: "Là một trong những nguyên tố tự nhiên hiếm nhất trong vỏ Trái Đất.",
  92: "Chu kỳ bán rã của U-238 khoảng 4,5 tỉ năm, xấp xỉ tuổi của Trái Đất.",
  93: "Dù là nguyên tố nhân tạo, neptuni vẫn tồn tại với lượng vết cực nhỏ trong quặng urani.",
  94: "Một khối plutoni ấm khi chạm vào, vì sự phân rã phóng xạ liên tục sinh nhiệt.",
  95: "Năm 1945, Glenn Seaborg tiết lộ sự tồn tại của americi và curi trên một chương trình đố vui truyền thanh dành cho trẻ em, trước khi báo cáo khoa học chính thức.",
  96: "Được tổng hợp lần đầu năm 1944 bằng cách bắn hạt alpha vào plutoni.",
  97: "Được tổng hợp lần đầu năm 1949 bằng cách bắn hạt alpha vào americi.",
  98: "Tên lấy theo bang California và Đại học California, nơi nguyên tố này được tạo ra.",
  99: "Vì phân rã quá nhanh nên einsteini hầu như chỉ được dùng trong nghiên cứu, và chỉ điều chế được lượng cực nhỏ.",
  100: "Là nguyên tố nặng nhất có thể tạo ra bằng cách bắn phá neutron vào nguyên tố nhẹ hơn trong lò phản ứng.",
  101: "Là nguyên tố đầu tiên được tổng hợp từng nguyên tử một.",
  102: "Trong dung dịch nước, nobeli bền nhất ở trạng thái oxi hóa +2, khác với hầu hết các nguyên tố actini.",
  103: "Tên lấy theo Ernest Lawrence, người phát minh ra máy gia tốc xyclotron.",
  104: "Tên lấy theo Ernest Rutherford, người được coi là cha đẻ của vật lý hạt nhân.",
  105: "Đồng vị bền nhất của dubni cũng chỉ tồn tại cỡ vài chục giờ.",
  106: "Các đồng vị của seaborgi chỉ tồn tại từ vài giây đến vài phút.",
  107: "Tên lấy theo Niels Bohr, người đề xuất mô hình nguyên tử mà bạn thấy ngay trong cửa sổ này.",
  108: "Tên bắt nguồn từ 'Hassia', tên Latin của bang Hessen ở Đức, nơi nguyên tố này được tạo ra.",
  109: "Tên lấy theo Lise Meitner, nhà vật lý người Áo, một trong những người đồng phát hiện ra sự phân hạch hạt nhân.",
  110: "Tên lấy theo thành phố Darmstadt (Đức), nơi có trung tâm nghiên cứu GSI đã tạo ra nó.",
  111: "Tên lấy theo Wilhelm Röntgen, người phát hiện ra tia X.",
  112: "Tên lấy theo Nicolaus Copernicus, người đề xuất mô hình Trái Đất quay quanh Mặt Trời.",
  113: "Được IUPAC công nhận cuối năm 2015, cùng với các nguyên tố 115, 117 và 118, hoàn thiện hàng thứ bảy của bảng tuần hoàn.",
  114: "Tên lấy theo Georgy Flerov, người sáng lập phòng thí nghiệm hạt nhân ở Dubna (Nga).",
  115: "Tên lấy theo tỉnh Moskva (Moscow Oblast) của Nga, nơi có thành phố Dubna.",
  116: "Tên lấy theo Phòng thí nghiệm quốc gia Lawrence Livermore ở California (Mỹ), nơi tham gia tạo ra nó.",
  117: "Tên lấy theo bang Tennessee (Mỹ), nơi có các cơ sở nghiên cứu đã đóng góp chất liệu để tạo ra nó.",
  118: "Là nguyên tố nặng nhất đã được tạo ra, và mới chỉ quan sát được một vài nguyên tử của nó."
};

function veFunFact(so) {
  var ds = document.getElementById("fun-facts-list");
  if (!ds) return;
  ds.replaceChildren();
  var cacFact = [DU_LIEU_FUN_FACT[so], DU_LIEU_FUN_FACT_2[so]].filter(Boolean);
  if (!cacFact.length) cacFact = ["Chưa có thông tin cho nguyên tố này."];
  cacFact.forEach(function (noiDung, i) {
    var p = document.createElement("p");
    p.style.margin = i === 0 ? "0" : "10px 0 0";
    p.textContent = noiDung;
    ds.appendChild(p);
  });
}

// ===== POPUP THÔNG TIN NGUYÊN TỐ =====
function hienThongTin(nguyenTo, loai, o) {
  var modal = document.getElementById("detail-modal");


  // Giữ màu viền popup theo loại nguyên tố.
  modal.style.setProperty(
    "--rgb",
    getComputedStyle(o).getPropertyValue("--rgb").trim()
  );


  document.getElementById("modal-symbol").textContent =
    nguyenTo.kyHieu;


  document.getElementById("modal-title").textContent =
    nguyenTo.ten + " (" + nguyenTo.kyHieu + ")";


  // Thông tin cơ bản: lưới các ô nhỏ (nhãn + giá trị) thay cho đoạn chữ xuống dòng
  var hangThongTin = [
    ["Số hiệu nguyên tử", nguyenTo.so],
    ["Ký hiệu", nguyenTo.kyHieu],
    ["Khối lượng nguyên tử chuẩn", nguyenTo.khoiLuong + " u"],
    ["Số proton", nguyenTo.so],
    ["Số electron (nguyên tử trung hòa)", nguyenTo.so],
    ["Chu kỳ", layChuKi(nguyenTo.so)],
    ["Nhóm", layNhom(nguyenTo.so)],
    ["Trạng thái ở điều kiện thường", layTrangThai(nguyenTo.kyHieu)],
    ["Phân loại", tenLoai[loai], true]
  ];
  var moTaEl = document.getElementById("modal-desc");
  moTaEl.replaceChildren();
  var luoiThongTin = document.createElement("div");
  luoiThongTin.className = "info-grid";
  hangThongTin.forEach(function (h) {
    var oTin = document.createElement("div");
    oTin.className = "info-item" + (h[2] ? " info-wide" : "");
    var nhanTin = document.createElement("span");
    nhanTin.className = "info-key";
    nhanTin.textContent = h[0];
    var giaTriTin = document.createElement("strong");
    giaTriTin.className = "info-val";
    giaTriTin.textContent = String(h[1]);
    oTin.appendChild(nhanTin);
    oTin.appendChild(giaTriTin);
    luoiThongTin.appendChild(oTin);
  });
  moTaEl.appendChild(luoiThongTin);
  moTaEl.insertAdjacentHTML("beforeend", taoTheNguoiPhatHien(nguyenTo.so));

  // Số hiệu và khối lượng hiện ở hai góc của ô nguyên tố lớn (đọc bằng CSS attr())
  var oKyHieu = document.getElementById("modal-symbol");
  oKyHieu.dataset.so = nguyenTo.so;
  oKyHieu.dataset.kl = nguyenTo.khoiLuong;

  var isotopePanel = document.getElementById("nist-isotope-source");
  if (!isotopePanel) {
    isotopePanel = document.createElement("section");
    isotopePanel.id = "nist-isotope-source";
    isotopePanel.innerHTML = '<h3>Phân bố đồng vị trong tự nhiên</h3><p class="isotope-note"></p><div class="isotope-chart"></div><div class="isotope-table"></div><a href="https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl" target="_blank" rel="noopener noreferrer">Nguồn dữ liệu tham khảo: NIST ↗</a>';
    var closeButton = document.getElementById("close-button");
    modal.insertBefore(isotopePanel, closeButton);
  }
  veBieuDoDongVi(nguyenTo.kyHieu, nguyenTo.khoiLuong);
  // Khi dữ liệu NIST tải xong thì vẽ lại bảng đồng vị (nếu popup vẫn đang mở đúng nguyên tố đó)
  taiDongViTuNIST().then(function (daTai) {
    if (daTai && modal.style.display !== "none" &&
        document.getElementById("modal-symbol").textContent === nguyenTo.kyHieu) {
      veBieuDoDongVi(nguyenTo.kyHieu, nguyenTo.khoiLuong);
    }
  });

  // Cập nhật mô hình cho đúng nguyên tố đang mở.
  veMoHinhNguyenTu(nguyenTo.so);
  veFunFact(nguyenTo.so);

  if (window.nguoiHienTai) {
    if (window.ghiNhanHuyHieu) window.ghiNhanHuyHieu("khamPha", nguyenTo.so);
  } else {
    nhacDangNhapMoKhoa();
  }


  document.getElementById("modal-backdrop").style.display = "block";
  modal.style.display = "grid";
}

// Khách chưa đăng nhập: lần đầu mở ô nguyên tố thì nhắc đăng nhập để mở khóa thành tựu
var daNhacDangNhap = false;
function nhacDangNhapMoKhoa() {
  if (daNhacDangNhap) return;
  daNhacDangNhap = true;

  var khung = document.getElementById("badge-toast-wrap");
  if (!khung) {
    khung = document.createElement("div");
    khung.id = "badge-toast-wrap";
    khung.setAttribute("aria-live", "polite");
    document.body.appendChild(khung);
  }

  var thongBao = document.createElement("div");
  thongBao.className = "badge-toast";

  var bieuTuong = document.createElement("span");
  bieuTuong.className = "badge-toast-icon";
  bieuTuong.textContent = "🔒";

  var chu = document.createElement("span");
  chu.className = "badge-toast-text";
  var nho = document.createElement("small");
  nho.textContent = "THÀNH TỰU ĐANG BỊ KHÓA";
  var noiDung = document.createElement("strong");
  noiDung.textContent = "Cần đăng nhập để mở khóa thành tựu";
  chu.appendChild(nho);
  chu.appendChild(noiDung);

  thongBao.appendChild(bieuTuong);
  thongBao.appendChild(chu);
  khung.appendChild(thongBao);

  setTimeout(function () {
    thongBao.classList.add("badge-toast-hide");
    setTimeout(function () { thongBao.remove(); }, 500);
  }, 4500);
}






function dongThongTin() {
  document.getElementById("detail-modal").style.display = "none";
  document.getElementById("modal-backdrop").style.display = "none";
}




document.getElementById("close-button").addEventListener("click", dongThongTin);
document.getElementById("modal-x").addEventListener("click", dongThongTin);
document.getElementById("modal-backdrop").addEventListener("click", dongThongTin);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") dongThongTin();
});




// 5. CHÚ THÍCH MÀU
var chuThich = document.getElementById("chuThich");
// Bấm vào một mục chú thích -> chỉ nhóm đó sáng, các nhóm khác mờ đi. Bấm lại (hoặc Esc) để bỏ lọc.
var loaiDangLoc = null;

function apDungLocLoai() {
  tatCaO.forEach(function (o) {
    var khop = !loaiDangLoc || o.classList.contains(loaiDangLoc);
    o.classList.toggle("loai-mo", !khop);
    o.classList.toggle("loai-sang", !!loaiDangLoc && khop);
  });
  giuCho.forEach(function (g) {
    g.classList.toggle("loai-mo", !!loaiDangLoc && !g.classList.contains(loaiDangLoc));
  });
  Array.prototype.forEach.call(chuThich.querySelectorAll(".chu-thich-o"), function (m) {
    var dangChon = m.dataset.loai === loaiDangLoc;
    m.classList.toggle("dang-loc", dangChon);
    m.classList.toggle("chu-thich-mo", !!loaiDangLoc && !dangChon);
    m.setAttribute("aria-pressed", dangChon ? "true" : "false");
  });
}

function chonLoai(khoaLoai) {
  loaiDangLoc = (loaiDangLoc === khoaLoai) ? null : khoaLoai;
  apDungLocLoai();
}

for (var khoa in tenLoai) {
  var muc = document.createElement("span");
  muc.className = "chu-thich-o " + khoa;
  muc.textContent = tenLoai[khoa];
  muc.dataset.loai = khoa;
  muc.setAttribute("role", "button");
  muc.setAttribute("tabindex", "0");
  muc.setAttribute("aria-pressed", "false");
  muc.title = "Bấm để chỉ hiện nhóm này";
  muc.addEventListener("click", function () { chonLoai(this.dataset.loai); });
  muc.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      chonLoai(this.dataset.loai);
    }
  });
  chuThich.appendChild(muc);
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && loaiDangLoc) {
    loaiDangLoc = null;
    apDungLocLoai();
  }
});




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
  if (tuKhoa !== "" && window.ghiNhanHuyHieu) {
  window.ghiNhanHuyHieu("timKiem", tuKhoa);
}
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
    explain: "Heli nhẹ hơn không khí và không cháy nên được dùng trong bóng bay. Không nên hít khí từ bóng bay vì có thể gây thiếu oxi."
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
    icon: "🌱",
    context: "NÔNG NGHIỆP",
    question: "Nguyên tố nào là thành phần quan trọng của nhiều loại phân bón giúp cây phát triển lá?",
    answers: ["Au — Vàng", "Ne — Neon", "He — Heli", "N — Nitơ"],
    correct: 3,
    explain: "Nitơ là thành phần của protein và diệp lục. Phân bón chứa nitơ giúp cây phát triển, nhưng cần sử dụng đúng liều lượng."
  },
  {
    icon: "🧴",
    context: "SỨC KHỎE",
    question: "Nguyên tố nào thường có trong kem đánh răng dưới dạng hợp chất giúp ngăn ngừa sâu răng?",
    answers: ["F — Flo", "Fe — Sắt", "Ag — Bạc", "Pb — Chì"],
    correct: 0,
    explain: "Các hợp chất fluoride giúp tăng khả năng chống axit của men răng và hỗ trợ ngăn ngừa sâu răng."
  },
  {
    icon: "🔋",
    context: "PIN",
    question: "Nguyên tố nào được sử dụng phổ biến trong pin lithium-ion của điện thoại?",
    answers: ["Ar — Argon", "Li — Liti", "Ne — Neon", "He — Heli"],
    correct: 1,
    explain: "Liti là thành phần quan trọng của nhiều loại pin lithium-ion nhờ đặc tính điện hóa phù hợp."
  },
  {
    icon: "🍳",
    context: "NHÀ BẾP",
    question: "Nguyên tố nào thường có trong thép không gỉ dùng làm nồi và dụng cụ nhà bếp?",
    answers: ["Ne — Neon", "He — Heli", "Cr — Crom", "Ar — Argon"],
    correct: 2,
    explain: "Crom giúp thép không gỉ hình thành lớp oxit bảo vệ, tăng khả năng chống ăn mòn."
  },
  {
    icon: "🪙",
    context: "TRANG SỨC",
    question: "Nguyên tố nào được dùng phổ biến để chế tác trang sức có giá trị cao?",
    answers: ["Na — Natri", "K — Kali", "Ca — Canxi", "Au — Vàng"],
    correct: 3,
    explain: "Vàng có tính dẻo, ít bị ăn mòn và có vẻ ngoài đặc trưng nên được dùng làm trang sức."
  },
  {
    icon: "📷",
    context: "NHIẾP ẢNH",
    question: "Nguyên tố nào từng được dùng trong các hợp chất nhạy sáng của phim ảnh truyền thống?",
    answers: ["Ag — Bạc", "He — Heli", "Ne — Neon", "N — Nitơ"],
    correct: 0,
    explain: "Các muối bạc nhạy sáng được sử dụng trong phim ảnh truyền thống để ghi lại hình ảnh."
  },
  {
    icon: "🚗",
    context: "GIAO THÔNG",
    question: "Nguyên tố nào là thành phần chính của thép dùng để chế tạo nhiều bộ phận ô tô?",
    answers: ["He — Heli", "Fe — Sắt", "Ne — Neon", "Ar — Argon"],
    correct: 1,
    explain: "Thép có nền là sắt được sử dụng rộng rãi trong khung xe và nhiều bộ phận ô tô nhờ độ bền và khả năng gia công."
  },
  {
    icon: "🛩️",
    context: "HÀNG KHÔNG",
    question: "Nguyên tố nào thường được dùng trong hợp kim nhẹ cho máy bay?",
    answers: ["Hg — Thủy ngân", "Pb — Chì", "Al — Nhôm", "Br — Brom"],
    correct: 2,
    explain: "Nhôm và nhiều hợp kim nhôm có khối lượng riêng thấp, phù hợp với các kết cấu cần giảm trọng lượng."
  },
  {
    icon: "🩺",
    context: "Y TẾ",
    question: "Nguyên tố nào được sử dụng trong một số thiết bị chụp cộng hưởng từ dưới dạng chất siêu dẫn?",
    answers: ["Ne — Neon", "Cl — Clo", "He — Heli", "Nb — Niobi"],
    correct: 3,
    explain: "Một số hợp kim chứa niobi có tính siêu dẫn và được sử dụng trong cuộn dây của máy MRI."
  },
  {
    icon: "💡",
    context: "CHIẾU SÁNG",
    question: "Nguyên tố nào thường được dùng làm khí trong một số bóng đèn để hạn chế dây tóc bị oxi hóa?",
    answers: ["Ar — Argon", "O — Oxi", "Cl — Clo", "F — Flo"],
    correct: 0,
    explain: "Argon là khí trơ, được dùng trong một số bóng đèn để hạn chế phản ứng hóa học với dây tóc."
  },
  {
    icon: "🧪",
    context: "PHÒNG THÍ NGHIỆM",
    question: "Nguyên tố nào thường được dùng để tạo môi trường khí trơ khi cần tránh phản ứng với không khí?",
    answers: ["O — Oxi", "Ar — Argon", "Cl — Clo", "F — Flo"],
    correct: 1,
    explain: "Argon tương đối trơ về mặt hóa học nên được dùng để bảo vệ mẫu và vật liệu khỏi phản ứng với không khí."
  },
  {
    icon: "⚡",
    context: "NĂNG LƯỢNG",
    question: "Nguyên tố nào được dùng làm nhiên liệu trong một số nhà máy điện hạt nhân?",
    answers: ["He — Heli", "Ne — Neon", "U — Urani", "Ar — Argon"],
    correct: 2,
    explain: "Một số đồng vị của urani có thể tham gia phản ứng phân hạch và được dùng làm nhiên liệu hạt nhân."
  },
  {
    icon: "🛡️",
    context: "CHỐNG ĂN MÒN",
    question: "Nguyên tố nào được dùng để mạ một số chi tiết nhằm tăng độ cứng và khả năng chống mài mòn?",
    answers: ["Na — Natri", "K — Kali", "He — Heli", "Cr — Crom"],
    correct: 3,
    explain: "Crom được sử dụng trong một số lớp mạ để tăng độ cứng, khả năng chống mài mòn và cải thiện bề mặt."
  },
  {
    icon: "🧲",
    context: "NAM CHÂM",
    question: "Nguyên tố nào là thành phần quan trọng để tạo ra nhiều loại nam châm mạnh?",
    answers: ["Nd — Neodim", "Ne — Neon", "He — Heli", "Ar — Argon"],
    correct: 0,
    explain: "Neodim được dùng trong các nam châm neodim mạnh, có mặt trong nhiều động cơ và thiết bị điện tử."
  },
  {
    icon: "📱",
    context: "MÀN HÌNH",
    question: "Nguyên tố nào được dùng trong một số vật liệu dẫn điện trong suốt của màn hình cảm ứng?",
    answers: ["Pb — Chì", "In — Indi", "Hg — Thủy ngân", "U — Urani"],
    correct: 1,
    explain: "Oxit indi-thiếc là vật liệu dẫn điện trong suốt được sử dụng trong nhiều loại màn hình cảm ứng."
  },
  {
    icon: "🛠️",
    context: "DỤNG CỤ",
    question: "Nguyên tố nào được thêm vào một số loại thép để cải thiện độ cứng và độ bền?",
    answers: ["He — Heli", "Ne — Neon", "V — Vanadi", "Ar — Argon"],
    correct: 2,
    explain: "Vanadi được dùng trong một số hợp kim thép để cải thiện cơ tính, tùy thuộc vào thành phần và cách xử lý."
  },
  {
    icon: "🧯",
    context: "AN TOÀN",
    question: "Nguyên tố nào là thành phần của khí carbon dioxide được sử dụng trong một số bình chữa cháy?",
    answers: ["Fe — Sắt", "Au — Vàng", "Cu — Đồng", "C — Cacbon"],
    correct: 3,
    explain: "Cacbon là thành phần của CO₂. Khí này được dùng trong một số bình chữa cháy, đặc biệt với đám cháy liên quan đến thiết bị điện."
  },
  {
    icon: "🧼",
    context: "CHẤT TẨY RỬA",
    question: "Nguyên tố nào có trong xút ăn da, một hóa chất dùng trong sản xuất xà phòng?",
    answers: ["Na — Natri", "Au — Vàng", "He — Heli", "Ne — Neon"],
    correct: 0,
    explain: "Natri có trong natri hiđroxit (NaOH), một nguyên liệu được sử dụng trong quy trình sản xuất nhiều loại xà phòng."
  },
  {
    icon: "🪟",
    context: "VẬT LIỆU",
    question: "Nguyên tố nào là thành phần chính của cát thạch anh dùng sản xuất thủy tinh thông thường?",
    answers: ["Fe — Sắt", "Si — Silic", "Au — Vàng", "He — Heli"],
    correct: 1,
    explain: "Silic có trong silica (SiO₂), nguyên liệu chính để sản xuất phần lớn thủy tinh thông thường."
  },
  {
    icon: "🎆",
    context: "PHÁO HOA",
    question: "Nguyên tố nào có thể tạo màu đỏ trong một số loại pháo hoa?",
    answers: ["Ne — Neon", "He — Heli", "Sr — Stronti", "Ar — Argon"],
    correct: 2,
    explain: "Một số hợp chất stronti tạo màu đỏ trong pháo hoa. Việc sản xuất và sử dụng pháo hoa cần tuân thủ quy định an toàn."
  },
  {
    icon: "🧰",
    context: "HỢP KIM",
    question: "Nguyên tố nào được dùng trong hợp kim đồng thau cùng với đồng?",
    answers: ["O — Oxi", "N — Nitơ", "He — Heli", "Zn — Kẽm"],
    correct: 3,
    explain: "Đồng thau là hợp kim chủ yếu của đồng và kẽm, thường dùng làm phụ kiện, nhạc cụ và nhiều chi tiết cơ khí."
  },
  {
    icon: "🧴",
    context: "MỸ PHẨM",
    question: "Nguyên tố nào có trong titan đioxit, chất tạo màu trắng được sử dụng trong một số sản phẩm?",
    answers: ["Ti — Titan", "He — Heli", "Ne — Neon", "Ar — Argon"],
    correct: 0,
    explain: "Titan đioxit là hợp chất màu trắng được dùng trong một số loại sơn, lớp phủ và sản phẩm khác tùy quy định."
  },
  {
    icon: "🛞",
    context: "CAO SU",
    question: "Nguyên tố nào có trong lưu huỳnh được dùng để lưu hóa cao su?",
    answers: ["He — Heli", "S — Lưu huỳnh", "Ne — Neon", "Ar — Argon"],
    correct: 1,
    explain: "Lưu huỳnh giúp hình thành các liên kết giữa những mạch cao su trong quá trình lưu hóa, cải thiện tính chất của vật liệu."
  },
  {
    icon: "🛰️",
    context: "KHÔNG GIAN",
    question: "Nguyên tố nào là khí nhẹ được dùng trong một số ứng dụng làm lạnh và nghiên cứu nhiệt độ rất thấp?",
    answers: ["Cl — Clo", "Br — Brom", "He — Heli", "I — Iot"],
    correct: 2,
    explain: "Heli lỏng có nhiệt độ sôi rất thấp, được sử dụng trong các hệ thống làm lạnh khoa học và một số thiết bị siêu dẫn."
  },
  {
    icon: "🧲",
    context: "ĐIỆN ĐỘNG CƠ",
    question: "Nguyên tố nào thường có trong thép điện dùng làm lõi máy biến áp và động cơ?",
    answers: ["Au — Vàng", "He — Heli", "Ne — Neon", "Si — Silic"],
    correct: 3,
    explain: "Thép điện thường chứa một lượng silic giúp cải thiện tính chất từ và giảm tổn hao năng lượng."
  },
  {
    icon: "🛡️",
    context: "BẢO VỆ KIM LOẠI",
    question: "Nguyên tố nào được dùng làm lớp phủ bảo vệ thép khỏi gỉ trong tôn mạ kẽm?",
    answers: ["Zn — Kẽm", "He — Heli", "Ne — Neon", "Ar — Argon"],
    correct: 0,
    explain: "Kẽm tạo lớp phủ bảo vệ thép và có thể giúp bảo vệ thép ngay cả khi lớp phủ bị trầy xước nhẹ."
  },
  {
    icon: "🖨️",
    context: "IN ẤN",
    question: "Nguyên tố nào được dùng trong một số hợp kim hàn có nhiệt độ nóng chảy thấp?",
    answers: ["He — Heli", "Sn — Thiếc", "Ne — Neon", "Ar — Argon"],
    correct: 1,
    explain: "Thiếc là thành phần của nhiều hợp kim hàn, được dùng để nối các chi tiết kim loại và linh kiện điện tử."
  },
  {
    icon: "🎸",
    context: "NHẠC CỤ",
    question: "Nguyên tố nào được dùng trong một số dây đàn và hợp kim có độ bền cao?",
    answers: ["He — Heli", "Ne — Neon", "Ni — Niken", "Ar — Argon"],
    correct: 2,
    explain: "Niken được dùng trong nhiều hợp kim và một số loại dây đàn nhờ các tính chất cơ học và khả năng chống ăn mòn."
  },
  {
    icon: "🧫",
    context: "HÓA HỌC",
    question: "Nguyên tố nào là thành phần của axit sulfuric, một hóa chất quan trọng trong công nghiệp?",
    answers: ["He — Heli", "Ne — Neon", "Ar — Argon", "S — Lưu huỳnh"],
    correct: 3,
    explain: "Lưu huỳnh là thành phần của axit sulfuric (H₂SO₄), hóa chất được dùng trong nhiều ngành công nghiệp."
  },
  {
    icon: "🧪",
    context: "SẢN XUẤT HÓA CHẤT",
    question: "Nguyên tố nào được sử dụng trong sản xuất axit nitric và nhiều loại phân bón?",
    answers: ["N — Nitơ", "Au — Vàng", "He — Heli", "Ne — Neon"],
    correct: 0,
    explain: "Nitơ là nguyên liệu quan trọng trong sản xuất amoniac và nhiều hợp chất chứa nitơ dùng trong công nghiệp, nông nghiệp."
  },
  {
    icon: "🦷",
    context: "NHA KHOA",
    question: "Nguyên tố nào có trong một số vật liệu nha khoa và hợp kim dùng làm mão răng?",
    answers: ["He — Heli", "Ti — Titan", "Ne — Neon", "Ar — Argon"],
    correct: 1,
    explain: "Titan và một số hợp kim titan có tính tương thích sinh học tốt, được dùng trong implant và một số ứng dụng nha khoa."
  },
  {
    icon: "🧴",
    context: "BẢO QUẢN THỰC PHẨM",
    question: "Khí nào được dùng trong một số bao bì thực phẩm để giảm tiếp xúc với oxi?",
    answers: ["O₂ — Oxi", "Cl₂ — Clo", "N₂ — Nitơ", "F₂ — Flo"],
    correct: 2,
    explain: "Nitơ là khí tương đối trơ trong điều kiện đóng gói thông thường, được dùng để thay thế một phần không khí trong bao bì."
  },
  {
    icon: "🧲",
    context: "THIẾT BỊ ĐIỆN",
    question: "Nguyên tố nào có tính sắt từ và được dùng trong lõi của nhiều thiết bị điện từ?",
    answers: ["He — Heli", "Ne — Neon", "Ar — Argon", "Fe — Sắt"],
    correct: 3,
    explain: "Sắt có tính sắt từ và được sử dụng trong nhiều lõi điện từ, động cơ và máy biến áp dưới dạng vật liệu phù hợp."
  },
  {
    icon: "📡",
    context: "VIỄN THÔNG",
    question: "Nguyên tố nào được dùng trong một số hợp chất bán dẫn phát sáng của đèn LED?",
    answers: ["Ga — Gali", "He — Heli", "Ne — Neon", "Ar — Argon"],
    correct: 0,
    explain: "Gali có trong nhiều hợp chất bán dẫn như gallium nitride, được sử dụng trong LED và các thiết bị điện tử công suất."
  },
  {
    icon: "🧯",
    context: "VẬT LIỆU CHỊU NHIỆT",
    question: "Nguyên tố nào được sử dụng trong một số hợp kim chịu nhiệt của động cơ phản lực?",
    answers: ["He — Heli", "Ni — Niken", "Ne — Neon", "Ar — Argon"],
    correct: 1,
    explain: "Niken là thành phần quan trọng của nhiều siêu hợp kim chịu nhiệt được dùng trong tua-bin và động cơ phản lực."
  },
  {
    icon: "🏥",
    context: "THIẾT BỊ Y TẾ",
    question: "Nguyên tố nào được sử dụng trong một số thiết bị cấy ghép nhờ khả năng tương thích sinh học?",
    answers: ["Pb — Chì", "Hg — Thủy ngân", "Ti — Titan", "Cd — Cadimi"],
    correct: 2,
    explain: "Titan và một số hợp kim titan được sử dụng trong implant vì có tính tương thích sinh học và khả năng chống ăn mòn."
  },
  {
    icon: "🧱",
    context: "VẬT LIỆU XÂY DỰNG",
    question: "Nguyên tố nào có trong thạch cao, vật liệu dùng làm tấm trần và vách?",
    answers: ["Au — Vàng", "He — Heli", "Ne — Neon", "Ca — Canxi"],
    correct: 3,
    explain: "Canxi có trong canxi sunfat ngậm nước, thành phần chính của thạch cao xây dựng."
  },
  {
    icon: "🧵",
    context: "DỆT MAY",
    question: "Nguyên tố nào là thành phần của nhiều loại thuốc nhuộm và hóa chất xử lý vải?",
    answers: ["C — Cacbon", "He — Heli", "Ne — Neon", "Ar — Argon"],
    correct: 0,
    explain: "Cacbon là thành phần nền của rất nhiều hợp chất hữu cơ, bao gồm nhiều loại thuốc nhuộm và hóa chất dệt may."
  },
  {
    icon: "🪫",
    context: "ẮC QUY",
    question: "Nguyên tố nào là thành phần quan trọng của ắc quy chì-axit trên nhiều phương tiện?",
    answers: ["He — Heli", "Pb — Chì", "Ne — Neon", "Ar — Argon"],
    correct: 1,
    explain: "Ắc quy chì-axit sử dụng chì và các hợp chất của chì trong các điện cực."
  },
  {
    icon: "🔬",
    context: "QUANG HỌC",
    question: "Nguyên tố nào được dùng trong một số loại kính quang học và thiết bị laser?",
    answers: ["Na — Natri", "K — Kali", "Nd — Neodim", "Cl — Clo"],
    correct: 2,
    explain: "Neodim có thể được dùng trong vật liệu laser, chẳng hạn tinh thể pha neodim trong một số hệ thống laser."
  },
  {
    icon: "🧴",
    context: "CHẤT XÚC TÁC",
    question: "Nguyên tố nào được dùng làm chất xúc tác trong một số bộ chuyển đổi xúc tác của ô tô?",
    answers: ["He — Heli", "Ne — Neon", "Ar — Argon", "Pt — Bạch kim"],
    correct: 3,
    explain: "Bạch kim là một trong các kim loại có thể được dùng trong bộ chuyển đổi xúc tác để xử lý khí thải."
  },
  {
    icon: "🪙",
    context: "TIỀN TỆ",
    question: "Nguyên tố nào được dùng trong một số đồng xu và hợp kim chống ăn mòn?",
    answers: ["Cu — Đồng", "He — Heli", "Ne — Neon", "Ar — Argon"],
    correct: 0,
    explain: "Đồng được dùng trong nhiều hợp kim làm tiền xu và các sản phẩm kim loại nhờ tính dẻo và khả năng chống ăn mòn phù hợp."
  },
  {
    icon: "🧊",
    context: "LÀM LẠNH",
    question: "Nguyên tố nào là thành phần của nước đá khô dùng để giữ lạnh khi vận chuyển?",
    answers: ["He — Heli", "C — Cacbon", "Ne — Neon", "Ar — Argon"],
    correct: 1,
    explain: "Đá khô là cacbon đioxit rắn (CO₂), được dùng để làm lạnh trong một số hoạt động bảo quản và vận chuyển."
  },
  {
    icon: "🧽",
    context: "LỌC NƯỚC",
    question: "Nguyên tố nào có trong than hoạt tính được dùng để hấp phụ một số chất trong nước?",
    answers: ["He — Heli", "Ne — Neon", "C — Cacbon", "Ar — Argon"],
    correct: 2,
    explain: "Than hoạt tính chủ yếu là cacbon có cấu trúc xốp, được dùng để hấp phụ một số chất trong nước và không khí."
  },
  {
    icon: "🛠️",
    context: "CÔNG CỤ CẮT",
    question: "Nguyên tố nào có trong cacbua vonfram dùng để chế tạo nhiều dụng cụ cắt cứng?",
    answers: ["He — Heli", "Ne — Neon", "Ar — Argon", "W — Vonfram"],
    correct: 3,
    explain: "Vonfram là thành phần của cacbua vonfram, vật liệu có độ cứng cao được sử dụng trong nhiều dụng cụ cắt và gia công."
  },
  {
    icon: "🧪",
    context: "CÔNG NGHIỆP HÓA CHẤT",
    question: "Nguyên tố nào được dùng trong một số chất xúc tác để sản xuất hóa chất công nghiệp?",
    answers: ["V — Vanadi", "He — Heli", "Ne — Neon", "Ar — Argon"],
    correct: 0,
    explain: "Một số hợp chất vanadi được dùng làm chất xúc tác, chẳng hạn trong quy trình sản xuất axit sulfuric."
  },
  {
    icon: "🪟",
    context: "KÍNH CỬA SỔ",
    question: "Nguyên tố nào có thể được dùng trong một số lớp phủ kính giúp kiểm soát nhiệt?",
    answers: ["He — Heli", "Sn — Thiếc", "Ne — Neon", "Ar — Argon"],
    correct: 1,
    explain: "Các hợp chất thiếc được dùng trong một số lớp phủ kính chức năng, tùy theo công nghệ sản xuất."
  },
  {
    icon: "🧬",
    context: "SINH HỌC",
    question: "Nguyên tố nào là thành phần thiết yếu của ADN, ARN và ATP?",
    answers: ["He — Heli", "Ne — Neon", "P — Photpho", "Ar — Argon"],
    correct: 2,
    explain: "Photpho có trong nhóm photphat của ADN, ARN và ATP, phân tử quan trọng trong trao đổi năng lượng của tế bào."
  },
  {
    icon: "🌾",
    context: "PHÂN BÓN",
    question: "Nguyên tố nào là thành phần của nhiều loại phân lân giúp cây phát triển rễ?",
    answers: ["He — Heli", "Ne — Neon", "Ar — Argon", "P — Photpho"],
    correct: 3,
    explain: "Photpho là chất dinh dưỡng thiết yếu cho cây, tham gia chuyển hóa năng lượng và phát triển rễ."
  },
  {
    icon: "🧴",
    context: "SẢN PHẨM GIA DỤNG",
    question: "Nguyên tố nào có trong một số chất tẩy trắng và khử trùng dưới dạng hợp chất?",
    answers: ["Cl — Clo", "He — Heli", "Ne — Neon", "Ar — Argon"],
    correct: 0,
    explain: "Một số hợp chất chứa clo được dùng làm chất tẩy trắng hoặc khử trùng. Cần sử dụng đúng hướng dẫn và không trộn các chất tẩy rửa với nhau."
  },
  {
    icon: "🔩",
    context: "KIM LOẠI NHẸ",
    question: "Nguyên tố nào được dùng trong một số hợp kim nhẹ cho thiết bị và phương tiện?",
    answers: ["He — Heli", "Mg — Magie", "Ne — Neon", "Ar — Argon"],
    correct: 1,
    explain: "Magie có khối lượng riêng thấp và được sử dụng trong một số hợp kim nhẹ."
  },
  {
    icon: "🔧",
    context: "MẠ KIM LOẠI",
    question: "Nguyên tố nào được dùng trong một số lớp mạ để tạo bề mặt sáng và chống ăn mòn?",
    answers: ["He — Heli", "Ne — Neon", "Ni — Niken", "Ar — Argon"],
    correct: 2,
    explain: "Niken được dùng trong nhiều quy trình mạ để tạo lớp phủ bảo vệ và cải thiện bề mặt sản phẩm."
  },
  {
    icon: "🧪",
    context: "SẢN XUẤT PHÂN BÓN",
    question: "Nguyên tố nào là nguyên liệu quan trọng để sản xuất amoniac công nghiệp, dùng làm phân bón sau khi chuyển thành hợp chất?",
    answers: ["N — Nitơ", "Au — Vàng", "Ne — Neon", "Ag — Bạc"],
    correct: 0,
    explain: "Nitơ được sử dụng trong quy trình Haber–Bosch để sản xuất amoniac, nguyên liệu quan trọng của nhiều loại phân bón."
  },
  {
    icon: "🌡️",
    context: "THIẾT BỊ ĐO",
    question: "Nguyên tố nào từng được dùng trong nhiệt kế thủy tinh truyền thống nhưng hiện bị hạn chế ở nhiều nơi vì độc tính?",
    answers: ["Al — Nhôm", "Hg — Thủy ngân", "O — Oxi", "He — Heli"],
    correct: 1,
    explain: "Thủy ngân từng được dùng trong nhiệt kế vì nở đều theo nhiệt độ, nhưng độc tính khiến nhiều nơi chuyển sang nhiệt kế không chứa thủy ngân."
  }
];


  var soCauMoiLuot = 10;
  var boCauHoi = [];
  var viTriCau = 0;
  var diem = 0;
  var daTraLoi = 0;
  var khoaTraLoi = false;

  // ----- Đồng hồ đố vui -----
  // Chỉ chạy khi mục đố vui đang mở, tạm dừng khi đóng, dừng hẳn khi có kết quả.
  var MOC_THANH_THOI_GIAN = 180000;   // thanh thời gian đầy ở mốc 3 phút (chỉ để minh họa, không giới hạn)
  var tichLuy = 0, mocBatDau = 0, dongHoChay = false, daXong = false;

  window.dinhDangThoiGian = function (ms) {
    var tong = Math.max(0, ms) / 1000;
    var phut = Math.floor(tong / 60);
    var giay = tong - phut * 60;
    return (phut < 10 ? "0" : "") + phut + ":" + (giay < 10 ? "0" : "") + giay.toFixed(1);
  };

  function thoiGianDaTroi() {
    return tichLuy + (dongHoChay ? Date.now() - mocBatDau : 0);
  }

  function veDongHo() {
    var t = thoiGianDaTroi();
    var elTime = document.getElementById("quiz-time");
    var elBar = document.getElementById("quiz-time-bar");
    if (elTime) elTime.textContent = window.dinhDangThoiGian(t).replace(/\.\d$/, "");
    if (elBar) elBar.style.width = Math.min(100, t / MOC_THANH_THOI_GIAN * 100) + "%";
  }

  function datLaiDongHo() {
    tichLuy = 0;
    dongHoChay = false;
    daXong = false;
    veDongHo();
  }

  function dungDongHo() {
    if (dongHoChay) {
      tichLuy += Date.now() - mocBatDau;
      dongHoChay = false;
    }
    daXong = true;
    veDongHo();
    return tichLuy;
  }

  setInterval(function () {
    var khu = document.getElementById("khu-do-vui");
    var dangMo = !!khu && khu.classList.contains("quiz-dang-mo");
    if (dangMo && !daXong && !dongHoChay) {
      dongHoChay = true;
      mocBatDau = Date.now();
    } else if (!dangMo && dongHoChay) {
      tichLuy += Date.now() - mocBatDau;
      dongHoChay = false;
    }
    veDongHo();
  }, 200);




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




    if (dung) {
  diem++;


  if (window.ghiNhanHuyHieu) {
    window.ghiNhanHuyHieu("dung");
  }
}




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




    var thoiGianXong = dungDongHo();
    if (window.ghiNhanHuyHieu) window.ghiNhanHuyHieu("hoanThanh", diem, thoiGianXong);

    el.category.textContent = "HOÀN THÀNH THỬ THÁCH";
    el.symbol.textContent =
      diem === soCauMoiLuot ? "🏆" :
      diem >= 7 ? "🧪" : "📚";
    el.name.textContent = "Kết quả của bạn";
    el.question.textContent =
      "Bạn trả lời đúng " + diem + "/" + soCauMoiLuot +
      " câu hỏi!";




    el.answers.replaceChildren();

    // Khung hiển thị thời gian hoàn thành ngay trên thẻ kết quả
    var khungThoiGian = document.createElement("div");
    khungThoiGian.className = "quiz-result-time";
    var nhanTG = document.createElement("span");
    nhanTG.textContent = "⏱ Thời gian hoàn thành";
    var giaTriTG = document.createElement("strong");
    giaTriTG.textContent = window.dinhDangThoiGian(thoiGianXong);
    khungThoiGian.appendChild(nhanTG);
    khungThoiGian.appendChild(giaTriTG);
    el.answers.appendChild(khungThoiGian);




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
      " Bằng điểm thì ai nhanh hơn xếp trên.";




    el.next.disabled = true;
    el.next.textContent = "Đã hoàn thành ✓";
  }




  function batDauLai() {
    boCauHoi = tronMang(nganHangCauHoi).slice(0, soCauMoiLuot);
    viTriCau = 0;
    diem = 0;
    daTraLoi = 0;
    datLaiDongHo();
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
// ===== 8. HỆ THỐNG HUY HIỆU =====
(function () {
  "use strict";


  // Huy hiệu và điểm được lưu RIÊNG cho từng tài khoản (khóa có kèm email).
  var KHOA_LUU_GOC = "bangTuanHoan3D_huyHieu_v3:";
  var nguoi = null;                                   // { uid, email, ten } hoặc null nếu chưa đăng nhập

  // Người đăng nhập do auth-store.js (Firebase) đặt vào window.nguoiHienTai
  function layNguoiHienTai() {
    return window.nguoiHienTai || null;
  }

  // Bản lưu tạm trên máy (dự phòng khi mất mạng); nguồn chính là Firestore.
  function khoaLuu() {
    return nguoi ? KHOA_LUU_GOC + nguoi.uid : null;
  }


  var DANH_SACH_HUY_HIEU = [
    {
      id: "correct1",
      icon: "🎯",
      name: "Phát súng đầu tiên",
      desc: "Trả lời đúng câu hỏi đầu tiên.",
      check: function (s) { return s.dung >= 1; }
    },
    {
      id: "correct5",
      icon: "🧠",
      name: "Bộ não hóa học",
      desc: "Trả lời đúng tổng cộng 5 câu.",
      check: function (s) { return s.dung >= 5; }
    },
    {
      id: "correct10",
      icon: "🏆",
      name: "Bậc thầy nguyên tố",
      desc: "Trả lời đúng tổng cộng 10 câu.",
      check: function (s) { return s.dung >= 10; }
    },
    {
      id: "explore1",
      icon: "🔬",
      name: "Nhà thám hiểm",
      desc: "Mở thông tin nguyên tố đầu tiên.",
      check: function (s) { return s.khamPha.length >= 1; }
    },
    {
      id: "explore10",
      icon: "🧪",
      name: "Nhà nghiên cứu",
      desc: "Khám phá 10 nguyên tố khác nhau.",
      check: function (s) { return s.khamPha.length >= 10; }
    },
    {
      id: "explore25",
      icon: "⚗️",
      name: "Chuyên gia phòng thí nghiệm",
      desc: "Khám phá 25 nguyên tố khác nhau.",
      check: function (s) { return s.khamPha.length >= 25; }
    },
    {
      id: "explore118",
      icon: "🌌",
      name: "Bách khoa nguyên tố",
      desc: "Khám phá đủ cả 118 nguyên tố.",
      check: function (s) { return s.khamPha.length >= 118; }
    },
    {
      id: "search1",
      icon: "🔎",
      name: "Mắt cú",
      desc: "Tìm kiếm nguyên tố lần đầu.",
      check: function (s) { return s.timKiem.length >= 1; }
    },
    {
      id: "search5",
      icon: "🧭",
      name: "Truy tìm nguyên tố",
      desc: "Tìm 5 từ khóa khác nhau.",
      check: function (s) { return s.timKiem.length >= 5; }
    },
    {
      id: "search20",
      icon: "💎",
      name: "Thợ săn nguyên tố",
      desc: "Tìm 20 từ khóa khác nhau.",
      check: function (s) { return s.timKiem.length >= 20; }
    }
  ];


  function trangThaiMoi() {
    return {
      dung: 0,
      khamPha: [],
      timKiem: [],
      diemCao: 0,
      diemCaoLuc: 0,
      thoiGian: 0,
      luot: 0,
      daMo: []
    };
  }


  function docDuLieu(thoTuMayChu) {
    try {
      var khoa = khoaLuu();
      if (!khoa) return trangThaiMoi(); // chưa đăng nhập: không đọc dữ liệu của ai
      var raw = thoTuMayChu !== undefined ? thoTuMayChu : localStorage.getItem(khoa);
      if (!raw) return trangThaiMoi();


      var s = JSON.parse(raw);
      if (!s || typeof s !== "object") return trangThaiMoi();


      return {
        dung: Number.isFinite(s.dung) && s.dung >= 0
          ? Math.floor(s.dung) : 0,
        khamPha: Array.isArray(s.khamPha)
          ? s.khamPha.filter(function (n) {
              return Number.isInteger(n) && n >= 1 && n <= 118;
            }) : [],
        timKiem: Array.isArray(s.timKiem)
          ? s.timKiem.filter(function (q) {
              return typeof q === "string";
            }) : [],
        diemCao: Number.isFinite(s.diemCao) && s.diemCao >= 0
          ? Math.min(Math.floor(s.diemCao), 10) : 0,
        diemCaoLuc: Number.isFinite(s.diemCaoLuc) && s.diemCaoLuc > 0
          ? s.diemCaoLuc : 0,
        thoiGian: Number.isFinite(s.thoiGian) && s.thoiGian > 0 && s.thoiGian <= 9e12
          ? Math.floor(s.thoiGian) : 0,
        luot: Number.isFinite(s.luot) && s.luot >= 0
          ? Math.floor(s.luot) : 0,
        daMo: Array.isArray(s.daMo)
          ? s.daMo.filter(function (id) {
              return DANH_SACH_HUY_HIEU.some(function (h) {
                return h.id === id;
              });
            }) : []
      };
    } catch (e) {
      console.warn("Không đọc được dữ liệu huy hiệu:", e);
      return trangThaiMoi();
    }
  }


  nguoi = layNguoiHienTai();
  var trangThai = docDuLieu();


  var avatar = document.getElementById("badge-avatar");
  var soHuyHieu = document.getElementById("badge-count");
  var nen = document.getElementById("badge-backdrop");
  var nutDong = document.getElementById("badge-close");
  var luoi = document.getElementById("badge-grid");
  var tongText = document.getElementById("badge-total-text");
  var thanhTienTrinh = document.getElementById("badge-track-fill");
  var goiY = document.getElementById("badge-hint");


  if (!avatar || !soHuyHieu || !nen || !nutDong ||
      !luoi || !tongText || !thanhTienTrinh || !goiY) {
    console.error("Huy hiệu: Thiếu phần tử HTML.");
    return;
  }


  function daDat(id) {
    return trangThai.daMo.indexOf(id) !== -1;
  }


  function luuDuLieu() {
    try {
      var khoa = khoaLuu();
      if (khoa) localStorage.setItem(khoa, JSON.stringify(trangThai)); // khách: chỉ giữ trong bộ nhớ
    } catch (e) {
      console.warn("Không thể lưu tiến trình huy hiệu:", e);
    }
    guiLenMayChu();
  }

  // Báo lỗi lưu lên máy chủ để biết vì sao bảng xếp hạng không đổi (vd: permission-denied = luật Firestore chặn ghi)
  function baoLoiLuu(e) {
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
    bt.textContent = "⚠️";
    var chu = document.createElement("span");
    chu.className = "badge-toast-text";
    var nho = document.createElement("small");
    nho.textContent = "KHÔNG LƯU ĐƯỢC LÊN BẢNG XẾP HẠNG";
    var nd = document.createElement("strong");
    nd.textContent = (e && (e.code || e.message)) ? String(e.code || e.message) : "Lỗi không rõ";
    chu.appendChild(nho);
    chu.appendChild(nd);
    tb.appendChild(bt);
    tb.appendChild(chu);
    khung.appendChild(tb);
    setTimeout(function () {
      tb.classList.add("badge-toast-hide");
      setTimeout(function () { tb.remove(); }, 500);
    }, 7000);
  }

  var henGio = null;
  var guiNgay = false;   // true khi vừa hoàn thành đố vui: đẩy điểm lên bảng xếp hạng ngay, không chờ
  function guiLenMayChu() {
    if (!nguoi || !window.mayChu) return;
    clearTimeout(henGio);
    var doTre = guiNgay ? 0 : 600;
    guiNgay = false;
    henGio = setTimeout(function () {
      if (!nguoi) return;
      window.mayChu.luuTienTrinh(trangThai).catch(function (e) {
        console.warn("Không lưu được lên máy chủ:", e);
        baoLoiLuu(e);
      });
    }, doTre);
  }

  // Gộp tiến trình trên máy và trên máy chủ: không bao giờ làm mất tiến trình của bên nào.
  function gopTrangThai(a, b) {
    var ketQua = trangThaiMoi();
    ketQua.dung = Math.max(a.dung, b.dung);
    ketQua.luot = Math.max(a.luot, b.luot);
    var hop = function (x, y) {
      var tap = x.slice();
      y.forEach(function (v) { if (tap.indexOf(v) === -1) tap.push(v); });
      return tap;
    };
    ketQua.khamPha = hop(a.khamPha, b.khamPha);
    ketQua.timKiem = hop(a.timKiem, b.timKiem);
    ketQua.daMo = hop(a.daMo, b.daMo);
    // Bản tốt hơn: điểm cao hơn; bằng điểm thì thời gian ngắn hơn
    var tot;
    if (a.diemCao !== b.diemCao) {
      tot = a.diemCao > b.diemCao ? a : b;
    } else if (a.thoiGian && b.thoiGian) {
      tot = a.thoiGian <= b.thoiGian ? a : b;
    } else if (a.thoiGian || b.thoiGian) {
      tot = a.thoiGian ? a : b;
    } else if (a.diemCaoLuc && b.diemCaoLuc) {
      tot = a.diemCaoLuc <= b.diemCaoLuc ? a : b;
    } else {
      tot = a;
    }
    ketQua.diemCao = tot.diemCao;
    ketQua.diemCaoLuc = tot.diemCaoLuc;
    ketQua.thoiGian = tot.thoiGian;
    return ketQua;
  }


  function hienBang() {
    nen.classList.add("badge-visible");
    document.body.style.overflow = "hidden";
    nutDong.focus();
  }


  function dongBang() {
    nen.classList.remove("badge-visible");
    document.body.style.overflow = "";
    avatar.focus();
  }


  // Dòng thông tin tài khoản / điểm cao nằm trên thanh tiến trình (tạo bằng JS, không cần sửa HTML).
  var dongTaiKhoan = document.createElement("div");
  dongTaiKhoan.id = "badge-account";
  var tienTrinhKhung = nen.querySelector(".badge-total");
  if (tienTrinhKhung && tienTrinhKhung.parentNode) {
    tienTrinhKhung.parentNode.insertBefore(dongTaiKhoan, tienTrinhKhung);
  }

  function veThongTinTaiKhoan() {
    dongTaiKhoan.replaceChildren();

    var tren = document.createElement("div");
    tren.className = "badge-account-name";
    tren.textContent = nguoi
      ? "👤 " + nguoi.ten + " · " + nguoi.email
      : "👤 Bạn chưa đăng nhập — tiến trình sẽ không được lưu.";
    dongTaiKhoan.appendChild(tren);

    var duoi = document.createElement("div");
    duoi.className = "badge-account-stats";
    duoi.textContent =
      "🎯 Điểm cao nhất: " + trangThai.diemCao + "/10" +
      "  ·  🕹 Lượt chơi: " + trangThai.luot +
      "  ·  ✅ Câu đúng: " + trangThai.dung;
    dongTaiKhoan.appendChild(duoi);
  }


  function veHuyHieu() {
    veThongTinTaiKhoan();

    var soDaMo = DANH_SACH_HUY_HIEU.filter(function (h) {
      return daDat(h.id);
    }).length;


    soHuyHieu.textContent = soDaMo + "/" + DANH_SACH_HUY_HIEU.length;
    tongText.textContent = soDaMo + "/" +
      DANH_SACH_HUY_HIEU.length + " huy hiệu";


    thanhTienTrinh.style.width =
      (soDaMo / DANH_SACH_HUY_HIEU.length * 100) + "%";


    luoi.replaceChildren();


    DANH_SACH_HUY_HIEU.forEach(function (h) {
      var moKhoa = daDat(h.id);
      var o = document.createElement("article");
      o.className = "badge-item" + (moKhoa ? " unlocked" : "");


      var icon = document.createElement("span");
      icon.className = "badge-icon";
      icon.textContent = moKhoa ? h.icon : "🔒";


      var ten = document.createElement("div");
      ten.className = "badge-name";
      ten.textContent = h.name;


      var moTa = document.createElement("div");
      moTa.className = "badge-description";
      moTa.textContent = h.desc;


      var trangThaiHuyHieu = document.createElement("span");
      trangThaiHuyHieu.className = "badge-status";
      trangThaiHuyHieu.textContent = moKhoa ? "✓ Đã mở khóa" : "Chưa đạt";


      o.appendChild(icon);
      o.appendChild(ten);
      o.appendChild(moTa);
      o.appendChild(trangThaiHuyHieu);
      luoi.appendChild(o);
    });


    goiY.textContent = soDaMo === DANH_SACH_HUY_HIEU.length
      ? "🎉 Tuyệt vời! Bạn đã thu thập đủ tất cả huy hiệu!"
      : "Còn " + (DANH_SACH_HUY_HIEU.length - soDaMo) +
        " huy hiệu đang chờ bạn chinh phục!";
  }


  function kiemTraHuyHieu() {
    var vuaMo = [];


    DANH_SACH_HUY_HIEU.forEach(function (h) {
      if (!daDat(h.id) && h.check(trangThai)) {
        trangThai.daMo.push(h.id);
        vuaMo.push(h);
      }
    });


    luuDuLieu();
    veHuyHieu();


    vuaMo.forEach(function (h) {
      // Thông báo huy hiệu vừa đạt mà không chặn trò chơi.
      var khung = document.getElementById("badge-toast-wrap");
      if (!khung) {
        khung = document.createElement("div");
        khung.id = "badge-toast-wrap";
        khung.setAttribute("aria-live", "polite");
        document.body.appendChild(khung);
      }

      var thongBao = document.createElement("div");
      thongBao.className = "badge-toast";

      var bieuTuong = document.createElement("span");
      bieuTuong.className = "badge-toast-icon";
      bieuTuong.textContent = h.icon;

      var chu = document.createElement("span");
      chu.className = "badge-toast-text";
      var nho = document.createElement("small");
      nho.textContent = "🎉 MỞ KHÓA HUY HIỆU MỚI";
      var ten = document.createElement("strong");
      ten.textContent = h.name;
      chu.appendChild(nho);
      chu.appendChild(ten);

      thongBao.appendChild(bieuTuong);
      thongBao.appendChild(chu);
      khung.appendChild(thongBao);

      setTimeout(function () {
        thongBao.classList.add("badge-toast-hide");
        setTimeout(function () {
          thongBao.remove();
        }, 500);
      }, 4500);
    });
  }


  // Hàm được gọi từ phần trò chơi, popup và tìm kiếm.
  window.ghiNhanHuyHieu = function (loai, giaTri, thoiGian) {
    if (!nguoi) return; // chưa đăng nhập: không ghi nhận, không mở khóa thành tựu
    if (loai === "dung") {
      trangThai.dung++;
    } else if (loai === "khamPha") {
      var so = Number(giaTri);
      if (Number.isInteger(so) && so >= 1 && so <= 118 &&
          trangThai.khamPha.indexOf(so) === -1) {
        trangThai.khamPha.push(so);
      }
    } else if (loai === "hoanThanh") {
      guiNgay = true;
      var d = Math.floor(Number(giaTri));
      if (Number.isFinite(d) && d >= 0) {
        trangThai.luot++;
        var ms = Math.floor(Number(thoiGian));
        var coThoiGian = Number.isFinite(ms) && ms > 0;
        if (coThoiGian) ms = Math.min(ms, 9e12);
        // Tốt hơn nếu điểm cao hơn, hoặc bằng điểm mà nhanh hơn
        var totHon = d > trangThai.diemCao ||
          (d === trangThai.diemCao && coThoiGian &&
            (!trangThai.thoiGian || ms < trangThai.thoiGian));
        if (totHon) {
          trangThai.diemCao = Math.min(d, 10);
          trangThai.thoiGian = coThoiGian ? ms : 0;
          trangThai.diemCaoLuc = Date.now();
        }
      }
    } else if (loai === "timKiem") {
      var tuKhoa = String(giaTri || "").trim()
        .toLowerCase().normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");


      if (tuKhoa && trangThai.timKiem.indexOf(tuKhoa) === -1) {
        trangThai.timKiem.push(tuKhoa);
      }
    } else {
      return;
    }


    kiemTraHuyHieu();
  };


  // Đăng nhập / đăng xuất (kể cả ở tab khác) -> chuyển sang dữ liệu của tài khoản mới.
  window.addEventListener("tai-khoan-doi", function () {
    nguoi = layNguoiHienTai();
    trangThai = docDuLieu();
    kiemTraHuyHieu();

    if (!nguoi || !window.mayChu) return;
    var uid = nguoi.uid;
    window.mayChu.docTienTrinh().then(function (tuMayChu) {
      if (!nguoi || nguoi.uid !== uid) return;          // đã đổi tài khoản trong lúc chờ
      if (tuMayChu) trangThai = gopTrangThai(trangThai, docDuLieu(JSON.stringify(tuMayChu)));
      kiemTraHuyHieu();                                  // vẽ lại và đẩy bản đã gộp lên máy chủ
    }).catch(function (e) {
      console.warn("Không tải được tiến trình từ máy chủ:", e);
    });
  });

  // Cùng tài khoản mở ở tab khác vừa lưu tiến trình -> cập nhật theo.
  window.addEventListener("storage", function (e) {
    var khoa = khoaLuu();
    if (khoa && e.key === khoa) {
      trangThai = docDuLieu();
      veHuyHieu();
    }
  });


  avatar.addEventListener("click", hienBang);
  nutDong.addEventListener("click", dongBang);


  nen.addEventListener("click", function (e) {
    if (e.target === nen) dongBang();
  });


  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nen.classList.contains("badge-visible")) {
      dongBang();
    }
  });


  veHuyHieu();
  kiemTraHuyHieu();
})();


// ===== 9. BẢNG XẾP HẠNG ĐỐ VUI (top 10 điểm cao nhất, lấy từ máy chủ Firebase) =====
(function () {
  var nut = document.getElementById("rank-avatar");
  var nen = document.getElementById("rank-backdrop");
  var nutDong = document.getElementById("rank-close");
  var ds = document.getElementById("rank-list");
  var ghiChu = document.getElementById("rank-note");
  if (!nut || !nen || !ds) return;

  var dangTai = 0;   // số thứ tự lần tải, để bỏ kết quả của lần tải cũ

  function thongBaoDong(chu) {
    ds.replaceChildren();
    var li = document.createElement("li");
    li.className = "rank-empty";
    li.textContent = chu;
    ds.appendChild(li);
  }

  function ve(top, toi) {
    ds.replaceChildren();
    if (!top.length) {
      thongBaoDong("Chưa có ai chơi. Hãy là người đầu tiên lên bảng!");
    }
    top.forEach(function (h, i) {
      var li = document.createElement("li");
      li.className = "rank-row" + (h.uid === toi ? " rank-me" : "") + (i < 3 ? " rank-top" + (i + 1) : "");

      var thuTu = document.createElement("span");
      thuTu.className = "rank-pos";
      thuTu.textContent = i < 3 ? ["🥇", "🥈", "🥉"][i] : String(i + 1);

      var ten = document.createElement("span");
      ten.className = "rank-name";
      ten.textContent = h.ten + (h.uid === toi ? " (bạn)" : "");

      var diem = document.createElement("span");
      diem.className = "rank-score";
      diem.textContent = h.diem + "/10";

      var tg = document.createElement("span");
      tg.className = "rank-time";
      tg.textContent = "⏱ " + (h.thoiGian > 0 && window.dinhDangThoiGian
        ? window.dinhDangThoiGian(h.thoiGian) : "—");
      tg.title = h.thoiGian > 0 ? "Thời gian hoàn thành lượt tốt nhất" : "Chưa có thời gian (lượt chơi cũ) — chơi lại để cập nhật";

      li.appendChild(thuTu);
      li.appendChild(ten);
      li.appendChild(tg);
      li.appendChild(diem);

      ds.appendChild(li);
    });

    ghiChu.textContent = "";
  }

  var huyTheoDoi = null;   // hàm hủy theo dõi thời gian thực khi đóng bảng
  var topMoiNhat = null;

  function theoDoiThoiGianThuc() {
    if (huyTheoDoi) { huyTheoDoi(); huyTheoDoi = null; }
    if (!window.mayChu || !window.mayChu.dangKyXepHang) { taiVaVe(); return; }
    thongBaoDong("Đang tải bảng xếp hạng...");
    ghiChu.textContent = "";
    try {
      huyTheoDoi = window.mayChu.dangKyXepHang(function (top) {
        topMoiNhat = top;
        ve(top, window.nguoiHienTai ? window.nguoiHienTai.uid : null);
      }, function (e) {
        console.warn("Không theo dõi được bảng xếp hạng:", e);
        taiVaVe();
      });
    } catch (e) {
      console.warn(e);
      taiVaVe();
    }
  }

  function taiVaVe() {
    var lanNay = ++dangTai;
    if (!window.mayChu) {
      thongBaoDong("Chưa kết nối được máy chủ.");
      ghiChu.textContent = "";
      return;
    }
    thongBaoDong("Đang tải bảng xếp hạng...");
    ghiChu.textContent = "";
    window.mayChu.layXepHang().then(function (top) {
      if (lanNay !== dangTai) return;
      var toi = window.nguoiHienTai ? window.nguoiHienTai.uid : null;
      ve(top, toi);
    }).catch(function (e) {
      if (lanNay !== dangTai) return;
      console.warn("Không tải được bảng xếp hạng:", e);
      thongBaoDong("Không tải được bảng xếp hạng. Kiểm tra mạng rồi mở lại nhé.");
    });
  }

  function mo() { nen.classList.add("rank-visible"); theoDoiThoiGianThuc(); }
  function dong() {
    nen.classList.remove("rank-visible");
    if (huyTheoDoi) { huyTheoDoi(); huyTheoDoi = null; }
  }

  nut.addEventListener("click", mo);
  nutDong.addEventListener("click", dong);
  nen.addEventListener("click", function (e) { if (e.target === nen) dong(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nen.classList.contains("rank-visible")) dong();
  });

  // Đang mở bảng mà đổi tài khoản thì tải lại để đánh dấu "(bạn)" đúng người
  window.addEventListener("tai-khoan-doi", function () {
    if (nen.classList.contains("rank-visible")) {
      if (topMoiNhat) ve(topMoiNhat, window.nguoiHienTai ? window.nguoiHienTai.uid : null);
      else theoDoiThoiGianThuc();
    }
  });
})();

// ===== TÍNH KHỐI LƯỢNG PHÂN TỬ (amu) + KIỂM TRA CÔNG THỨC =====
(function khoiLuongPhanTu() {
  const form = document.getElementById('amu-form');
  if (!form) return;
  const panel = document.getElementById('amu-calculator');
  const openButton = document.getElementById('amu-open-button');
  const closeButton = document.getElementById('amu-close-button');
  function setPanelOpen(open) {
    panel.classList.toggle('amu-open', open);
    panel.setAttribute('aria-hidden', String(!open));
    openButton.setAttribute('aria-expanded', String(open));
    if (open) document.getElementById('amu-formula').focus({ preventScroll: true });
    else openButton.focus({ preventScroll: true });
  }
  openButton.addEventListener('click', () => setPanelOpen(!panel.classList.contains('amu-open')));
  closeButton.addEventListener('click', () => setPanelOpen(false));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && panel.classList.contains('amu-open')) setPanelOpen(false); });
  const input = document.getElementById('amu-formula');
  const error = document.getElementById('amu-error');
  const result = document.getElementById('amu-result');
  const totalValue = document.getElementById('amu-total-value');
  const breakdown = document.getElementById('amu-breakdown');

  // Lấy ký hiệu và khối lượng nguyên tử từ dữ liệu bảng tuần hoàn hiện có.
  const atomicMass = new Map();
  if (Array.isArray(duLieu)) {
    duLieu.forEach(item => {
      const parts = item.split('|');
      if (parts.length >= 3) atomicMass.set(parts[0], Number(parts[2]));
    });
  }

  function parseFormula(raw) {
    const formula = raw.replace(/\s+/g, '').replace(/[∙⋅]/g, '·');
    if (!formula) throw new Error('Bạn chưa nhập công thức. Ví dụ: H2O hoặc Ca(OH)2.');
    if (formula.length > 120) throw new Error('Công thức quá dài. Vui lòng kiểm tra lại dữ liệu nhập.');
    if (/[^A-Za-z0-9()[\]{}·.]/.test(formula)) throw new Error('Có ký tự không hợp lệ. Chỉ dùng ký hiệu nguyên tố, chữ số, ngoặc và dấu chấm phân tử ngậm nước (·).');
    if (formula.startsWith('·') || formula.endsWith('·') || formula.includes('··') || formula.includes('..')) throw new Error('Vị trí dấu chấm phân tử không hợp lệ.');
    const segments = formula.split(/[·.]/);
    const all = new Map();

    function parseSegment(segment) {
      if (!segment) throw new Error('Có một phần công thức đang bị trống.');
      let pos = 0;
      let multiplier = 1;
      const lead = segment.match(/^(\d+)/);
      if (lead) {
        multiplier = Number(lead[1]);
        if (multiplier < 1 || lead[1].length > 1 && lead[1][0] === '0') throw new Error('Hệ số đầu công thức phải là số nguyên dương hợp lệ.');
        pos = lead[1].length;
        if (pos === segment.length) throw new Error('Hệ số không được đứng một mình.');
      }
      const counts = parseGroup(null).counts;
      if (pos !== segment.length) throw new Error('Không thể đọc phần công thức gần “' + segment.slice(pos, pos + 8) + '”.');
      counts.forEach((count, symbol) => all.set(symbol, (all.get(symbol) || 0) + count * multiplier));

      function parseGroup(expectedClose) {
        const counts = new Map();
        let hasContent = false;
        while (pos < segment.length) {
          const ch = segment[pos];
          if (ch === ')' || ch === ']' || ch === '}') {
            if (!expectedClose) throw new Error('Có ngoặc đóng “' + ch + '” nhưng không có ngoặc mở tương ứng.');
            if (ch !== expectedClose) throw new Error('Các loại ngoặc chưa khớp nhau.');
            pos++;
            return { counts, hasContent };
          }
          if (ch === '(' || ch === '[' || ch === '{') {
            pos++;
            const close = ch === '(' ? ')' : ch === '[' ? ']' : '}';
            const nested = parseGroup(close);
            if (!nested.hasContent) throw new Error('Ngoặc rỗng không phải công thức hóa học hợp lệ.');
            const num = readCount();
            nested.counts.forEach((count, symbol) => counts.set(symbol, (counts.get(symbol) || 0) + count * num));
            hasContent = true;
            continue;
          }
          if (/[A-Z]/.test(ch)) {
            const match = segment.slice(pos).match(/^[A-Z][a-z]?/)[0];
            if (!atomicMass.has(match)) throw new Error('Không nhận diện được nguyên tố “' + match + '”. Hãy kiểm tra ký hiệu nguyên tố (ví dụ Co là coban, CO là cacbon và oxi).');
            pos += match.length;
            counts.set(match, (counts.get(match) || 0) + readCount());
            hasContent = true;
            continue;
          }
          if (/[a-z]/.test(ch)) throw new Error('Ký hiệu nguyên tố phải bắt đầu bằng chữ hoa tại vị trí “' + ch + '”. Ví dụ viết Na, không phải na.');
          if (/\d/.test(ch)) throw new Error('Số lượng nguyên tử cần đặt ngay sau ký hiệu nguyên tố hoặc ngoặc.');
          throw new Error('Công thức có cú pháp không hợp lệ gần “' + segment.slice(pos, pos + 8) + '”.');
        }
        if (expectedClose) throw new Error('Thiếu ngoặc đóng “' + expectedClose + '”.');
        return { counts, hasContent };
      }

      function readCount() {
        const match = segment.slice(pos).match(/^\d+/);
        if (!match) return 1;
        if (match[0][0] === '0' || Number(match[0]) < 1) throw new Error('Chỉ số nguyên tử phải là số nguyên dương, không bắt đầu bằng 0.');
        const n = Number(match[0]);
        if (!Number.isSafeInteger(n) || n > 100000) throw new Error('Chỉ số nguyên tử quá lớn.');
        pos += match[0].length;
        return n;
      }
      if (!counts.size) throw new Error('Không tìm thấy nguyên tố trong công thức.');
    }

    segments.forEach(parseSegment);
    if (!all.size) throw new Error('Không tìm thấy nguyên tố trong công thức.');

    // Kiểm tra thêm một số dạng đơn chất phổ biến để tránh coi mọi chuỗi
    // đúng cú pháp là một chất có thật. Oxy thông thường tồn tại dạng O2,
    // ozone là O3; không xem O12 là công thức phân tử đã được xác nhận.
    if (all.size === 1) {
      const [[symbol, count]] = Array.from(all.entries());
      if (symbol === 'O' && count > 3) {
        throw new Error('O' + count + ' không phải dạng phân tử oxy thông thường đã được xác nhận. Oxy thường gặp là O₂ (oxi) hoặc O₃ (ozon). Công cụ không tính khối lượng cho công thức này.');
      }
      const diatomicElements = new Set(['H', 'N', 'F', 'Cl', 'Br', 'I']);
      if (diatomicElements.has(symbol) && count !== 2) {
        throw new Error('Đơn chất ' + symbol + ' thường tồn tại dạng phân tử ' + symbol + '₂, không phải ' + symbol + (count === 1 ? '' : count) + '. Hãy kiểm tra lại công thức trước khi tính.');
      }
    }
    return all;
  }

  function showError(message) {
    error.textContent = '⚠️ ' + message;
    error.hidden = false;
    error.style.color = 'var(--danger, #ff6b6b)';
    result.hidden = true;
    input.setAttribute('aria-invalid', 'true');
  }

  // Chuẩn hóa thành công thức tổng theo thứ tự Hill để tra cứu PubChem.
  // Lưu ý: PubChem xác nhận có bản ghi hợp chất mang cùng thành phần nguyên tố,
  // không khẳng định cấu trúc cụ thể của công thức người dùng nhập.
  function toHillFormula(counts) {
    const symbols = Array.from(counts.keys());
    const ordered = symbols.includes('C')
      ? ['C', ...(symbols.includes('H') ? ['H'] : []), ...symbols.filter(x => x !== 'C' && x !== 'H').sort()]
      : symbols.sort();
    return ordered.map(symbol => symbol + (counts.get(symbol) === 1 ? '' : counts.get(symbol))).join('');
  }

  let requestNumber = 0;
  async function verifyWithPubChem(counts) {
    const formula = toHillFormula(counts);
    const url = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/fastformula/' + encodeURIComponent(formula) + '/cids/JSON?MaxRecords=1';
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(url, { signal: controller.signal, headers: { 'Accept': 'application/json' } });
      if (!response.ok) {
        if (response.status === 404) return { found: false, formula };
        throw new Error('Cơ sở dữ liệu PubChem đang trả lỗi (' + response.status + ').');
      }
      const data = await response.json();
      const cids = data && data.IdentifierList && data.IdentifierList.CID;
      return { found: Array.isArray(cids) && cids.length > 0, formula, cid: cids && cids[0] };
    } finally {
      clearTimeout(timer);
    }
  }

  async function calculate(raw) {
    const currentRequest = ++requestNumber;
    error.hidden = true;
    input.removeAttribute('aria-invalid');
    result.hidden = true;
    try {
      const counts = parseFormula(raw);
      error.textContent = 'Đang đối chiếu công thức với cơ sở dữ liệu PubChem…';
      error.hidden = false;
      error.style.color = 'var(--text-secondary, #aab7c4)';
      input.setAttribute('aria-busy', 'true');
      const check = await verifyWithPubChem(counts);
      if (currentRequest !== requestNumber) return;
      if (!check.found) {
        showError('Không tìm thấy bản ghi hợp chất có công thức tổng ' + check.formula + ' trong PubChem. Vì chưa xác minh được công thức này, công cụ không tính amu. Hãy kiểm tra lại công thức.');
        return;
      }
      let total = 0;
      breakdown.replaceChildren();
      Array.from(counts.entries()).forEach(([symbol, count]) => {
        const mass = atomicMass.get(symbol);
        const subtotal = mass * count;
        total += subtotal;
        const row = document.createElement('div');
        row.className = 'amu-breakdown-row';
        const left = document.createElement('span');
        left.textContent = symbol + ' × ' + count + '  (Ar = ' + mass + ')';
        const right = document.createElement('strong');
        right.textContent = subtotal.toFixed(4) + ' amu';
        row.append(left, right);
        breakdown.append(row);
      });
      totalValue.textContent = total.toFixed(4) + ' amu';
      error.hidden = true;
      input.removeAttribute('aria-invalid');
      result.hidden = false;
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (e) {
      if (currentRequest !== requestNumber) return;
      if (e && e.name === 'AbortError') {
        showError('PubChem phản hồi quá lâu. Hãy thử lại khi kết nối mạng ổn định hơn; công cụ không tính khi chưa xác minh được.');
      } else if (e instanceof TypeError) {
        showError('Không kết nối được PubChem. Hãy kiểm tra Internet hoặc mở website qua máy chủ web rồi thử lại. Công cụ không tính khi chưa xác minh được.');
      } else {
        showError(e instanceof Error ? e.message : 'Không xác minh được công thức với PubChem. Vui lòng thử lại.');
      }
    } finally {
      if (currentRequest === requestNumber) input.removeAttribute('aria-busy');
    }
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    calculate(input.value);
  });
  document.querySelectorAll('[data-amu-example]').forEach(button => {
    button.addEventListener('click', () => {
      input.value = button.getAttribute('data-amu-example');
      calculate(input.value);
    });
  });
  input.addEventListener('input', () => {
    error.hidden = true;
    input.removeAttribute('aria-invalid');
  });
})();