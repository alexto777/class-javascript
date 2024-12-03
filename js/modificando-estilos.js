//element.style.color = "red"
// element.style.fontSize = "15px"
// element.style.backgroundColor = "#FFFFFF"
let confirmarCambios = confirm("Quieres cambiar el color del título");

if (confirmarCambios) {
    let titulo = document.getElementById("title");
    titulo.innerHTML += ' Soy un contenido nuevo desde JS';
    titulo.style.color = 'chocolate';
    titulo.style.fontSize = '50px';
}
