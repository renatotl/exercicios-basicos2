const prompt = require("prompt-sync")();


const numeroAleatorio = Math.floor(Math.random()*11.);


// essa parte dó código é pra saber se o código está funcionando
console.log(numeroAleatorio)
/* no Math.random retorna números aleatórios entre 0 e 1, mas excluiendo o 1  
 Mas é um número muito grande em decimais */

//vai ser multiplicado por 11 porque a questão pede número aleatório entre 1 e 10
// a multi´licaçãp sempre sera um número acima do que é pedido.
 
// O Math.floor vai retornar só a parte inteira 

// foi colocado essa parte do código em rascunho apenas para teste 
//console.log(Math.floor(Math.random()*11.))

console.log(`O programa gerol um número entre 0 e 10 advinhe qual é esse número `)
const resposta = +prompt(`Qual é a sua resposta? `)

if (resposta == numeroAleatorio){
    console.log("VOCÊ VENCEU!")
}else{
    console.log("VOCÈ PERDEU!")
}

// aula4 exercício 2

/* 
2) Jogo da adivinhação - Escreva um programa que 
faça o computador “pensar” em um número inteiro entre
 0 e 10 e peça para o usuário tentar descobrir qual foi
  o número escolhido pelo computador. O programa deverá 
  escrever na tela se o usuário venceu ou perdeu.  */