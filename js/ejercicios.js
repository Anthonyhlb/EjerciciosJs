// Ejercicio numero uno
alert("Un mensaje");
// Ejercicio numero dos
document.write("Hola mundo");
// Ejercicio numero tres
let numero1= 3; let numero2= 5; document.write("<br>"+(numero1+numero2))
// Ejercicio numero cuatro
let nombre = prompt("Hola nombreUsuario")
// Ejercicio numero cinco
var numero3 = prompt("Escribe un número");
var numero4 = prompt("Escribe otro número");
document.write("<br>" + " La suma es: "+ ( parseInt(numero3)+ parseInt(numero4) ) );
// Ejercicio numero seis
var numero5 = prompt("Escribe un número");
var numero6 = prompt("Escribe otro número");
if (numero5 < numero6) {
document.write("<br>"+(parseInt(numero5)));
} else {
document.write("<br>"+(parseInt(numero6)));
}
// Ejercicio numero siete
var numero7 = prompt("Escribe un número");
var numero8 = prompt("Escribe otro número");
var numero9 = prompt("Escribe otro número");
if (numero7 > numero8 && numero7 > numero9) {
document.write("<br>"+(parseInt(numero7)));
} else if (numero8 > numero9) {
document.write("<br>"+(parseInt(numero8)));
} else {
document.write("<br>"+(parseInt(numero9)));
}