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
  tienNhanVien = 100000;

  tongLuong = tienNhanVien * ngayLam;

  document.getElementById("tongLuong").innerHTML =
    "Tổng tiền lương: " + tongLuong.toLocaleString();
}

/**BT2: Tinh gia tri trung binh.
 * Nhap vao 5 so thuc
 * Tong cua 5 so chia trung binh cho 5
 */

//Giai BT2

function tinhTrungBinh() {
  let tagSo1 = parseFloat(document.getElementById("so1").value);
  let tagSo2 = parseFloat(document.getElementById("so2").value);
  let tagSo3 = parseFloat(document.getElementById("so3").value);
  let tagSo4 = parseFloat(document.getElementById("so4").value);
  let tagSo5 = parseFloat(document.getElementById("so5").value);

  let tinhTrungBinh = 0;

  tinhTrungBinh = (tagSo1 + tagSo2 + tagSo3 + tagSo4 + tagSo5) / 5;

  document.getElementById("ketQua").innerHTML = tinhTrungBinh;
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
function tinhKetqua() {
  let tagChieuDai = parseInt(document.getElementById("chieuDai").value);
  let tagChieuRong = parseInt(document.getElementById("chieuRong").value);
  let chuVi = 0;
  let dienTich = 0;

  chuVi = (tagChieuDai + tagChieuRong) * 2;
  dienTich = tagChieuDai * tagChieuRong;
  document.getElementById("ketQuaHcn").innerHTML =
    "Chu vi: " + chuVi + "&ensp; Dien tich: " + dienTich;
}

/**BT5: Tinh tong 2 ky so.
 */

//Giai BT5

//input 2 ky so
function tinhTong2KySo() {
  let tagsoNhap = parseInt(document.getElementById("soNhap").value);
  let soHangChuc = Math.floor(tagsoNhap / 10);
  let soHangDV = tagsoNhap % 10;
  let tong2So = soHangChuc + soHangDV;

  document.getElementById("ketQua2KySo").innerHTML = tong2So;
}
