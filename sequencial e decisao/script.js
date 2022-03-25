// QUESTAO SEQUENCIAL 1 
let nome = prompt("Digite seu nome");
alert("Seu nome e " + nome);

console.log(nome)

//2
let num1 = parseInt(prompt("Escreva um número"));
let num2 = parseInt(prompt("Escreva outro número"));

console.log(num1 + num2);

//3
let nota1 = parseInt(prompt("Escreva sua nota"));
let nota2 = parseInt(prompt("Escreva sua outra nota"))

console.log((nota1 + nota2)/2);

//4
let nascimento = parseInt(prompt("Escreva o ano de seu nascimento"));
const anoAtual = 2022;

console.log (anoAtual-nascimento)

//5
let horas1 = parseInt(prompt("Escreva qaundo voce ganha por hora "));
let horas2= parseInt(prompt("Escreva qauntas horas voce trabalha por mes"))

console.log (horas1*horas2)

//6
let grausF = parseInt(prompt("Escreva a temperatura em Fahrenheit"))

console.log (C = 5 * ((grausF-32) / 9))

//EstruturaDeDecisao ex 1 
let num3 = parseInt(prompt("Escreva um número"));
let num4 = parseInt(prompt("Escreva outro número"));

console.log ( num3 >=  num4 )

// ex 2
let Numero1=parseInt(prompt("Digite um número negativo ou positivo"))
if (Numero1 <0){
    console.log("negativo")
} else {
    console.log ("positivo")
}

// ex 3
let Sexo=parseInt(prompt("Digite seu sexo"))
if (Sexo="F"){
    console.log("Feminino")
}
if (Sexo="M"){
    console.log("Masculino")
}
else {
    console.log ("Sexo Inválido")
}

//4
let num5 = parseInt(prompt("Digite um número"));
let num6 = parseInt(prompt("Digite outro número"));

console.log(num1 + num2);

let media = parseInt(prompt("Digite sua média"));
if (media >7){
    console.log("Aprovado");
}
if (media <6,99){
    console.log("Reprovado");
}
if (media = 10)
    console.log ("Aprovado com distinção");

    //5
    let numero7 = parseInt(prompt("Digite o primeiro número"));
    let numero8 = parseInt(prompt("Digite o segundo número"));
    let numero9 = parseInt(prompt("Digite o terceiro número"));
    
    if (numero7 > numero8 && numero7 > numero9) {
        console.log("O número " + numero7 + " é o maior entre os três");
    } else if (numero8 > numero7 && numero8 > numero9) {
        console.log("O número " + numero8 + " é o maior entre os três");
    } else if (numero9 > numero7 && numero9 > numero8) {
        console.log("O número " + numero9 + " é o maior entre os três");
    } else {
        console.log("Os três números são iguais");
    }    
    
    //6
    
    let numero10 = parseInt(prompt("Digite o primeiro número"));
    let numero11 = parseInt(prompt("Digite o segundo número"));
    
    if (numero10 % 2 === 0 && numero11 % 2 === 0) {
      console.log("Os números " + numero10 + " e " + numero11 + " são pares");
    } else if (numero10 % 2 === 0 && numero11 % 2 !== 0){
        console.log("O número " + numero10 + " é par e o número " + numero11 + " é ímpar");
    } else if (numero10 % 2 !== 0 && numero11 % 2 === 0){
        console.log("O número " + numero10 + " é ímpar e o número " + numero11 + " é par");
    } else {
      console.log("Os dois números são ímpares");
    }    