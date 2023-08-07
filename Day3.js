/*
1 - Se quer ir para a aréa de front ou de back; - ok
2 - Caso seja front, aprender react ou vue, caso seja back c# ou java; - ok 
3 - Depois se quer seguir se especializando na área ou seguir para fullsctack; - ok
4 - Quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer; - ok */

// escolher se quer front-end ou back-end 
let linguagem = "";

const area = prompt("Qual a área que você quer seguir? Front-End ou Back-End");
if(area == 'Front-End') {
    linguagem = prompt("Você quer aprender react ou vue?");
} else if(area == 'Back-End') {
    linguagem = prompt("Você quer aprender c# ou Java?");
} else {
    alert('[ERROR] Você não selecionou uma área válida.')
};

const seguir = prompt("Você deseja continuar a se especialiazar ou seguir para Fullstack? 1 - Para especialização e 2 - Para Seguir para Fullstack");
if (seguir == 1) {
    alert(`Continue se especializando em ${linguagem} para dominar ${area}.`);
} else if(seguir == 2) {
    alert(`Aprenda outras linguagens além de ${linguagem} para se tornar um desenvolvedor(a) fullstack!`);
} else {
    alert('[ERROR] Você não selecionou uma resposta válida.');
};

let msg = prompt(`Há alguma linguagem além de ${linguagem} que você queira aprender? Digite 'ok' para SIM.`);
while(msg === 'ok'){
    let novaTec = prompt("Qual?");
    alert(`${novaTec} é realmente uma tecnologia muito legal!`);
    msg = prompt("Tem mais alguma tecnologia que você gostaria de estudar? Digite 'ok' para SIM.");
};