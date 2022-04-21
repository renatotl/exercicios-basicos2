const prompt = require("prompt-sync")();

let valorSaque = +prompt(" Digite um valor a ser sacado entre [10 e 600] ");

const notas100 = Math.floor(valorSaque/100);

valorSaque = valorSaque % 100;

const nota50 = Math.floor(valorSaque / 50);

valorSaque = valorSaque % 50;

const nota10 = Math.floor(valorSaque / 10);

valorSaque = valorSaque % 10;

const nota5 = Math.floor(valorSaque / 5);

valorSaque = valorSaque % 5;

const nota1 = valorSaque

console.log()
console.log(`${notas100} notas de 100 R$`)
console.log(`${nota50} notas de 50 R$`)
console.log(`${nota5} notas de 5 R$`)
console.log(`${nota1} notas de 1 R$`)


// programa do caixa eletrônico

/*
3) Caixa Eletrônico - Faça um Programa para um 
caixa eletrônico. O programa deverá perguntar ao
 usuário a valor do saque e depois informar quantas 
 notas de cada valor serão fornecidas. As notas disponíveis 
 serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 
 10 reais e o máximo de 600 reais. O programa não deve se 
 preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas 
de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 
100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.  */