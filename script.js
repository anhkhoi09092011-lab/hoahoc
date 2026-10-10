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




// Tạo SVG an toàn bằng DOM, không dùng innerHTML cho dữ liệu nguyên tố.
function taoSVGNguyenTu(soProton, phanBo) {
  var NS = "http://www.w3.org/2000/svg";
  var kichThuoc = 400;
  var tam = kichThuoc / 2;


  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 400 400");
  svg.setAttribute("role", "img");
  svg.setAttribute(
    "aria-label",
    "Mô hình nguyên tử có " + soProton +
    " proton và " + soProton + " electron"
  );


  function themHinh(ten, thuocTinh) {
    var hinh = document.createElementNS(NS, ten);


    Object.keys(thuocTinh).forEach(function (khoa) {
      hinh.setAttribute(khoa, thuocTinh[khoa]);
    });


    svg.appendChild(hinh);
    return hinh;
  }


  var soLop = phanBo.length;
  var banKinhHatNhan = Math.min(
    10 + Math.sqrt(soProton) * 1.6,
    30
  );


  // Bán kính các lớp vỏ tăng đều, vừa khung SVG.
  var banKinhLop = [];


  for (var i = 0; i < soLop; i++) {
    banKinhLop.push(38 + i * (108 / Math.max(soLop, 1)));
  }


  // Vẽ các lớp vỏ trước electron.
  var mauLop = [
    "#6edc3c", "#45d6b5", "#5bbcff", "#b18cff",
    "#ffb454", "#ff7fa8", "#d4e36c"
  ];


  banKinhLop.forEach(function (banKinh, i) {
    themHinh("circle", {
      cx: tam,
      cy: tam,
      r: banKinh,
      class: "atom-shell-ring",
      stroke: mauLop[i % mauLop.length]
    });
  });


  // Vẽ hạt nhân phát sáng.
  themHinh("circle", {
    cx: tam,
    cy: tam,
    r: banKinhHatNhan + 3,
    class: "atom-nucleus-glow"
  });


 
  // Xếp proton trong hạt nhân, giới hạn số vòng để tránh lặp vô hạn.
  var banKinhProton = 2.8;
  var buocProton = banKinhProton * 2.15;
  var cacViTriProton = [[tam, tam]];


  var soVongToiDa = Math.ceil(
    (banKinhHatNhan + buocProton) / buocProton
  ) + 2;


  for (
    var vong = 1;
    vong <= soVongToiDa &&
    cacViTriProton.length < soProton;
    vong++
  ) {
    var soDiemVong = Math.max(
      6,
      Math.round(2 * Math.PI * vong)
    );


    for (
      var j = 0;
      j < soDiemVong &&
      cacViTriProton.length < soProton;
      j++
    ) {
      var goc = (2 * Math.PI * j / soDiemVong) +
        (vong % 2) * 0.18;


      var x = tam + Math.cos(goc) * vong * buocProton;
      var y = tam + Math.sin(goc) * vong * buocProton;


      if (
        Math.hypot(x - tam, y - tam) <= banKinhHatNhan - 2
      ) {
        cacViTriProton.push([x, y]);
      }
    }
  }


  // Nếu hạt nhân quá nhỏ để vẽ đủ chấm, vẫn hiển thị đủ số proton
  // bằng cách xếp đều các chấm trong phạm vi bán kính cho phép.
  if (cacViTriProton.length < soProton) {
    cacViTriProton = [];


    for (var p = 0; p < soProton; p++) {
      var gocProton = p * 2.399963229728653;
      var banKinhDat = Math.sqrt(p / Math.max(soProton, 1)) *
        Math.max(0, banKinhHatNhan - 3);


      cacViTriProton.push([
        tam + Math.cos(gocProton) * banKinhDat,
        tam + Math.sin(gocProton) * banKinhDat
      ]);
    }
  }


  cacViTriProton.forEach(function (viTri) {
    themHinh("circle", {
      cx: viTri[0],
      cy: viTri[1],
      r: banKinhProton,
      class: "atom-proton"
    });
  });


  // Với hạt nhân lớn, ghi số proton ở giữa để vẫn đọc được.
  if (soProton >= 20) {
    var nhan = themHinh("text", {
      x: tam,
      y: tam,
      class: "atom-center-label"
    });
    nhan.textContent = soProton + "p+";
  }


  // Vẽ electron thành các chấm riêng biệt trên từng lớp.
  phanBo.forEach(function (soElectron, index) {
    var banKinh = banKinhLop[index];


    for (var e = 0; e < soElectron; e++) {
      // Phân bố đều quanh vòng tròn; lệch góc giữa các lớp.
      var goc = (2 * Math.PI * e / soElectron) +
        index * 0.32;


      var x = tam + Math.cos(goc) * banKinh;
      var y = tam + Math.sin(goc) * banKinh;


      themHinh("circle", {
        cx: x,
        cy: y,
        r: 4,
        class: "atom-electron"
      });
    }
  });


  return svg;
}




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
    "<strong>Khối lượng nguyên tử:</strong> " + nguyenTo.khoiLuong + " u<br>" +
    "<strong>Chu kỳ:</strong> " + layChuKi(nguyenTo.so) + "<br>" +
    "<strong>Nhóm:</strong> " + layNhom(nguyenTo.so) + "<br>" +
    "<strong>Phân loại:</strong> " + tenLoai[loai] + "<br>" +
    "<strong>Trạng thái ở điều kiện thường:</strong> " +
    layTrangThai(nguyenTo.kyHieu);


  // Cập nhật mô hình cho đúng nguyên tố đang mở.
  veMoHinhNguyenTu(nguyenTo.so);

  if (window.ghiNhanHuyHieu) window.ghiNhanHuyHieu("khamPha", nguyenTo.so);


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
    },
    {
      icon: "🥇",
      context: "KIM LOẠI QUÝ",
      question: "Ký hiệu hóa học của vàng là gì?",
      answers: ["Ag", "Au", "Fe", "Cu"],
      correct: 1,
      explain: "Vàng có ký hiệu Au, bắt nguồn từ tên Latin Aurum."
    },
    {
      icon: "🌬️",
      context: "KHÔNG KHÍ",
      question: "Khí nào chiếm tỉ lệ lớn nhất trong không khí khô?",
      answers: ["O₂ — Oxi", "CO₂ — Cacbon đioxit", "N₂ — Nitơ", "H₂ — Hiđro"],
      correct: 2,
      explain: "Nitơ chiếm khoảng 78% thể tích không khí khô, còn oxi chiếm khoảng 21%."
    },
    {
      icon: "⚛️",
      context: "CẤU TẠO NGUYÊN TỬ",
      question: "Hạt nào mang điện tích dương trong hạt nhân nguyên tử?",
      answers: ["Electron", "Neutron", "Proton", "Photon"],
      correct: 2,
      explain: "Proton mang điện tích dương và nằm trong hạt nhân nguyên tử."
    },
    {
      icon: "🔬",
      context: "CẤU TẠO NGUYÊN TỬ",
      question: "Hạt nào mang điện tích âm?",
      answers: ["Proton", "Electron", "Neutron", "Hạt nhân"],
      correct: 1,
      explain: "Electron mang điện tích âm và phân bố trong vùng không gian quanh hạt nhân."
    },
    {
      icon: "🧪",
      context: "NGUYÊN TỐ",
      question: "Nguyên tố nào có số hiệu nguyên tử bằng 1?",
      answers: ["He — Heli", "H — Hiđro", "Li — Liti", "O — Oxi"],
      correct: 1,
      explain: "Hiđro có một proton trong hạt nhân nên có số hiệu nguyên tử bằng 1."
    },
    {
      icon: "💧",
      context: "HÓA HỌC ĐỜI SỐNG",
      question: "Công thức hóa học của nước là gì?",
      answers: ["HO", "H₂O", "H₂O₂", "CO₂"],
      correct: 1,
      explain: "Một phân tử nước gồm hai nguyên tử hiđro và một nguyên tử oxi."
    },
    {
      icon: "🪙",
      context: "KIM LOẠI",
      question: "Ký hiệu hóa học của bạc là gì?",
      answers: ["Au", "Ag", "Al", "Ar"],
      correct: 1,
      explain: "Bạc có ký hiệu Ag, bắt nguồn từ tên Latin Argentum."
    },
    {
      icon: "🧲",
      context: "TỪ TÍNH",
      question: "Kim loại nào sau đây bị nam châm hút mạnh trong điều kiện thông thường?",
      answers: ["Vàng", "Bạc", "Sắt", "Đồng"],
      correct: 2,
      explain: "Sắt là vật liệu sắt từ và bị nam châm hút mạnh."
    },
    {
      icon: "🧠",
      context: "BẢNG TUẦN HOÀN",
      question: "Nguyên tố nào có ký hiệu hóa học là K?",
      answers: ["Canxi", "Kali", "Coban", "Krypton"],
      correct: 1,
      explain: "K là ký hiệu của kali, bắt nguồn từ tên Latin Kalium."
    },
    {
      icon: "💎",
      context: "VẬT LIỆU",
      question: "Kim cương chủ yếu được cấu tạo từ nguyên tố nào?",
      answers: ["Silic", "Cacbon", "Canxi", "Sắt"],
      correct: 1,
      explain: "Kim cương là một dạng thù hình của cacbon, có cấu trúc mạng tinh thể rất bền."
    },
    {
      icon: "🫁",
      context: "SỰ SỐNG",
      question: "Nguyên tố nào cần thiết cho quá trình hô hấp tế bào của con người?",
      answers: ["Heli", "Neon", "Oxi", "Argon"],
      correct: 2,
      explain: "Oxi được sử dụng trong hô hấp hiếu khí để giúp tế bào giải phóng năng lượng từ chất dinh dưỡng."
    },
    {
      icon: "🧴",
      context: "HÓA HỌC ĐỜI SỐNG",
      question: "Chất nào có công thức NaCl?",
      answers: ["Baking soda", "Muối ăn", "Đường ăn", "Giấm ăn"],
      correct: 1,
      explain: "NaCl là natri clorua, thành phần chính của muối ăn thông thường."
    },
    {
      icon: "🧯",
      context: "KHÍ HIẾM",
      question: "Nguyên tố nào có ký hiệu Ne?",
      answers: ["Nitơ", "Niken", "Neon", "Natri"],
      correct: 2,
      explain: "Neon là một nguyên tố khí hiếm, có số hiệu nguyên tử 10."
    },
    {
      icon: "🥫",
      context: "KIM LOẠI",
      question: "Ký hiệu hóa học của nhôm là gì?",
      answers: ["Am", "Al", "Au", "Ag"],
      correct: 1,
      explain: "Nhôm có ký hiệu Al, là kim loại nhẹ được dùng phổ biến trong công nghiệp."
    },
    {
      icon: "🦴",
      context: "CƠ THỂ NGƯỜI",
      question: "Nguyên tố nào là thành phần khoáng chất quan trọng của xương và răng?",
      answers: ["Ne — Neon", "Ca — Canxi", "He — Heli", "Ar — Argon"],
      correct: 1,
      explain: "Canxi góp phần tạo nên cấu trúc khoáng của xương và răng."
    },
    {
      icon: "🧂",
      context: "HÓA HỌC",
      question: "Ký hiệu hóa học của natri là gì?",
      answers: ["N", "Na", "Ni", "Ne"],
      correct: 1,
      explain: "Natri có ký hiệu Na, bắt nguồn từ tên Latin Natrium."
    },
    {
      icon: "🪙",
      context: "KIM LOẠI",
      question: "Nguyên tố nào có số hiệu nguyên tử bằng 26?",
      answers: ["Cu — Đồng", "Fe — Sắt", "Zn — Kẽm", "Ag — Bạc"],
      correct: 1,
      explain: "Sắt có 26 proton trong hạt nhân và số hiệu nguyên tử bằng 26."
    },
    {
      icon: "🧫",
      context: "AXIT VÀ BAZƠ",
      question: "Dung dịch có pH nhỏ hơn 7 thường có tính chất gì ở khoảng 25°C?",
      answers: ["Tính axit", "Tính bazơ", "Trung tính", "Tính kim loại"],
      correct: 0,
      explain: "Ở khoảng 25°C, dung dịch có pH nhỏ hơn 7 thường được xem là có tính axit."
    },
    {
      icon: "🌱",
      context: "NÔNG NGHIỆP",
      question: "Nguyên tố nào là thành phần thiết yếu trong nhiều loại phân bón giúp cây phát triển?",
      answers: ["Ne — Neon", "Au — Vàng", "N — Nitơ", "He — Heli"],
      correct: 2,
      explain: "Nitơ cần thiết để cây tổng hợp protein và nhiều hợp chất sinh học quan trọng."
    },
    {
      icon: "🍽️",
      context: "ĐỒ DÙNG",
      question: "Nguyên tố nào giúp tăng khả năng chống ăn mòn của thép không gỉ?",
      answers: ["Cr — Crom", "He — Heli", "Ne — Neon", "Ar — Argon"],
      correct: 0,
      explain: "Crom giúp hình thành lớp oxit bảo vệ trên bề mặt thép không gỉ."
    },
    {
      icon: "🔋",
      context: "PIN VÀ NĂNG LƯỢNG",
      question: "Nguyên tố nào được sử dụng trong pin lithium-ion?",
      answers: ["Li — Liti", "Ne — Neon", "Ar — Argon", "He — Heli"],
      correct: 0,
      explain: "Pin lithium-ion sử dụng liti trong vật liệu điện cực và được dùng phổ biến trong thiết bị điện tử."
    },
    {
      icon: "💡",
      context: "THIẾT BỊ ĐIỆN",
      question: "Nguyên tố nào từng được dùng phổ biến làm dây tóc bóng đèn sợi đốt?",
      answers: ["Na — Natri", "W — Vonfram", "Pb — Chì", "Ca — Canxi"],
      correct: 1,
      explain: "Vonfram có nhiệt độ nóng chảy rất cao nên thích hợp cho dây tóc bóng đèn sợi đốt."
    },
    {
      icon: "🌌",
      context: "VŨ TRỤ",
      question: "Nguyên tố nào chiếm phần lớn thành phần của Mặt Trời?",
      answers: ["Sắt", "Oxi", "Hiđro", "Vàng"],
      correct: 2,
      explain: "Mặt Trời chủ yếu gồm hiđro và heli; hiđro là nguyên tố phổ biến nhất trong thành phần của nó."
    },
    {
      icon: "🧪",
      context: "BẢNG TUẦN HOÀN",
      question: "Các nguyên tố trong cùng một chu kỳ nằm theo hướng nào trên bảng tuần hoàn?",
      answers: ["Cột dọc", "Hàng ngang", "Đường chéo", "Vòng tròn"],
      correct: 1,
      explain: "Chu kỳ là hàng ngang của bảng tuần hoàn hóa học."
    },
    {
      icon: "📊",
      context: "BẢNG TUẦN HOÀN",
      question: "Các nhóm trong bảng tuần hoàn được trình bày theo hướng nào?",
      answers: ["Hàng ngang", "Cột dọc", "Đường chéo", "Hình xoắn ốc"],
      correct: 1,
      explain: "Các nhóm là những cột dọc trong bảng tuần hoàn hiện đại."
    },
    {
      icon: "⚛️",
      context: "CẤU TẠO NGUYÊN TỬ",
      question: "Trong nguyên tử trung hòa về điện, số electron bằng số hạt nào?",
      answers: ["Proton", "Nơtron", "Phân tử", "Đồng vị"],
      correct: 0,
      explain: "Nguyên tử trung hòa có số electron bằng số proton."
    },
    {
      icon: "🪨",
      context: "KIM LOẠI",
      question: "Ký hiệu hóa học của đồng là gì?",
      answers: ["Co", "Cu", "Cd", "Cr"],
      correct: 1,
      explain: "Đồng có ký hiệu Cu, bắt nguồn từ tên Latin Cuprum."
    },
    {
      icon: "🧴",
      context: "HÓA HỌC",
      question: "Ký hiệu hóa học của clo là gì?",
      answers: ["C", "Cl", "Co", "Ca"],
      correct: 1,
      explain: "Clo có ký hiệu Cl và được dùng trong một số quy trình khử trùng nước."
    },
    {
      icon: "🪙",
      context: "KIM LOẠI QUÝ",
      question: "Nguyên tố nào có số hiệu nguyên tử bằng 79?",
      answers: ["Ag — Bạc", "Au — Vàng", "Pt — Bạch kim", "Hg — Thủy ngân"],
      correct: 1,
      explain: "Vàng có số hiệu nguyên tử 79, tức mỗi nguyên tử vàng có 79 proton."
    },
    {
      icon: "🌡️",
      context: "TRẠNG THÁI VẬT CHẤT",
      question: "Kim loại nào ở trạng thái lỏng trong điều kiện phòng thông thường?",
      answers: ["Fe — Sắt", "Cu — Đồng", "Hg — Thủy ngân", "Al — Nhôm"],
      correct: 2,
      explain: "Thủy ngân là kim loại ở trạng thái lỏng trong điều kiện phòng thông thường."
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




    if (window.ghiNhanHuyHieu) window.ghiNhanHuyHieu("hoanThanh", diem);

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
    var tot = a.diemCao >= b.diemCao ? a : b;
    if (a.diemCao === b.diemCao && a.diemCaoLuc && b.diemCaoLuc) {
      tot = a.diemCaoLuc <= b.diemCaoLuc ? a : b;
    }
    ketQua.diemCao = tot.diemCao;
    ketQua.diemCaoLuc = tot.diemCaoLuc;
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
  window.ghiNhanHuyHieu = function (loai, giaTri) {
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
        if (d > trangThai.diemCao) {
          trangThai.diemCao = Math.min(d, 10);
          trangThai.diemCaoLuc = Date.now(); // để xếp hạng khi bằng điểm: ai đạt trước xếp trên
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

      li.appendChild(thuTu);
      li.appendChild(ten);
      li.appendChild(diem);
      ds.appendChild(li);
    });

    var coToi = top.some(function (h) { return h.uid === toi; });
    if (!toi) {
      ghiChu.textContent = "Đăng nhập và chơi đố vui để có tên trên bảng.";
    } else if (coToi) {
      ghiChu.textContent = "Bằng điểm thì ai đạt trước xếp trên.";
    } else {
      ghiChu.textContent = "Hoàn thành đố vui với điểm đủ cao để vào top 10. Bằng điểm thì ai đạt trước xếp trên.";
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