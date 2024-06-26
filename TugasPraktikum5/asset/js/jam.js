function updateJam() {
  var now = new Date();
  var jam = now.getHours();
  var menit = now.getMinutes();
  var detik = now.getSeconds();

  // Format waktu
  var formattedTime = `${padNumber(now.getDate())}/${padNumber(
    now.getMonth() + 1
  )}/${now.getFullYear()} ${padNumber(jam)}:${padNumber(menit)}:${padNumber(
    detik
  )}`;

  document.getElementById("jamSekarang").innerText = formattedTime;
}

function padNumber(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

// Panggil fungsi updateJam setiap detik
setInterval(updateJam, 1000);

// Panggil fungsi updateJam pada saat halaman dimuat
document.addEventListener("DOMContentLoaded", updateJam);
