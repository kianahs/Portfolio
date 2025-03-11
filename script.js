
document.addEventListener("DOMContentLoaded", function () {
  // Select all navigation links and sections
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".section");

  // Show only the first section on load
  sections[0].classList.add("active");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target section ID from the href attribute
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Hide all sections
        sections.forEach((section) => section.classList.remove("active"));

        // Show the clicked section
        targetSection.classList.add("active");
      }
    });
  });
});

