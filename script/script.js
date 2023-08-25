const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("slide");
  nav.classList.toggle("slide");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menuToggle.classList.remove("slide");
    nav.classList.remove("slide");
  })
);
