// Padrão IEEE 754-2008 (imprecisão)
let numero1 = 0.7;
let numero2 = 0.1;
console.log(numero1 + numero2); //0.7999999999999999

numero1 += numero2; //0.8
numero1 += numero2; //0.9
numero1 += numero2; //1.0
console.log(numero1); //0.9999999999999999
console.log(numero1.toFixed(2)); //Aparece 1.00, mas só resolve visualmente
console.log(Number.isInteger(1.00)); //Retorna true
console.log(Number.isInteger(numero1)); //Retorna false, pq ainda é float


//Correção
// numero1 = ((numero * 100) + (numero2 * 100) / 100); Multiplicando por 100 pra tirar do decimal
// numero1 = parseFloat(numero1.toFixed(2)); Mesma coisa q ambos debaixo
// numero1 = parseInt(numero1.toFixed(2)); Mesma coisa q de baixo
numero1 = Number(numero1.toFixed(2));
console.log(Number.isInteger(numero1)); //Retorna true



// for(let i=0; i<3; i++) {
//     numero1 += numero2;
//     console.log(numero1);
// };
//console.log(numero1);

numero1 = 36; //number
numero2 = 2.5; //number
//Exibe como String e concatena
console.log(numero1.toString() + numero2.toString());
//A variável continua sendo Number
console.log(typeof(numero1), typeof(numero2));

//Representação binária (o número entre parentesis representa o sistema)
//2 = bináirio
//10 = decimal
//16 = hexadecimal
console.log(numero1.toString(2));

numero1 = 36.89712387916723;
numero2 = 2.5;

//Arredondar (0 = remove todas as casas decimais)
console.log(numero1.toFixed(2));

//Verificar se é Integer (true or false)
numero1 = 10;
console.log(Number.isInteger(numero1));
console.log(Number.isInteger(numero2));

//Verifica se é NaN
let temp = numero1 * ('Oi');
console.log(Number.isNaN(temp));