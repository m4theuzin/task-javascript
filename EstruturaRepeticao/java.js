// 1. 

while (true) {
    let nota = parseFloat(prompt("Digite sua nota"));
  
    if (nota >= 0 && nota <= 10) {
      console.log(nota);
      break;
    } else {
      console.log("Nota inválida");
    }
  }
  
  
  // 3  
  do {
    var nome = prompt("Escreva seu nome");
    var senha = prompt("Escreva uma senha");
  
    if (nome == senha) {
      alert("Nome e senha devem ser distintos");
    }
  } while (nome == senha);

  
  // 4

  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
  
  
  // 5
  
  let maior = 0;
  
  for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite um número"));
  
    if (numero > maior) {
      maior = numero;
    }
  }
  
  console.log(maior);
  
  
  // 6

  var soma = 0;
  let media = 0;
  
  for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite um número"));
  
    soma += numero;
  }
  
  media = soma / 5;
  
  console.log("A soma dos números é: " + soma);
  console.log("A media dos números é: " + media);
  
  
  // 7

  for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
  
  
  
  // 8

      // Tabuada de 5:
      // 5 X 1 = 5
      // 5 X 2 = 10
      // ...
      // 5 X 10 = 50
  
      var numeroTabuada = parseInt(prompt("Digite um número para ver sua tabuada"))
  
  
  for (let i = 1; i <= 10; i++) {
      console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada*i));
  }