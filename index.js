const prompt = require("prompt-sync")();

impar = 0;
pares = 0; 

var n = parseInt(prompt("Digite um número inteiro:"));

for(var num = n ; num <= 10 ; num++){
  quadrado = num**2;
  console.log(quadrado);

  if(num % 2 == 0){
    pares = pares + quadrado;
  }  else{
    impar = impar + quadrado;
  }
}

console.log("A soma dos números pares é:",pares);
console.log("A soma dos números ímpares é:",impar);
