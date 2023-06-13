const miniPhotos = document.querySelectorAll(".mini-photo")
const bigPhoto = document.querySelector(".img_big")

//Funktion ved klik på miniaturebillede i singleview
miniPhotos.forEach(el => el.addEventListener("click", function(){
    //Tilføjer fade på alle miniaturebilleder
    miniPhotos.forEach(el => el.classList.add("fade"))
    //Fjerner fade på det billede man har klikket på
    this.classList.remove("fade")
    //Ændrer det store billede til det billede man har klikket på
    bigPhoto.src = this.src
}));