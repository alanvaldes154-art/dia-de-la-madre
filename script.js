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
 
// ✅ FIX 1: declarar todas las referencias al DOM
const foto      = document.getElementById("foto");
const mensaje   = document.getElementById("mensaje");
const inicio    = document.getElementById("inicio");
const slideshow = document.getElementById("slideshow");
const finalSec  = document.getElementById("final");
 
// ✅ FIX 2: usar "indice" de forma consistente
let indice = 0;
 
function iniciar(){
 
    inicio.classList.add("oculto");
 
    slideshow.classList.remove("oculto");
 
    document.getElementById("musica").play();
 
    crearCorazones();
 
    mostrarSlides();
}
 
function mostrarSlides(){
 
    foto.style.opacity = 0;
 
    setTimeout(() => {
 
        // ✅ FIX 3: usar "indice" en lugar de "index"
        foto.src = fotos[indice];
 
        mensaje.innerText = mensajes[indice];
 
        foto.style.opacity = 1;
 
        indice++;
 
        if(indice >= fotos.length){
 
            slideshow.classList.add("oculto");
 
            finalSec.classList.remove("oculto");
 
            return;
        }
 
        setTimeout(mostrarSlides, 8000);
 
    }, 1000);
}
 
/* Corazones flotando */
 
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