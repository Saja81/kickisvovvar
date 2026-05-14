console.log("Vovvar site startad");

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const check = document.getElementById("costCheck");
  const button = document.getElementById("submitBtn");

  if (check && button) {
    check.addEventListener("change", function () {
      button.disabled = !this.checked;
    });
  }
});
