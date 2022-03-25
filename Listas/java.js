// 1

let minhaLista = [1, 5, 3, 2, 10];

for (let i = 0; i < minhaLista.length; i++) {
  console.log(minhaLista[i]);
}

// 2

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var inverso = [];

for (let i = numeros.length - 1; i >= 0; i--) {
  inverso.push(numeros[i]);
}

console.log(inverso);

// 3

var notas = [];
var soma = 0;
var media = 0;

for (let i = 0; i < 4; i++) {
  notas.push(parseFloat(prompt("Digite uma nota")));
  soma += notas[i];
}

media = soma / 4;

alert("As notas são: " + notas + " e a média das notas é: " + media);


//5

var pares = []
var impares = []
var inteiros = []

for(let i = 0; i < 20; i++){

  inteiros.push(parseInt(prompt("Digite um número")))

  if(inteiros[i] % 2 === 0){
    pares.push(inteiros[i])
  } else{
    impares.push(inteiros[i])
  }
}
console.log("Vetor original: " + inteiros)
console.log("Vetor pares: " + pares)
console.log("Vetor impares3: " + impares)

// 7

var vetor = [1, 2, 3, 4, 5]
var soma = 0;
var multiplicacao = 1;

for (let i = 0; i < vetor.length; i++){
    soma += vetor[i]
    multiplicacao *= vetor[i]
}
console.log("A soma dos números do vetor é: " + soma)
console.log("A multiplicação dos números do vetor é: " + multiplicacao)
console.log("Os números do vetor são: " + vetor)

// 9

var nomes = [];
var i = 0;

while (true) {
  nomes.push(prompt("Digite um nome ou 0 para parar"));
  
  if (parseInt(nomes[i]) === 0) {
    nomes.pop(nomes[i]);
    break;
  }
  i++;
}
i = Math.floor(Math.random() * nomes.length);
console.log(nomes[i] + " foi sorteada para pagar o churrasco!");

// 10

var nomesPresente = [];
var i = 0;
let num1 = 0
let num2 = 0

while (true) {
  nomesPresente.push(prompt("Digite um nome ou 0 para parar"));
  
  if (parseInt(nomesPresente[i]) === 0) {
    nomesPresente.pop(nomesPresente[i]);
    break;
  }
  i++;
}
num1 = Math.floor(Math.random() * nomesPresente.length);
nomesPresente.pop(nomesPresente[num1]);
num2 = Math.floor(Math.random() * nomesPresente.length);
console.log(nomesPresente[num1] + " e "+ nomesPresente[num2] + " foram sorteados para te dar um presente!");