// variables
let light = document.querySelector("#light-button");
let dark = document.querySelector("#dark-button");
let body = document.querySelector("body");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let toggle_header = document.querySelector("#toggle-header");

// local storage check for dark mode
let dark_mode_status = JSON.parse(localStorage.getItem("darkMode")) || false;
if (dark_mode_status) {
  dark_mode();
}

// event listeners
light.addEventListener("click", light_mode);
dark.addEventListener("click", dark_mode);

// functions
function light_mode() {
  body.classList.remove("dark-mode");
//   toggle_header.textContent = "Dark Mode";
  dark_mode_status = false;
  localStorage.setItem("darkMode", JSON.stringify(dark_mode_status));
}

function dark_mode() {
  body.classList.add("dark-mode");
//   toggle_header.textContent = "Light Mode";
  dark_mode_status = true;
  localStorage.setItem("darkMode", JSON.stringify(dark_mode_status));
}
