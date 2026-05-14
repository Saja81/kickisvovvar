const check = document.getElementById("costCheck");
const button = document.getElementById("submitBtn");

check.addEventListener("change", function () {
  button.disabled = !this.checked;
});

console.log("Vovvar site startad");

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

const form = document.getElementById("interestForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stoppar "riktig" submit
    window.location.href = "bekraftelse.html";
  });
}
