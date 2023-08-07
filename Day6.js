let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";

let adicionarMais = "sim"; // Iniciando com sim, para entrar no loop.
while (adicionarMais != "não") {
  if (
    frutas.length === 0 &&
    laticinios.length === 0 &&
    doces.length === 0 &&
    congelados.length === 0
  ) {
    adicionarMais = window.prompt(
      "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
    );
  } else {
    adicionarMais = window.prompt(
      "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ,'não' ou 'remover'."
    );
  }

  while (
    adicionarMais != "sim" &&
    adicionarMais != "não" &&
    adicionarMais != "remover"
  ) {
    //Enquanto a resposta for diferente de sim ou de não, exibir que não foi reconhecida e perguntar novamente
    alert(`Operação não reconhecida!`);
    adicionarMais = window.prompt(
      "Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'."
    );
  }

  if (adicionarMais === "não") {
    //Se o texto lido for não ele sai do loop.
    break;
  }

  if (adicionarMais === "sim") {
    comida = window.prompt("Qual comida você deseja inserir?");
    categoria = window.prompt(
      "Em qual categoria ela se encaixa: 'frutas', 'laticinios', 'doces' ou 'congelados'?"
    );
    if (categoria === "frutas") {
      frutas.push(comida);
    } else if (categoria === "laticinios") {
      laticinios.push(comida);
    } else if (categoria === "doces") {
      doces.push(comida);
    } else if (categoria === "congelados") {
      congelados.push(comida);
    } else {
      alert("Essa categoria não foi pré-definida.");
    }
  } else if (adicionarMais === "remover") {
    if (
      frutas.length === 0 &&
      laticinios.length === 0 &&
      doces.length === 0 &&
      congelados.length === 0
    ) {
      alert(`A lista está vazia!`);
    } else {
      // Se a lista estiver vazia
      remover = window.prompt(
        `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`
      );
      if (frutas.indexOf(remover) != -1) {
        frutas.splice(frutas.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (laticinios.indexOf(remover) != -1) {
        laticinios.splice(laticinios.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (doces.indexOf(remover) != -1) {
        doces.splice(doces.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else if (congelados.indexOf(remover) != -1) {
        congelados.splice(congelados.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`);
      } else {
        alert(`Não foi possível encontrar o item dentro da lista!`);
      }
    }
  }
}

alert(
  `Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`
);
