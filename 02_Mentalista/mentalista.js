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
/* Desafio 1: El numero secreto es mayor o menor que el numero digitado (muestra el numero digitado), defina la cantidad de intentos para ingresar el numero secreto.
Desafio 2: muestra en pantalla la cantidad de intentos realizados.
Desafio 3: Numero de intentos necesarios para descubrir el numero secreto.
*/
