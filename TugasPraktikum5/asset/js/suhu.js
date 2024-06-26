function konversiSuhu() {
  // Ambil nilai suhu dari input
  var inputFahrenheit = document.getElementById("inputFahrenheit").value;

  // Lakukan perhitungan konversi
  var suhuCelcius = ((inputFahrenheit - 32) * 5) / 9;

  // Tampilkan hasil konversi
  document.getElementById("hasilCelcius").innerHTML =
    suhuCelcius.toFixed(2) + " °C";
}

function resetForm() {
  // Reset input Fahrenheit
  document.getElementById("inputFahrenheit").value = "";

  // Reset hasil konversi
  document.getElementById("hasilCelcius").innerText = "";
}
