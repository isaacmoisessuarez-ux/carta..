// Función para cambiar de pantalla
function nextScreen(num) {
  const current = document.querySelector(".screen.active");
  if (current) current.classList.remove("active");
  document.getElementById("screen" + num).classList.add("active");

  // Activa la música al hacer click
  activarMusica();
}

// Generador de corazones flotantes
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("heart");
  corazon.innerHTML = "❤️";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = Math.random() * 20 + 15 + "px";
  corazon.style.animationDuration = Math.random() * 3 + 4 + "s";
  
  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}

// Intervalo de caída de corazones
setInterval(crearCorazon, 300);

// Control de audio (Inicia en el segundo 0)
const audio = document.getElementById("musica");
let musicaIniciada = false;

function activarMusica() {
  if (!musicaIniciada) {
    audio.currentTime = 3;
    audio.play().catch(error => console.log("El navegador bloqueó el autoplay: ", error));
    musicaIniciada = true;
  }
}
