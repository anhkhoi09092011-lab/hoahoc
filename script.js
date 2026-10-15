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





var DU_LIEU_DONG_VI_TU_NHIEN = {"H": [[1, 1.007825, 99.9885], [2, 2.014102, 0.0115]], "He": [[3, 3.016029, 0.000137], [4, 4.002603, 99.999863]], "Li": [[6, 6.015123, 7.59], [7, 7.016005, 92.41]], "B": [[10, 10.012937, 19.9], [11, 11.009305, 80.1]], "C": [[12, 12.0, 98.93], [13, 13.003355, 1.07]], "N": [[14, 14.003074, 99.636], [15, 15.000109, 0.364]], "O": [[16, 15.994915, 99.757], [17, 16.999132, 0.038], [18, 17.99916, 0.205]], "Ne": [[20, 19.99244, 90.48], [21, 20.993847, 0.27], [22, 21.991386, 9.25]], "Mg": [[24, 23.985042, 78.99], [25, 24.985837, 10.0], [26, 25.982593, 11.01]], "Si": [[28, 27.976927, 92.223], [29, 28.976495, 4.685], [30, 29.97377, 3.092]], "S": [[32, 31.972071, 94.99], [33, 32.971459, 0.75], [34, 33.967868, 4.25], [36, 35.967081, 0.01]], "Cl": [[35, 34.968853, 75.78], [37, 36.965903, 24.22]], "Ar": [[36, 35.967545, 0.3336], [38, 37.962732, 0.0629], [40, 39.962383, 99.6035]], "K": [[39, 38.963707, 93.2581], [40, 39.963999, 0.0117], [41, 40.961826, 6.7302]], "Ca": [[40, 39.962591, 96.941], [42, 41.958618, 0.647], [43, 42.958767, 0.135], [44, 43.955482, 2.086], [46, 45.953689, 0.004], [48, 47.952523, 0.187]], "Fe": [[54, 53.939609, 5.845], [56, 55.934936, 91.754], [57, 56.935393, 2.119], [58, 57.933274, 0.282]], "Cu": [[63, 62.929598, 69.15], [65, 64.92779, 30.85]], "Zn": [[64, 63.929142, 49.17], [66, 65.926034, 27.73], [67, 66.927128, 4.04], [68, 67.924845, 18.45], [70, 69.92532, 0.61]], "Br": [[79, 78.918338, 50.69], [81, 80.916291, 49.31]], "Ag": [[107, 106.905092, 51.839], [109, 108.904756, 48.161]], "Sn": [[112, 111.904824, 0.97], [114, 113.902783, 0.66], [115, 114.903344, 0.34], [116, 115.901743, 14.54], [117, 116.902954, 7.68], [118, 117.901607, 24.22], [119, 118.903311, 8.59], [120, 119.902202, 32.58], [122, 121.903444, 4.63], [124, 123.905277, 5.79]], "Xe": [[124, 123.905893, 0.095], [126, 125.904274, 0.089], [128, 127.903531, 1.91], [129, 128.90478, 26.401], [130, 129.903509, 4.071], [131, 130.905084, 21.232], [132, 131.904155, 26.909], [134, 133.905394, 10.436], [136, 135.907214, 8.857]], "Hg": [[196, 195.965833, 0.15], [198, 197.966769, 9.97], [199, 198.968281, 16.87], [200, 199.968327, 23.1], [201, 200.970303, 13.18], [202, 201.970644, 29.86], [204, 203.973494, 6.87]], "Pb": [[204, 203.973044, 1.4], [206, 205.974466, 24.1], [207, 206.975897, 22.1], [208, 207.976652, 52.4]]};
function veBieuDoDongVi(kyHieu, khoiLuong) {
  var panel = document.getElementById("nist-isotope-source");
  if (!panel) return;
  var data = DU_LIEU_DONG_VI_TU_NHIEN[kyHieu];
  var chart = panel.querySelector(".isotope-chart");
  var note = panel.querySelector(".isotope-note");
  var table = panel.querySelector(".isotope-table");

  if (!data || !data.length) {
    chart.innerHTML = "";
    table.innerHTML = "";
    note.textContent = "Chưa có dữ liệu đồng vị tích hợp cho nguyên tố này. Có thể tra cứu tại nguồn NIST bên dưới.";
    return;
  }

  var W = 520, H = 250, L = 44, R = 16, T = 24, B = 42;
  var maxMass = Math.max.apply(null, data.map(function (d) { return d[0]; }));
  var minMass = Math.min.apply(null, data.map(function (d) { return d[0]; }));
  var maxPct = Math.max.apply(null, data.map(function (d) { return d[2]; }));
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
  data.forEach(function (d) {
    var xx = x(d[0]), yy = y(d[2]);
    svg += '<line x1="' + xx + '" y1="' + y(0) + '" x2="' + xx + '" y2="' + yy + '" stroke="#8ee66b" stroke-width="2.4"/>';
    svg += '<circle cx="' + xx + '" cy="' + yy + '" r="3.5" fill="#c9ffad"/>';
    svg += '<text x="' + xx + '" y="' + Math.max(13, yy - 8) + '" text-anchor="middle" fill="currentColor" font-size="11">' + d[2] + '%</text>';
    svg += '<text x="' + xx + '" y="' + (H - B + 18) + '" text-anchor="middle" fill="currentColor" font-size="11">' + d[0] + '</text>';
  });
  svg += '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + y(0) + '" stroke="currentColor" stroke-opacity=".7"/>';
  svg += '<line x1="' + L + '" y1="' + y(0) + '" x2="' + (W - R) + '" y2="' + y(0) + '" stroke="currentColor" stroke-opacity=".7"/>';
  svg += '<text x="' + ((L + W - R) / 2) + '" y="' + (H - 5) + '" text-anchor="middle" fill="currentColor" font-size="11">Số khối đồng vị</text></svg>';

  chart.innerHTML = svg;
  note.textContent = "Mỗi vạch biểu diễn một đồng vị; chiều cao thể hiện phần trăm phổ biến tự nhiên.";
  table.innerHTML =
    '<div class="isotope-row isotope-head"><span>Đồng vị</span><span>Khối lượng (u)</span><span>Tỉ lệ tự nhiên</span></div>' +
    data.map(function (d) {
      return '<div class="isotope-row"><span>' + kyHieu + '-' + d[0] + '</span><span>' + d[1] + '</span><span>' + d[2] + '%</span></div>';
    }).join('');
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


  document.getElementById("modal-desc").innerHTML =
    "<strong>Số hiệu nguyên tử:</strong> " + nguyenTo.so + "<br>" +
    "<strong>Ký hiệu:</strong> " + nguyenTo.kyHieu + "<br>" +
    "<strong>Khối lượng nguyên tử chuẩn:</strong> " + nguyenTo.khoiLuong + " u<br>" +
    "<strong>Số proton:</strong> " + nguyenTo.so + "<br>" +
    "<strong>Số electron (nguyên tử trung hòa):</strong> " + nguyenTo.so + "<br>" +
    "<strong>Chu kỳ:</strong> " + layChuKi(nguyenTo.so) + "<br>" +
    "<strong>Nhóm:</strong> " + layNhom(nguyenTo.so) + "<br>" +
    "<strong>Phân loại:</strong> " + tenLoai[loai] + "<br>" +
    "<strong>Trạng thái ở điều kiện thường:</strong> " +
    layTrangThai(nguyenTo.kyHieu) +
    taoTheNguoiPhatHien(nguyenTo.so);

  var isotopePanel = document.getElementById("nist-isotope-source");
  if (!isotopePanel) {
    isotopePanel = document.createElement("section");
    isotopePanel.id = "nist-isotope-source";
    isotopePanel.innerHTML = '<h3>Phân bố đồng vị trong tự nhiên</h3><p class="isotope-note"></p><div class="isotope-chart"></div><div class="isotope-table"></div><a href="https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl" target="_blank" rel="noopener noreferrer">Nguồn dữ liệu tham khảo: NIST ↗</a>';
    var closeButton = document.getElementById("close-button");
    modal.insertBefore(isotopePanel, closeButton);
  }
  veBieuDoDongVi(nguyenTo.kyHieu, nguyenTo.khoiLuong);

  // Cập nhật mô hình cho đúng nguyên tố đang mở.
  veMoHinhNguyenTu(nguyenTo.so);

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
  var KHOA_LUU_GOC = "bangTuanHoan3D_huyHieu_v2:";
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

  var henGio = null;
  function guiLenMayChu() {
    if (!nguoi || !window.mayChu) return;
    clearTimeout(henGio);
    henGio = setTimeout(function () {
      if (!nguoi) return;
      window.mayChu.luuTienTrinh(trangThai).catch(function (e) {
        console.warn("Không lưu được lên máy chủ:", e);
      });
    }, 600);
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
      tg.textContent = h.thoiGian > 0 && window.dinhDangThoiGian
        ? "⏱ " + window.dinhDangThoiGian(h.thoiGian) : "";

      li.appendChild(thuTu);
      li.appendChild(ten);
      li.appendChild(tg);
      li.appendChild(diem);
      ds.appendChild(li);
    });

    var coToi = top.some(function (h) { return h.uid === toi; });
    if (!toi) {
      ghiChu.textContent = "Đăng nhập và chơi đố vui để có tên trên bảng.";
    } else if (coToi) {
      ghiChu.textContent = "Bằng điểm thì ai hoàn thành nhanh hơn xếp trên.";
    } else {
      ghiChu.textContent = "Hoàn thành đố vui với điểm đủ cao để vào top 10. Bằng điểm thì ai hoàn thành nhanh hơn xếp trên.";
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

  function mo() { nen.classList.add("rank-visible"); taiVaVe(); }
  function dong() { nen.classList.remove("rank-visible"); }

  nut.addEventListener("click", mo);
  nutDong.addEventListener("click", dong);
  nen.addEventListener("click", function (e) { if (e.target === nen) dong(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nen.classList.contains("rank-visible")) dong();
  });

  // Đang mở bảng mà đổi tài khoản thì tải lại để đánh dấu "(bạn)" đúng người
  window.addEventListener("tai-khoan-doi", function () {
    if (nen.classList.contains("rank-visible")) taiVaVe();
  });
})();