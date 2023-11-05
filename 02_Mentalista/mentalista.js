var numeroSecreto = parseInt(Math.random() * 1000 + 1);

//alert(numeroSecreto);

while (numeroSecreto != numeroDigitado) {
  var numeroDigitado = prompt("Ingresa un número entre 1 y 1000");

  if (numeroDigitado == numeroSecreto) {
    alert("Acertaste");
  } else if (numeroSecreto > numeroDigitado) {
    alert(
      "No has acertado... El número secreto es mayor que el número digitado"
    );
  } else if (numeroSecreto < numeroDigitado) {
    alert(
      "No has acertado... El número secreto es menor que el número digitado"
    );
  }
}
/* ¡Desafíos de la clase!
Agregar un número de intentos para que la persona intente acertar e imprimir la respuesta al final;
Cuando la persona se equivoque, incluir el número que fue digitado en el mensaje de error e informar en el mensaje si el número digitado es mayor o menor que el número secreto;
Descubrir el número máximo que una persona lleva para adivinar un número correcto;
Investigar y aprender la diferencia entre == y ===.
*/
