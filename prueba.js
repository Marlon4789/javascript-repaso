// para celeccionar etiqueta html
const h1 = document.querySelector('h1');

// seleccionar clase
const parrafo = document.querySelector('.parrafo');

// seleccionar id
const texto = document.querySelector('#texto');

// input
const input = document.querySelector('input');

console.log({
    h1,
    parrafo,
    texto,
    input,
})

// Modificando html.
h1.innerHTML = 'cambie <br> el titulo';

// Moficando texto
h1.innerText = 'cambie el texto con innerText';

// Acceder a un atributo de una etiqueta html.
h1.getAttribute('pantalla');

// Modificar el atributo.
h1.setAttribute('pantalla', 'phone_apple');

// Añadir una clase.
h1.classList.add('color');
h1.classList.add('verde');

// Eliminar un elemento de la clase.
h1.classList.remove('color');

// quitar y poner una clase
// h1.classList.toggle('verde');

// Condicional true o false para saber si si tiene una calase o no.
//h1.classList.contains('verde');

// Modificar el value, placeholder de un input
//input.value = "Escribir";
input.placeholder="crear placeholder";

// Crear un elemento html
const img = document.createElement('img');

img.setAttribute('src', 'https://lumiere-a.akamaihd.net/v1/images/cars80-1200x801_7b6d9330.jpeg?region=0,93,1200,676&width=960');
console.log(img);

// width y height
img.width = 320;

// para reemplazar todo lo que haya en la etiqueta html.
parrafo.replaceWith(img);

// Para meter la imagen en una etiqueta de html.

//parrafo.innerHTML = ""; // para eliminar el parrafo

//parrafo.append(img); // para añadir la imagen.

// probando insertar una imagen sin etiqueta en html.
// const img2 = document.createElement('img');

// // Establecer el atributo src con la URL de la imagen
// img2.setAttribute('src', 'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg');

// // Puedes establecer otras propiedades, como width y height, si es necesario
// img2.width = 320;

// // Agregar la imagen al documento, por ejemplo, al cuerpo del documento (body)
// document.body.appendChild(img2);

/* ****** EJEMPLO USANDO FLEX-BOX ********** */

// Crear las etiquetas img con los nombres img1 e img2
const img1 = document.createElement('img');
img1.setAttribute('src', 'https://lumiere-a.akamaihd.net/v1/images/cars80-1200x801_7b6d9330.jpeg?region=0,93,1200,676&width=960');
img1.width = 320;

const img2 = document.createElement('img');
img2.setAttribute('src', 'https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg'); // Reemplaza la URL con la segunda imagen
img2.width = 320;

// Crear un contenedor div
const container = document.createElement('div');

// Aplicar estilos flexbox al contenedor para mostrar las imágenes en columnas
container.style.display = 'flex';
container.style.flexDirection = 'column'; // Esto establece la dirección principal como columna

// Agregar las imágenes al contenedor
container.appendChild(img1);
container.appendChild(img2);

// Agregar el contenedor al cuerpo del documento (body)
document.body.appendChild(container);

