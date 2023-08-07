/*
1 - Criar um programa que gere um pergunta se você deseja adicionar uma comida na sua lista de compras; ok- 
2 - Responder com sim ou não. - ok
3 - Poder inserir o nome dela. - ok
4 - Depois deverá perguntar em qual categoria ela se encaixa como fruta, congelados, doces, láticinios. - ok
5 - Caso não queira adicionar mais nada responder não ele exibirá uma llista com todos os itens agrupados. -  */
//para adicionar algo no array .push().
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim"; // Iniciando com sim, para entrar no loop.
while (adicionarMais != "não") {
  adicionarMais = window.prompt(
    "Você deseja adcionar uma comida na lista de compras? Responda 'sim' ou 'não'."
  );
  while (adicionarMais != "sim" && adicionarMais != "não") {
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
}

alert(
  `Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`
);
