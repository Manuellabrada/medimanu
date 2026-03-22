function mostrar(seccion){

document.querySelectorAll(".tarjeta").forEach(t=>{
t.classList.add("oculto")
})

document.getElementById(seccion).classList.remove("oculto")

if(window.innerWidth <= 768){
cerrarMenu()
}

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

if(indice<0){indice=imagenes.length-1}
if(indice>=imagenes.length){indice=0}

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

let menu=document.getElementById("menu")
let contenido=document.getElementById("contenido")

menu.classList.toggle("activo")
contenido.classList.toggle("oculto")

}

function cerrarMenu(){

let menu=document.getElementById("menu")
let contenido=document.getElementById("contenido")

menu.classList.remove("activo")
contenido.classList.remove("oculto")

}

function buscarProducto(){

let input=document.getElementById("buscador").value.toLowerCase()
let productos=document.querySelectorAll(".producto")

productos.forEach(p=>{

let nombre=p.dataset.nombre

if(nombre.includes(input)){
p.style.display="block"
}else{
p.style.display="none"
}

})

}

function filtrarCategoria(){

let categoria=document.getElementById("categoria").value
let productos=document.querySelectorAll(".producto")

productos.forEach(p=>{

if(categoria==="todos"){
p.style.display="block"
}else if(p.dataset.categoria===categoria){
p.style.display="block"
}else{
p.style.display="none"
}

})

}

function enviarWhats(btn){

let producto=btn.parentElement.dataset.nombre
let numero="5568596062"

let mensaje=`Hola, me interesa el producto: ${producto}`

let url=`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

window.open(url,"_blank")

}

function agendarServicio(btn, servicio){

let card = btn.parentElement
let fecha = card.querySelector(".fecha-servicio").value

if(fecha===""){
alert("Selecciona una fecha")
return
}

let partes = fecha.split("-")
let seleccion = new Date(partes[0], partes[1]-1, partes[2])

let hoy = new Date()
let max = new Date()

max.setMonth(max.getMonth() + 3)

hoy.setHours(0,0,0,0)
seleccion.setHours(0,0,0,0)
max.setHours(0,0,0,0)

if(seleccion < hoy){
alert("No puedes seleccionar fechas pasadas")
return
}

if(seleccion > max){
alert("Solo puedes agendar hasta 3 meses adelante")
return
}

let dia = partes[2]
let mes = partes[1]
let anio = partes[0]

let fechaFormateada = `${dia}/${mes}/${anio}`

let numero = "5215568596062"

let mensaje = `Hola, deseo agendar una cita para ${servicio} el día ${fechaFormateada}`

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

window.open(url,"_blank")

}

function limitarFechas(){

let hoy = new Date()
let max = new Date()

max.setMonth(max.getMonth() + 3)

let hoyFormato = hoy.toISOString().split("T")[0]
let maxFormato = max.toISOString().split("T")[0]

document.querySelectorAll(".fecha-servicio").forEach(input=>{
input.min = hoyFormato
input.max = maxFormato
})

}

window.addEventListener("load", limitarFechas)