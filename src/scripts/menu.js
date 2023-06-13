const menuButton = document.querySelector("button");
const menuElement = document.querySelector(".menu");
const header = document.querySelector("header");
const logoLight = document.querySelector(".logo");
const logoDark = document.querySelector(".logo--hide");
const linkDark = document.querySelector(".a_logo");
const instaIcon = document.querySelector(".instagram_icon");
const faceIcon = document.querySelector(".facebook_icon");
const instaDark = document.querySelector(".instagram_icon--hide");
const faceDark = document.querySelector(".facebook_icon--hide");
const pElements = document.querySelectorAll(".footer1 p");
const h3Element = document.querySelector(".footer1 h3");
let isMenuOpen = false;

menuButton.addEventListener("click", showMenu);

//Funktion til at åbne menu
function showMenu() {
  
  // Hvis menuen er lukket
  if (isMenuOpen) {  
    menuButton.textContent = "MENU";
    isMenuOpen = false;
    header.style.backgroundColor = "rgba(242, 229, 213, 0)";
    menuButton.style.color = "#f2e5d5";
    logoLight.style.display = "block";
    logoDark.style.display = "none";
    pElements.forEach((p) => {
      p.style.color = "#f2e5d5";
    });
    h3Element.style.color = "#f2e5d5";
    instaDark.style.display = "none";
    instaIcon.style.display = "block";
    faceDark.style.display = "none";
    faceIcon.style.display = "block";
    linkDark.classList.remove("logo_order");

     // Hvis menuen er åben
  } else {
    menuButton.textContent = "LUK";
    isMenuOpen = true;
    logoLight.style.display = "none";
    logoDark.style.display = "block";
    menuButton.style.color = "#3F352C";
    pElements.forEach((p) => {
      p.style.color = "#3F352C";
    });
    h3Element.style.color = "#3F352C";
    instaDark.style.display = "block";
    instaIcon.style.display = "none";
    faceDark.style.display = "block";
    faceIcon.style.display = "none";
    linkDark.classList.add("logo_order");
    header.style.backgroundColor = "rgba(242, 229, 213, 0.95)";
  }
  menuElement.classList.toggle("menu_active");
}
