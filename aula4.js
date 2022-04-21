const prompt =require("prompt-sync")();

const salario = +prompt("Digite seu salário atual R$  ")
let porcentual ;

if(salario <= 280) {
    porcentual = 20;
}else if(salario <= 700){
    porcentual = 15;
}else if(salario <= 1500){
    porcentual = 10;
}else {
    porcentual = 20;
}

console.log(`\nSalário igual a R$ ${salario}`)
console.log(`\nO porcentual aplicado é de ${porcentual}`)

porcentual = porcentual/100;
const aumento = porcentual*salario;
const novoSalario = salario+aumento;

console.log(`Teve um aumento no salário de R$ ${aumento}.`)
console.log(`Seu novo salário é de R$ ${novoSalario}.`)

// Este programa vai calcular o aumento salarial

/*
1) Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
Salários até R$ 280,00 (incluindo): aumento de 20%. 
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
Salários de R$ 1500,00 em diante: aumento de 5%.
Após o aumento ser realizado, informe na tela:
O salário antes do reajuste.
O percentual de aumento aplicado.
O valor do aumento.
O novo salário, após o aumento. */

