const hamburger = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const buttons = document.querySelectorAll(".dropdown-button");

// Ensure DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".dropdown-button");

  // Debug: Log the buttons to ensure they are being selected
  console.log(buttons);

  // Check if buttons were found
  if (buttons.length === 0) {
    console.error("No dropdown buttons found.");
  }
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const dropdownContent = button.nextElementSibling;
      dropdownContent.classList.toggle("showDropdown");
    });
  });
});
