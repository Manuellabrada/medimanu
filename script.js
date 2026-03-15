function mostrar(seccion){

document.querySelectorAll(".tarjeta").forEach(t=>{
t.classList.add("oculto")
})

document.getElementById(seccion).classList.remove("oculto")

}

function mostrarEmpresa(seccion){

document.querySelectorAll(".empresa-contenido").forEach(c=>{
c.classList.add("oculto")
})

document.getElementById(seccion).classList.remove("oculto")

}

let imagenes=[
"imagenes/publicidad1.jpg",
"imagenes/publicidad2.jpg",
"imagenes/publicidad3.jpg"
]

let indice=0

function cambiarImagen(direccion){

indice+=direccion

if(indice<0){
indice=imagenes.length-1
}

if(indice>=imagenes.length){
indice=0
}

document.getElementById("imagenPublicidad").src=imagenes[indice]

}

setInterval(()=>{

indice++

if(indice>=imagenes.length){
indice=0
}

document.getElementById("imagenPublicidad").src=imagenes[indice]

},4000)

function toggleMenu(){

document.getElementById("menu").classList.toggle("activo")

}