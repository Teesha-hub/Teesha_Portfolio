// Scroll-to-Top Button
const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
});
scrollBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// Email Validation
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
emailInput.addEventListener("input", () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.textContent =
    pattern.test(emailInput.value) || emailInput.value === ""
      ? ""
      : "Please enter a valid email address.";
});

// Hamburger Sidebar Toggle & Close on Nav Click (Mobile)
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navLinkItems = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav on link click (mobile)
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      navLinks.classList.remove("open");
    }
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinksEls = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinksEls.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
