let message = document.getElementById("message");
message.innerHTML = "";
function validaCampoPreenchido() {
  let primeiro = document.querySelector("#primeiro-valor");
  let segundo = document.querySelector("#segundo-valor");
  let mais = document.querySelector("#mais");
  let menos = document.querySelector("#menos");
  let divisao = document.querySelector("#divisao");
  let multiplica = document.querySelector("#multiplica");

  mais.disabled = true;
  menos.disabled = true;
  divisao.disabled = true;
  multiplica.disabled = true;

  primeiro.addEventListener("change", stateHandle);
  segundo.addEventListener("change", stateHandle);

  function stateHandle() {
    if (primeiro.value !== "" && segundo.value !== "") {
      mais.disabled = false;
      menos.disabled = false;
      divisao.disabled = false;
      multiplica.disabled = false;
    }
  }
}
validaCampoPreenchido();

function calculadora(operacao) {
  //   let primeiro = document.getElementById("primeiro-valor").value;
  //   let segundo = document.getElementById("segundo-valor").value;
  let primeiro = parseFloat(document.getElementById("primeiro-valor").value);
  let segundo = parseFloat(document.getElementById("segundo-valor").value);
  let resultado;

  //   if (primeiro === "" || segundo === "") {
  //     console.log("Algum input não possui valor algum NaN");
  //   } else {
  // let primeiroConvertido = parseFloat(primeiro);
  // let segundoConvertido = parseFloat(segundo);
  switch (operacao) {
    case "+":
      resultado = adicao(primeiro, segundo);
      message.innerHTML = `Resultado da operação ${operacao}: ${resultado}`;
      resetar();
      break;
    case "-":
      resultado = subtracao(primeiro, segundo);
      message.innerHTML = `Resultado da operação ${operacao}: ${resultado}`;
      resetar();
      break;
    case "/":
      resultado = divisao(primeiro, segundo);
      message.innerHTML = `Resultado da operação ${operacao}: ${resultado}`;
      resetar();
      break;
    case "*":
      resultado = multiplicacao(primeiro, segundo);
      message.innerHTML = `Resultado da operação ${operacao}: ${resultado}`;
      resetar();
      break;
  }
}
// }

function adicao(primeiro, segundo) {
  return primeiro + segundo;
}

function subtracao(primeiro, segundo) {
  return primeiro - segundo;
}

function divisao(primeiro, segundo) {
  if (segundo === 0) {
    return (message.innerHTML = "Não é possível dividir por zero");
  } else {
    return primeiro / segundo;
  }
}

function multiplicacao(primeiro, segundo) {
  return primeiro * segundo;
}

function sair() {
  document.getElementById("primeiro-valor").disabled = true;
  document.getElementById("segundo-valor").disabled = true;
  document.getElementById("reset").disabled = true;
  document.getElementById("sair").disabled = true;
  message.innerHTML = "Até a próxima :)";
}

function resetar() {
  document.getElementById("primeiro-valor").value = "";
  document.getElementById("segundo-valor").value = "";
  message.innerHTML += ``;
  validaCampoPreenchido();
}
