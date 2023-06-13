const isVisible = (element) => window.scrollY + window.innerHeight > element.offsetTop // Er elementer over bunden af skærmen
const elements = document.getElementsByClassName('elem') // Alle .elem elementer

for (let element of elements) {
  if (isVisible(element)) { // Kan vi se elementet fra starten?
    element.classList.add('fade-in') // Fade in fra starten
  } else {
    window.addEventListener('scroll', () => { // Hver du du scroller tjekker vi lige igen
      if (isVisible(element)) {
        element.classList.add('fade-in')
      }
    })  
  }
}