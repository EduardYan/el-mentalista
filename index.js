//numero secreto generado
const numeroSecreto = parseInt(Math.random() * 1000 + 1);

//tu nombre
const nombreUsuario = "Eduard";

var intentos = 0;
const limite = 10;
const numeroMaximo = 1000;

function validarNumero(data) {
  //expresiones para validar
  const esNumero = /^[0-9]+$/;
  const esString = /^[A-Za-z]+$/;

  if (esNumero.test(data)) {
    return "number";
  } else if (esString.test(data)) {
    return "string";
  } else {
    return "string";
  }
}

//loop
while (numeroSecreto != numeroIngresado) {
  if (intentos > limite) {
    alert("Perdistes superastes el limite :(");
  } else {
    if (intentos != 0) {
      var numeroIngresado = prompt(
        "Hola " +
          nombreUsuario +
          " ingresa un número entre 1 y 1,000 has intentado (" +
          intentos +
          ") veces te quedan " +
          (limite - intentos) +
          " veces"
      );
    } else {
      var numeroIngresado = prompt(
        "Hola " +
          nombreUsuario +
          " ingresa un número entre 1 y 1,000 has intentado (" +
          intentos +
          ") veces te quedan " +
          limite +
          " veces"
      );
    }

    if (validarNumero(numeroIngresado) != "number") {
      alert("Ingresa un valor numérico");
    } else {
      if (numeroIngresado > numeroMaximo) {
        alert("El número ingresado supera al permitido (" + numeroMaximo + ")");
      } else {
        if (numeroIngresado == numeroSecreto) {
          alert("Felicidades " + nombreUsuario + " acertastes");
        } else if (numeroIngresado > numeroSecreto) {
          alert(`El número secreto es menor que ${numeroIngresado}`);
        } else if (numeroIngresado < numeroSecreto) {
          alert(`El número secreto es mayor que ${numeroIngresado}`);
        }

        //aumentando la cantidad de intentos
        intentos++;
      }
    }
  }
}
