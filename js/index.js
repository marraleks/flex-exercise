const overlay = document.querySelector(".overlay-menu");
const knapp = document.querySelector("#knapp");
const tilbake = document.querySelector("#tilbake");



knapp.onclick = () => {
  overlay.classList.toggle("visible");
  knapp.classList.toggle("visible");
  tilbake.classList.toggle("visible");

}

