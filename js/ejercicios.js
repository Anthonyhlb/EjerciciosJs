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