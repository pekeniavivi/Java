// /**
//  * Tipos de números, booleano o número
//  */
// //Definiendo booleanos
// var miVariableBoolean = true
// var miVariableBoolean2 = false
// console.log("Imprimiendo booleans", miVariableBoolean,miVariableBoolean2)

// //Definiendo números
// var miNumero = -17
// var miNumero2 = 56
// var miNumerodecimal = 0.567
// console.log("Imprimiendo números", miNumero, miNumero2, miNumerodecimal)

// //Definiendo strings
// var miString1 = "Mi primer string"
// var miString2 = "Pueden contener 1, 2, 3"
// var miString3 = "2" //no se puede sumar porque es un string no un número
// console.log("Imprimiendo strings", miString1, miString2, miString3)

// var miNumero5 = Number(miString3)

// console.log("Suma:", 1 + 3)
// console.log("Restar:", 1 - 3)
// console.log("Multiplicar:", 9 + 3)
// console.log("Dividir:", 28 / 7)

// var suma = 5 + 5
// var mensajeParaelUsuario = "El resultado de la suma es: " + suma
// alert (mensajeParaelUsuario)

// var nombre = prompt ("Ingresa tu nombre")
// var edad = prompt("Ingresa tu edad")

// alert("Hola" + nombre + ", tienes " + edad + "años!")

// Crear un programa que consulte nombre, apellido, edad y le pregunte cuantos años màs quiere tener y que sume cuantos voy a tener

var Nombre = prompt ("Ingresa tu nombre")
var Apellido = prompt ("Ingresa tu apellido")
var Edad = prompt("Ingresa tu edad")
var Nuevaedad = prompt("Cuántos años más quisieras tener")
var Suma = Number(Edad) + Number(Nuevaedad)

alert("Hola " + " " + Nombre + Apellido + "entonces te gustaría tener:" + Suma + ".”)