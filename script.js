const fotos = [

    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg",
    "fotos/foto4.jpg",
    "fotos/foto5.jpg",
    "fotos/foto6.jpg",
    "fotos/foto7.jpg",
    "fotos/foto8.jpg",
    "fotos/foto9.jpg",
    "fotos/foto10.jpg",
    "fotos/foto11.jpg"

];

const mensajes = [

    "Gracias por cuidarme ❤️",
    "Siempre estuviste conmigo ❤️",
    "Tu amor vale muchísimo ❤️",
    "Gracias por nunca rendirte ❤️",
    "Tus abrazos siempre me ayudaron ❤️",
    "Eres mi inspiración ❤️",
    "Gracias por cada consejo ❤️",
    "Gracias por todo tu esfuerzo ❤️",
    "Nunca dejaré de admirarte ❤️",
    "Eres la mejor mamá ❤️",
    "Te amo muchísimo ❤️"

];

const foto      = document.getElementById("foto");
const mensaje   = document.getElementById("mensaje");
const inicio    = document.getElementById("inicio");
const slideshow = document.getElementById("slideshow");
const finalSec  = document.getElementById("final");
const btn       = document.getElementById("btnComenzar");
const cuenta    = document.getElementById("cuentaRegresiva");

let indice = 0;

/* ── Cuenta regresiva al cargar ── */
let segundos = 10;

btn.disabled = true;
btn.style.opacity = "0.4";
btn.style.cursor  = "not-allowed";

const timer = setInterval(() => {

    segundos--;

    cuenta.innerText = segundos > 0 ? segundos : "";

    if(segundos <= 0){

        clearInterval(timer);

        btn.disabled = false;
        btn.style.opacity  = "1";
        btn.style.cursor   = "pointer";
        btn.style.animation = "aparecer 0.5s ease";

    }

}, 1000);

/* ── Iniciar slideshow ── */
function iniciar(){

    inicio.classList.add("oculto");

    slideshow.classList.remove("oculto");

    document.getElementById("musica").play();

    crearCorazones();

    mostrarSlides();
}

/* ── Mostrar fotos ── */
function mostrarSlides(){

    // Si ya no hay más fotos → mostrar final
    if(indice >= fotos.length){

        slideshow.classList.add("oculto");

        finalSec.classList.remove("oculto");

        return;
    }

    // Fade out
    foto.style.opacity = 0;

    setTimeout(() => {

        // ✅ Reiniciar animación zoom
        foto.style.animation = "none";
        foto.offsetHeight; // forzar reflow
        foto.style.animation = "zoom 8s linear forwards";

        // Cargar foto y mensaje del indice actual
        foto.src = fotos[indice];

        mensaje.innerText = mensajes[indice];

        // Fade in
        foto.style.opacity = 1;

        // Avanzar indice DESPUÉS de mostrar
        indice++;

        // Siguiente foto en 8 segundos
        setTimeout(mostrarSlides, 8000);

    }, 1000);
}

/* ── Corazones flotando ── */
function crearCorazones(){

    setInterval(()=>{

        const corazon = document.createElement("div");

        corazon.classList.add("corazon");

        corazon.innerHTML = "❤️";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.fontSize =
            Math.random() * 30 + 20 + "px";

        corazon.style.animationDuration =
            Math.random() * 5 + 5 + "s";

        document
            .getElementById("particulas")
            .appendChild(corazon);

        setTimeout(()=>{

            corazon.remove();

        }, 10000);

    }, 500);
}

window.addEventListener("click", () => {

    document.getElementById("musica").play();

}, { once: true });