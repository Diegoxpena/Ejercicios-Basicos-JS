//Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5//

document.write(3+5)

//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

var nombre = prompt("Diego");
document.write("Hola "+Diego);

//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

var n1 = prompt("3");
var n2 = prompt("3");
document.write("La suma es: "+ ( parseInt(n1)+ parseInt(n2) ) );

// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

var n1 = prompt("6");
var n2 = prompt("6");
if (n1 > n2) {
document.write(n1);
} else {
document.write(n2);
}

// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
var n1 = prompt("5");
var n2 = prompt("7");
var n3 = prompt("9");
if (n1 > n2 && n1 > n3) {
document.write(n1);
} else if (n2 > n3) {
document.write(n2);
} else {
document.write(n3);
}

//Escribe un programa que pida un número y diga si es divisible por 2
var n1 = prompt("4");
if (n1 % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");






