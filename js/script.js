//Phrallax
let scene = document.getElementById("scene")
var text = document.getElementById("text")
let parallaxInstanceScene = new Parallax(scene)
let parallaxInstanceText = new Parallax(text)

//Layer
let imagenes = document.getElementsByClassName('layer')
function randomImagePosition() {
  let containerWidth = scene.offsetWidth;
  let containerHeight = scene.offsetHeight;
  let imageWidth = imagenes[0].offsetWidth;
  let imageHeight = imagenes[0].offsetHeight;
  let positions = [];

  Array.from(imagenes).forEach((imagen) => {
    let overlapping = true;
    let randomTop, randomLeft;

    while (overlapping) {
      randomTop = Math.floor(Math.random() * (containerHeight - imageHeight));
      randomLeft = Math.floor(Math.random() * (containerWidth - imageWidth));
      let newPos = { top: randomTop, left: randomLeft };

      overlapping = positions.some((pos) => {
        return (
          newPos.top < pos.top + imageHeight &&
          newPos.top + imageHeight > pos.top &&
          newPos.left < pos.left + imageWidth &&
          newPos.left + imageWidth > pos.left
        );
      });
    }

    imagen.style.top = randomTop + "px";
    imagen.style.left = randomLeft + "px";
    positions.push({ top: randomTop, left: randomLeft });
  });
}
window.addEventListener('load', randomImagePosition())

//Ponderacion
let toggle = document.querySelector(".toggle")
var criterios = document.querySelectorAll(".criterios .criterio")
let container = document.querySelector(".container-toggle")
criterios.forEach((criterio)=>{
    criterio.onclick = function (){
        criterio.classList.toggle("activa")
    }
})
toggle.onclick = function () {
    container.classList.toggle("active")
}

