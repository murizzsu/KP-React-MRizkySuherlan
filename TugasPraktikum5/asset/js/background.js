document.addEventListener("DOMContentLoaded", function() {
  var footer = document.querySelector("footer");
  if (footer) {
    footer.style.backgroundColor = "#343a40";
    footer.style.color = "white";
    footer.style.textAlign = "center";
    footer.style.padding = "2%";
  } else {
    console.error("Elemen footer tidak ditemukan.");
  }
});