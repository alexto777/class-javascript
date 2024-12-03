// Crear boton
// let buttonVerMas = document.createElement("button");
// let buttonText = document.createTextNode("Ver más 2");
// buttonVerMas.appendChild(buttonText);
// document.body.appendChild(buttonVerMas);

//Añadir peras a la lista
let node1 = document.createElement('li');
let peras = document.createTextNode('Peras');
node1.appendChild(peras);

//añadir manzanas a la lista
let node2 = document.createElement('li');
let manzanas = document.createTextNode('Manzanas');
node2.appendChild(manzanas);

//obtener la lista y agregar los nodos al ul
let listaFrutas = document.getElementById('listaFrutas');
listaFrutas.appendChild(node1);
listaFrutas.appendChild(node2);