let switchBox = document.querySelector(".switch");
let bodyColor = document.querySelector("body");
let lightTheme = true;
window.addEventListener("load", () => {
  let themeLoading = localStorage.getItem("mode");
  console.log(themeLoading);
  if (themeLoading === "light") {
    lightMode();
  } else if (themeLoading === "dark") {
    darkMode();
  }
});

switchBox.addEventListener("click", () => {
  if (lightTheme) {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  lightTheme = false;
  localStorage.setItem("mode", "dark");
  bodyColor.classList.add("dark");
}
function lightMode() {
  lightTheme = true;
  localStorage.setItem("mode", "light");
  bodyColor.classList.remove("dark");
}
