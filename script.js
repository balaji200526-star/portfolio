const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Open and close mobile menu
menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// Close menu when any navigation link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});