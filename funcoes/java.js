// 1

function parOuImpar(numero) {
    if (parseInt(numero) % 2 === 0) {
      console.log("O número " + numero + " é par");
    } else {
      console.log("O número " + numero + " é ímpar");
    }
  }
  parOuImpar(10);
  parOuImpar("3");
  parOuImpar(5);
  
  // 2

  function soma(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  
  let resultado = soma(3, 7);
  console.log("A soma dos dois números é: " + resultado);
  
  // 3
  
  function oposto(numero) {
    if (parseInt(numero) > 0) {
      return (numero += -2 * numero);
    } else {
      return (numero -= 2 * numero);
    }
  }
  console.log(oposto(2));
  console.log(oposto(-20));
  console.log(oposto(0));
  
  // 4
  
  function somaPositivos(numeros) {
    let soma = 0;
  
    for (i = 0; i < 4; i++) {
      if (parseInt(numeros[i]) > 0) {
        soma += parseInt(numeros[i]);
      }
    }
    return ("A soma dos números é: " + soma);
  }
  console.log(somaPositivos([1, -4, 7, 12]));
  
  // 5

  function menorNumero(numeros){
    let menor = numeros[0];
  
    for (i = 0; i < 4; i++) {
      if (parseInt(numeros[i]) < menor) {
        menor = parseInt(numeros[i]);
      }
    }
    return ("O menor número do array é: " + menor);
  }
  console.log(menorNumero([34, 15, 88, -2]));
  console.log(menorNumero([34, -500, -1, 100]));
  
  