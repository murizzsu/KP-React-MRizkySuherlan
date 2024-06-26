document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var emailInput = document.getElementById("email");
    var teleponInput = document.getElementById("telepon");
  
    form.addEventListener("submit", function (event) {
      // Validasi email dan telepon
      if (!isValidEmail(emailInput.value) || !isValidTelepon(teleponInput.value)) {
        if (!isValidEmail(emailInput.value)) {
          alert("Format email tidak valid!");
        }
        if (!isValidTelepon(teleponInput.value)) {
          alert("Format no telepon tidak valid! Harus berupa angka minimal 12 digit.");
        }
        event.preventDefault(); // Menghentikan pengiriman form jika tidak valid
        return;
      }
  
      // Jika validasi berhasil, tampilkan pesan bahwa pesan berhasil dikirim
      alert("Pesan berhasil dikirim!");
      form.reset(); // Mengosongkan form
  
      // Kembali ke halaman utama
      window.location.href = "/";
    });
  
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  
    function isValidTelepon(telepon) {
      return /^\d{12,}$/.test(telepon);
    }
  });
  