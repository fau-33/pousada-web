// Menu mobile toggle
const menuToggle = document.querySelector(".menu-toggle");
const containerLinks = document.querySelector(".container-links");

menuToggle.addEventListener("click", () => {
  containerLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Fechar menu ao clicar em um link (mobile)
const links = document.querySelectorAll(".link-topo");
links.forEach((link) => {
  link.addEventListener("click", () => {
    containerLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// Acessibilidade via teclado
menuToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    containerLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  }
});
