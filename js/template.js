const titulo = `<h2>Template String</h2>`;

const h1 = document.getElementById('title');

// h1.innerText = titulo;
h1.innerHTML = titulo;

// body

const parrafo = `<span>La infomación de mi parrafo</span>`;

const miTemplate = document.getElementById('body');

miTemplate.innerHTML = parrafo;
