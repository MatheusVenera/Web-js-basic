let numero1;
let numero2;

console.log(100 / 0); //Retorna Infinity e é verificado como true
//Também retorna Infinity por falta de memória
console.log(100 / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);

//Raiz quadrada
numero1 = 9;
let raizQuadrada = numero1 ** 0.5;
// let raizQuadrada = numero1 ** (1/2);

numero1 = 2;
//Retorna o quadrado
// numero1 = numero1 * numero1;
// numero1 += numero1 ** 2;
let quadrado = Math.pow(numero1, 2);
console.log(quadrado);
// Retorna o cubo
// let quadrado = Math.pow(numero1, 3);

//Arredondando pro número inteiro abaixo
numero1 = 9.7827381;
numero2 = Math.floor(numero1);
console.log(numero2);

//Arredondando pro número inteiro acima
numero1 = 9.1827381;
numero2 = Math.ceil(numero1);
console.log(numero2);

//Arredonda para o mais próximo (.5 é pra cima)
numero1 = 9.5;
numero2 = Math.round(numero1);
console.log(numero2);

//Encontrar maior número
console.log(Math.max(1,2,3,4,7,8,9,10,-5000,10.1,10.11, -10.12));


//Encontrar menor número
console.log(Math.min(1,2,3,4,7,8,9,10,-5000,10.1,10.11, -10.12));

//Gerar número aleatório (entre 0 e 1, sendo 1 excluído)
console.log(Math.random());

//Gerar número aleatório entre intervalo
//                         máx - min
console.log(Math.random() * (9 - 6) + 6);

