/**BT1: Tinh Tien luong nhan vien.
 * Luong 1 ngay:100.000
 * Cho nguoi dung nhap vao so ngay lam
 * Cong thuc tinh luong: Luong 1 ngay * so ngay lam
 */

//Giai BT1

//input: Luong 1 ngay va so ngay lam
function tinhTienLuong() {
  let tienNhanVien = document.getElementById("luongOneDay").value;
  let ngayLam = document.getElementById("soNgayLam").value;

  let tongLuong = 0;

  tongLuong = tienNhanVien * ngayLam;

  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
}

/**BT3: Tinh va xuat ra so tien sau quy doi VND.
 * Gia USD : 23.000VND
 * Viet chuong trinh quy doi USD sang VND
 */

//Giai BT3

function tongTienVnd(price, symbol = "$") {
  const tagTienVnd = 23000;
  let tagTienUsd = document.getElementById("tienUsd").value;
  let quyDoiUsd = 0;

  quyDoiUsd = tagTienUsd * tagTienVnd;

  document.getElementById("menhGia").innerHTML = quyDoiUsd.toLocaleString();
}

/**BT4: Tinh chu vi, dien tich hinh chu nhat.
 */

//Giai BT4

//input chieu dai va chieu rong
function tinhChuVi() {
  let tagChieuDai = parseInt(document.getElementById("chieuDai").value);
  let tagChieuRong = parseInt(document.getElementById("chieuRong").value);
  let chuVi = 0;

  chuVi = (tagChieuDai + tagChieuRong) * 2;
  document.getElementById("chuVi").innerHTML = chuVi;
}

function tinhDienTich() {
  let tagChieuDai = parseInt(document.getElementById("chieuDai").value);
  let tagChieuRong = parseInt(document.getElementById("chieuRong").value);
  let dienTich = 0;

  dienTich = tagChieuDai * tagChieuRong;

  document.getElementById("dienTich").innerHTML = dienTich;
}
