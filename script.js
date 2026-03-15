function mostrar(seccion){

let secciones=document.querySelectorAll("section");

secciones.forEach(sec=>{
sec.classList.add("oculto");
});

document.getElementById(seccion).classList.remove("oculto");

if(window.innerWidth<900){
document.querySelector(".menu").classList.remove("activo");
}

}

document.addEventListener("DOMContentLoaded",()=>{

const boton=document.createElement("div");
boton.innerHTML="☰";
boton.classList.add("hamburguesa");

document.body.appendChild(boton);

boton.addEventListener("click",()=>{
document.querySelector(".menu").classList.toggle("activo");
});

});