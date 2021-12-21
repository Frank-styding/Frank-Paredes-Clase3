let operation = "";

let result = 0;

while (true) {
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
    }else if (operationInput.toLowerCase() == "esc") {
      alert("La " + operation + "es igual a :" + result);
      break;
    }else{
      continue;
    }
  }

  let num = prompt(operation + " - Digite el numero ");

  if (num.toLowerCase() == "esc") {
    alert("La resultado es igual a :" + result);
    break;
  }

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
}
