

function suma() {
  let num = prompt("opracion :" + "suma" + "-" + "Digite el numero ");
  result += +num;
  alert("La " + operation + "es igual a :" + result);
}

function resta() {
  let num = prompt("opracion :" + "resta" + "-" + "Digite el numero ");
  result -= +num;
  alert("La " + operation + "es igual a :" + result);
}

function multiplicacion() {
  let num = prompt("opracion :" + "multiplicacion" + "-" + "Digite el numero ");
  result *= +num;
  alert("La " + operation + "es igual a :" + result);
}

function divicion() {
  let num = prompt("opracion :" + "divicion" + "-" + "Digite el numero ");
  result /= +num;
  alert("La " + operation + "es igual a :" + result);
}

let operation = "";
let result = 0;

while (
  operation != "suma" ||
  operation != "resta" ||
  operation != "divicion" ||
  operation != "multiplicacion"
) {
  let operationInput = prompt("Digite la operacion");

  if (operationInput == "suma") {
    suma()
    operation = "suma";
  } else if (operationInput == "resta") {
    resta()
    operation = "resta";
  } else if (operationInput == "multiplicacion") {
    multiplicacion()
    operation = "multiplicacion";
  } else if (operationInput == "divicion") {
    divicion()
    operation = "divicion";
  }

  let salir = prompt("Desea de salir");
  if (salir.toLocaleLowerCase() == "si") {
    alert("La " + operation + "es igual a :" + result);
    break;
  }
}
