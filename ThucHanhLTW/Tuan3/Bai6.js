var date = document.getElementById("ngaySinh");
var cung = document.getElementById("Cung");

function Check() {
  const ngaySinh = new Date(date.value);
  const month = ngaySinh.getMonth();
  const day = ngaySinh.getDate();
  if (isNaN(ngaySinh.getTime())) {
    alert("Ngày tháng không hợp lệ!");
    date.focus();
    return;
  }

  if ((month === 2 && day >= 21) || (month === 3 && day <= 20)) {
    cung.value = "Bạch Dương";
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
    cung.value = "Kim Ngưu";
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) {
    cung.value = "Song Tử";
  } else if ((month === 5 && day >= 22) || (month === 6 && day <= 22)) {
    cung.value = "Cự Giải";
  } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
    cung.value = "Sư Tử";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    cung.value = "Xử Nữ";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    cung.value = "Thiên Bình";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    cung.value = "Bọ Cạp";
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
    cung.value = "Nhân Mã";
  } else if ((month === 11 && day >= 23) || (month === 0 && day <= 19)) {
    cung.value = "Ma Kết";
  } else if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
    cung.value = "Bảo Bình";
  } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
    cung.value = "Song Ngư";
  } else {
    alert("Bạn chưa nhập ngày sinh!");
    date.focus();
  }
}
function Xoa() {
  date.value = "";
  cung.value = "";
}
