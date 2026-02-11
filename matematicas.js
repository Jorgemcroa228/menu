let menu = parseFloat(prompt("Elige \n 1 : para realizar una suma. \n 2 : para hacer una multiplicacion."));

if(menu === 1) {
  let number1 = parseFloat(prompt("ingresa el primer numero :"));
  let number2 = parseFloat(prompt("ingresa el segundo numero :"));
  let result = prompt("La suma de " + number1 + " y " + number2 + " es de : " + (number1 + number2));
} else if (menu === 2) {
  let number1 = parseFloat(prompt("ingresa el primer numero :"));
  let number2 = parseFloat(prompt("ingresa el segundo numero :"));
  let result = prompt("La multiplicacion de " + number1 + " y " + number2 + " es de : " + (number1 * number2));
} else {
  alert("solo puede seleccionar 1 y 2.")
}
