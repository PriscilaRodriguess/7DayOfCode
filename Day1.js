//Todos devem retornar true.
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

//Comparar numeroUm com stringUm.
if(numeroUm == stringUm) {
    console.log('As variáveis numeroUm e a stringUm tem o mesmo valor, mas tipos diferentes.');//true
} else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor.');//false
};

//Comparar o numeroTrinta e a stringTrinta.
if(numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e a stringTrinta tem o mesmo valor, e mesmo tipo.');
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.');
};

//Comparar o numeroDez e a stringDez.
if(numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.');
} else {
    console.log('As variáveis numeroDez e stringDez não tem o valor.');
};