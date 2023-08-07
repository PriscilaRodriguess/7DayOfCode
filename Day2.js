/*- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?*/

let nome = window.prompt("Digite seu nome: ");
let idade = window.prompt("Digite sua idade: ");
let linguagem = window.prompt("Qual linguagem de programação você está estudando?")
const msg = (`Olá ${nome} você tem ${idade} anos e já está aprendendo ${linguagem}`);
alert(msg);

let opc = window.prompt(`Você gosta de estudar ${linguagem}? 1 - para SIM e 2 - para NÃO`);
if(opc == 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
} 
if(opc == 2) {
    alert('Ahhh que pena... Já tentou aprender outras linguagens?')
};