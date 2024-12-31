const modal = document.querySelector(".modal");
const projectLinks = document.querySelectorAll(".proj-links");
const modalProjects = document.querySelectorAll(".modal-project");
const modalButton = document.querySelector("#modal-button");

// blog-app, recipe-app, learning-log, marketplace
// proj-links

// Function to show modal
const showModal = () => {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector("body").style.overflow = "hidden";
};

// Function to hide modal
const hideModal = () => {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.querySelector("body").style.overflow = "auto";
};

// Click event handler for project links
const handleProjClick = (e) => {
  e.preventDefault();
  const name = e.currentTarget.dataset.name;
  modalProjects.forEach((proj) => {
    if (proj.dataset.name === name) {
      proj.classList.remove("hidden");
      proj.setAttribute("aria-hidden", "false");
      showModal();
    }
  });
};

// Click event handler for modal close button
const handleCloseModalClick = (e) => {
  e.preventDefault();
  hideModal();
  modalProjects.forEach((project) => {
    project.setAttribute("aria-hidden", "true");
    if (!project.classList.contains("hidden")) {
      project.classList.add("hidden");
    }
  });
};

// Click event handler for modal
const handleModalClick = (e) => {
  if (e.target === modal) {
    hideModal();
    modalProjects.forEach((project) => {
      project.setAttribute("aria-hidden", "true");
      if (!project.classList.contains("hidden")) {
        project.classList.add("hidden");
      }
    });
  }
};

// Event handler for the escape key
const handleEscapeKey = (e) => {
  if (modal.classList.contains("hidden")) return;
  if (e.key === "Escape") {
    hideModal();
    modalProjects.forEach((project) => {
      project.setAttribute("aria-hidden", "true");
      if (!project.classList.contains("hidden")) {
        project.classList.add("hidden");
      }
    });
  }
};

window.addEventListener("DOMContentLoaded", () => {
  projectLinks.forEach((link) => {
    link.addEventListener("click", handleProjClick);
  });

  modalButton.addEventListener("click", handleCloseModalClick);

  modal.addEventListener("click", handleModalClick);

  document.addEventListener("keydown", handleEscapeKey);
});
