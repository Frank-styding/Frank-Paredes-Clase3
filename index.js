let operation = "";

let result = 0;
let execute = true;

while (execute) {
  if (operation == "") {
    let operationInput = prompt("Digite la operacion");
    if (operationInput == "suma") {
      operation = "suma";
    } else if (operationInput == "resta") {
      operation = "resta";
    } else if (operationInput == "multiplicacion") {
      operation = "multiplicacion";
    } else if (operationInput == "divicion") {
      operation = "divicion";
    }
  }

  let num = prompt(operation + " - Digite el numero ");

  if (operation == "suma") {
    result += +num;
    operation = "";
  } else if (operation == "resta") {
    result -= +num;
    operation = "";
  } else if (operation == "multiplicacion") {
    result *= +num;
    operation = "";
  } else if (operation == "divicion") {
    result /= +num;
    operation = "";
  }
  alert("El resultado es :" + result);
  let salir = prompt("Desea de salir");
  if (salir.toLocaleLowerCase() == "si") {
    alert("El resultado es :" + result);
    execute = false;
  }
}
