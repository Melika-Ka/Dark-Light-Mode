const switchElement = document.querySelector(".switch");
let flicker = document.querySelector(".flicker");
let isLightMode = true;
let bodyColor = document.querySelector("body");
window.addEventListener("load", function () {
  let getTheme = this.localStorage.getItem("theme");
  console.log(getTheme);
  if (getTheme === "dark") {
    darkMode();
  } else {
    lightMode();
  }
});
switchElement.addEventListener("click", function () {
  if (isLightMode) {
    darkMode();
  } else {
    lightMode();
  }
});
function darkMode() {
  isLightMode = false;
  localStorage.setItem("theme", "dark");
  // flicker.style.right = "1px";
  bodyColor.classList.add("dark");
}
function lightMode() {
  isLightMode = true;
  localStorage.setItem("theme", "light");
  // flicker.style.left = "5px";
  bodyColor.classList.remove("dark");
}
