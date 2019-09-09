const overlay = document.querySelector(".overlay-menu");
const knapp = document.querySelector("#knapp");

knapp.onclick = () => {
  overlay.classList.toggle("visible");
  knapp.classList.toggle("visible");
}
