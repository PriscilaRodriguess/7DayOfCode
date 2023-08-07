/*
1 - A pessoa deverá escolher uma opção de operação impressa pelo programa na tela: adição, subtração, divisão e multiplicação. - ok
2 - Ela deverá inserir os dois valores que deseja utilizar:  valor 1 e valor 2 - ok
3 - Programa imprimirá o resultado da operação em questão. - ok
4 - Programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima" - ok
*/

function soma(valor1, valor2) {
  return Number(valor1) + Number(valor2);
};
function subtracao(valor1, valor2) {
  return Number(valor1) - Number(valor2);
};
function divisao(valor1, valor2) {
  return Number(valor1) / Number(valor2);
};
function multiplicacao(valor1, valor2) {
  return Number(valor1) * Number(valor2);
};

let valor1;
let valor2;
let operacao = "";

do {
  operacao = window.prompt(
    `Qual a operação você deseja usar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`
  );
  while (
    operacao != "soma" &&
    operacao != "subtração" &&
    operacao != "multiplicação" &&
    operacao != "divisão" &&
    operacao != "sair"
  ) {
    alert(`Operação não reconhecida!`);
    operacao = window.prompt(
      `Qual a operação você deseja usar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`
    );
  };
  if (operacao === "sair") {
    break;
  };

  valor1 = window.prompt(`Insira o primeiro valor: `);
  valor2 = window.prompt(`Insira o segundo valor: `);

  switch (operacao) {
    case 'soma':
      alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
      break;
    case 'divisão':
      alert(`O resultado da ${operacao} é ${divisao(valor1, valor2)}`);
      break;
    case 'multiplicação':
      alert(`O resultado da ${operacao} é ${multiplicacao(valor1, valor2)}`);
      break;
    case 'subtração':
      alert(`O resultado a ${operacao} é ${subtracao(valor1, valor2)}`);
      break;
  }
} while (
  operacao === "soma" ||
  operacao === "subtração" ||
  operacao === "multiplicação" ||
  operacao === "divisão"
);
{
  alert(`Até a próxima!`);
};
