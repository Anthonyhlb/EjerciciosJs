// Ejercicio numero uno
alert("Un mensaje");
// Ejercicio numero dos
document.write("Hola mundo");
// Ejercicio numero tres
let numero1= 3; let numero2= 5; document.write("<br>"+(numero1+numero2))
// Ejercicio numero cuatro
let nombre = prompt("Hola nombreUsuario")
// Ejercicio numero cinco
let numero3 = prompt("Escribe un número");
let numero4 = prompt("Escribe otro número");
document.write("<br>" + " La suma es: "+ ( parseInt(numero3)+ parseInt(numero4) ) );
// Ejercicio numero seis
let numero5 = prompt("Escribe un número");
let numero6 = prompt("Escribe otro número");
if (numero5 < numero6) {
document.write("<br>"+(parseInt(numero5)));
} else {
document.write("<br>"+(parseInt(numero6)));
}
// Ejercicio numero siete
let numero7 = prompt("Escribe un número");
let numero8 = prompt("Escribe otro número");
let numero9 = prompt("Escribe otro número");
if (numero7 > numero8 && numero7 > numero9) {
document.write("<br>"+(parseInt(numero7)));
} else if (numero8 > numero9) {
document.write("<br>"+(parseInt(numero8)));
} else {
document.write("<br>"+(parseInt(numero9)));
}
// Ejercicio numero ocho
let numero10 = prompt("Escribe un número");
if (numero10 % 2 === 0) {
document.write("<br>"+("Es divisible por 2"));
} else {
document.write("<br>"+("No es divisible por 2"));
}
// Ejercicio numero nueve
let text = prompt("Escribe una frase");
let nText = text.length;
let i;
for (i = 0; i < nText; i++) {
if (text.substr(i,1) === "a" || text.substr(i,1) === "e" || text.substr(i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
document.write("<br>"+(text.substr(i,1)));
}
}
// Ejercicio numero diez
let numero11 = prompt("Escribe un número");
if (numero11 % 2 === 0 || numero11 % 3 === 0 || numero11 % 5 === 0 || numero11 % 7 === 0) {
document.write("<br>"+("Es divisible por 2, 3, 5 o 7"));
} else {
document.write("<br>"+("No es divisible ni por 2, ni por 3, ni por 5, ni por 7"));
}
// Ejercicio numero once
let numero12 = prompt("Escribe un número");
if (numero12 % 2 === 0 || numero12 % 3 === 0 || numero12 % 5 === 0 || numero12 % 7 === 0) {
if (numero12 % 2 === 0) {
document.write("<br>"+("Es divisible por 2. "));
}
if (numero12 % 3 === 0) {
document.write("<br>"+("Es divisible por 3. "));
}
if (numero12 % 5 === 0) {
document.write("<br>"+("Es divisible por 5. "));
}
if (numero12 % 7 === 0) {
document.write("<br>"+("Es divisible por 7. "));
}
} else {
document.write("<br>"+("No es divisible ni por 2, ni por 3, ni por 5, ni por 7"));
}