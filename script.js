function mostrar(seccion){
document.querySelectorAll(".tarjeta").forEach(t=>t.classList.add("oculto"))
document.getElementById(seccion).classList.remove("oculto")
if(window.innerWidth<=768){cerrarMenu()}
}

function toggleMenu(){
document.getElementById("menu").classList.toggle("activo")
}

function cerrarMenu(){
document.getElementById("menu").classList.remove("activo")
}

function buscarProducto(){
let input=document.getElementById("buscador").value.toLowerCase()
document.querySelectorAll(".producto").forEach(p=>{
let texto=p.dataset.nombre+" "+p.dataset.categoria
p.style.display=texto.includes(input)?"block":"none"
})
}

function filtrarCategoria(){
let cat=document.getElementById("categoria").value
document.querySelectorAll(".producto").forEach(p=>{
p.style.display=(cat==="todos"||p.dataset.categoria===cat)?"block":"none"
})
}