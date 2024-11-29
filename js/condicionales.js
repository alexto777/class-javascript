// If -else

// if (condicion) {
//     //Código
// } else if (otra-condicion){

// }else {
//     //Código
// }

// Aplicación para verficar si el usuario puede tomar un pase de conducir

// const edad = parseInt(prompt("Por favor ingrese su edad con numeros (1-100) : "));

// if (edad >=18 && edad <=100) {
//     console.log("Puede sacar su permiso de conducir");
// } else if (edad <18 && edad >=16){
//     console.log("Puede sacar el permiso con autorización de su acudiente")
// } else if (edad < 16 && edad >= 1) {
//     console.log("Es menor de edad para sacr el permiso de conducir")
// } else if (isNaN(edad) || edad< 0) {
//     console.log("Ingresa una edad válida")
// }
// else{
//     console.log("No cumple con la edad para el permiso de conducir");
// }


// Programa para saber si un numero es posito o negativo
// confirm("Programa para saber si un numero es posito o negativo")
// let numero = parseInt(prompt("Ingrese un numero"));
// if (numero >0) {
//     console.log("El número es positivo")
// } else if (numero <0) {
//     console.log("El número es negativo")
// } else if (numero === 0) {
//     console.log("El número es cero")
// } else {
//     console.log("Ingrese un número valido")
// }


//Aprobo el curso

const calificacion = parseFloat(prompt("Ingresa tu calificación (0-5)"));

if (calificacion >= 3 && calificacion <=5) {
    console.log("Aprobaste el curso de Frontend")
} else if (calificacion <3 && calificacion >=0) {
    console.log ("No aprobaste el curso")
} else {
    console.log("El valor ingresado no es válido")
}