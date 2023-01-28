//Toggler Button
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarItems = document.getElementsByClassName("nav-items")[0];

toggleButton.addEventListener("click", () => {
  navbarItems.classList.toggle("active");
});
