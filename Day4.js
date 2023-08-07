// Gerar um número aleatório e adivinha-lo; 
//let gerar = Math.floor(Math.random() * (10 - 0 + 1) + 1);
const inicial = Math.floor(Math.random() * (10 - 0 + 1) + 1);
let chute = "";
let acertou = false;
let tentativa = 0;

for(let contador = 0; inicial < 10; contador++){
    chute = window.prompt("Adivinhe o número que foi gerado de 0 a 10:") ;
    if(chute == inicial){
        alert(`Parabéns! Você acertou o número era ${inicial}.`);
        acertou = true;
        break;
    } else {
        alert("[ERRO] Você errou tente novamente!");
    } if(!acertou){
    
    alert(`Infelizmente, você não acertou. O número era ${inicial}!`);
};
};
