const menuButton = document.querySelector("button");
const menuElement = document.querySelector(".menu");
const header = document.querySelector("header");
let isMenuOpen = false;

//Funktion til at åbne menu
menuButton.addEventListener("click", showMenu);

function showMenu() {
  
  // Hvis menuen er lukket
  if (isMenuOpen) {
    // Ændrer tekst til menu
    menuButton.textContent = "MENU";
    // Hvis menuen ikke er åbnet
    isMenuOpen = false;
    // Ændring af baggrundsfarve
    header.style.backgroundColor = "rgba(242, 229, 213, 0)";
  
  // Hvis menuen er åben
  } else {
    // Ændrer tekst til luk
    menuButton.textContent = "LUK";
    // Hvis menuen er åbnet
    isMenuOpen = true;
     // Ændring af baggrundsfarve
    header.style.backgroundColor = "rgba(242, 229, 213, 0.95)";
  }

  menuElement.classList.toggle("menu_active");
}
