const toggleButton = document.querySelectorAll(".toggle-button");

// Event handler for clicking the toggle buttons
const handleClick = (e) => {
  const target = e.currentTarget;
  const span = target.querySelectorAll("span");
  span.forEach((sp) => {
    sp.classList.toggle("hidden");
  });
  const parent = target.parentElement;
  const sibling = parent.nextElementSibling;
  sibling.classList.toggle("hidden");
  if (sibling.getAttribute("aria-hidden") === "true") {
    sibling.setAttribute("aria-hidden", "false");
  }
};

window.addEventListener("DOMContentLoaded", () => {
  toggleButton.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
});
