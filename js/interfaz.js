var nuevoFiltro = document.getElementById('imagenEditable')

function aplicarOpacity() {
  console.log('click')
  // nuevoFiltro.className += " hola"
  // console.log(nuevoFiltro.className)
  // nuevoFiltro.className -= " hola"
  nuevoFiltro.classList.toggle("opacity");
}

function aplicarBlur() {
  nuevoFiltro.classList.toggle("blur")
}

function aplicarBn() {
  nuevoFiltro.classList.toggle("bn")
}

// Arrastrar texto

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
