const toggleButton = document.querySelectorAll(".toggle-button");
const form = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-button");
const loader = document.querySelector("#loader");
const closeButton = document.querySelector("#button");
const successMessage = document.querySelector("#success-message-container");
const messageDisplay = document.querySelector("#display-message");

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

// Function to hide submit button and show loader
const hideButton = () => {
  submitButton.classList.add("hidden");
  loader.classList.remove("hidden");
};

// Function to show submit button and hide loader
const showButton = () => {
  submitButton.classList.remove("hidden");
  loader.classList.add("hidden");
};

// Function to show success message
const showSuccessMessage = () => {
  successMessage.classList.add("success-show");
};

// Function to hide success message
const hideSuccessMessage = () => {
  successMessage.classList.remove("success-show");
};

// Function to add message dynamically
const showMessage = (message) => {
  messageDisplay.textContent = message;
};

window.addEventListener("DOMContentLoaded", () => {
  toggleButton.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    hideButton();
    emailjs.sendForm("service_dx29s1o", "contact_form", e.target).then(
      () => {
        console.log("SUCCESS!");
        e.target.reset();
        showButton();
        showMessage("Message sent successfully");
        showSuccessMessage();
      },
      (error) => {
        console.log("Failed...", error);
        showButton();
        showMessage("Something went wrong!");
        showSuccessMessage();
      }
    );
  });

  closeButton.addEventListener("click", hideSuccessMessage);
});
