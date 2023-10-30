/*
Variable: Se refiere a que es suceptible a ser modificado (Variar), en programación una variable es un espacio en memoria que sirve para almacenar diferentes tipos de datos.

camelCase: (Sintaxis del camello)
Convención de nomenclatura en la que la primera letra de cada palabra de una frase se escribe en mayúsculas. Su nombre se da debido a su similitud de que las letras mayúsculas se asemejan a la joroba de un camello. 
- La convención hace que el código sea más fácil de leer y reduce la probabilidad de colisiones de nombres.

SnakeCase: Práctica de escribir palabras o frases compuestas en las que los elementos están separados por guiones bajos.

toFixed: El método toFixed() Formatea un número usando notación dfe punto fijo.

Concatenación: Proceso de combinar dos o más cadenas en una sola.
*/

var nombre;
document.write("Bienvenido ");
nombre = prompt("Ingrese su nombre: ");
document.write(nombre);

var valorEnDolar = 80;
var valorPesoMexicano = 18.09;
var conversor = valorEnDolar * valorPesoMexicano;

conversor = conversor.toFixed(2);
alert("Conversión de Dolar a Peso Mexicano $" + conversor);

/* Desafio 1: Agregar otros tipos de moneda.
Desafio 2: Agregar una variable que almacene el nombre de la persona que realiza la conversion.

función prompt: Se usa para mostrar un cuadro de diálogo con un mensaje que solicita al usuario que ingrese algún texto o información.*/

var bitcoin = 0.0000291422;
var conversor = valorEnDolar * bitcoin;

conversor = conversor.toFixed(9);

alert("Conversión de Dolar a Bitcoin $" + conversor);

var valorPesoColombiano = 4103.62;
var conversor = valorEnDolar * valorPesoColombiano;

conversor = conversor.toFixed(2);
alert("Conversión de Dolar a Peso Colombiano $" + conversor);

/* Desafio 3: Modificarlo para convertirlo en un Conversor de Temperatura. */
