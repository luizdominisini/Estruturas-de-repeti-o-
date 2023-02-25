const prompt = require("prompt-sync")();

var impar = 0
var pares = 0

for(num = 1 ; num <= 20 ; num++){
  var quadrado = num ** 2;
  console.log(quadrado);

  if(quadrado % 2 == 0){
    pares = pares + quadrado;
  } else {
    impar = impar + quadrado;
  }
}

console.log("Soma dos números pares: ",pares);
console.log("Soma dos números ímpares: ",impar);
