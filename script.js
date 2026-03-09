function mostrar(seccion){

let secciones = document.querySelectorAll("section");

secciones.forEach(sec=>{
sec.classList.add("oculto");
});

document.getElementById(seccion).classList.remove("oculto");

}