/*
      Operadores aritméticos
 *    +  soma e concatenação
 *    - subtração
 *    / divisão
 *    * multiplicação
 *    ** potenciação
 *    % Resto da divisão
*/

let numero1 = 10;
let numero2 = 3;
console.log(numero1 % numero2);
let contador = 2;
console.log(contador)
//Adiciona 1 ao valor da variável
contador++; //3 (primeiro realiza a ação, depois incrementa o valor)
++contador; //4 (primeiro incrementa o valor, depois incrementa a ação)
console.log(contador); //4
console.log(contador++); //4
console.log(contador); //5
console.log(++contador); //6

//Retira 1 do valor da variavel (mesmas regras)
contador--;
--contador;

let pulo = 2;
contador = 0;

//MESMA COISA
contador = contador + pulo; //Igual de baixo
contador += pulo; //Igual de cima

contador -= pulo;
contador *= pulo;
contador /= pulo;
contador **= pulo;
contador %= pulo;

//NaN = Not a number
let variavel1 = 1;
let variavel2 = 'Luiz';
console.log(variavel1 * variavel2); //Retorna NaN pq é number * string

let variavel3 = 2;
let variavel4 = '3';
console.log(variavel3 * variavel4); //Retorna 6, interpreta como number
console.log(typeof variavel4); //A variavel continua string
console.log(variavel3 + variavel4); //Concatena as variaveis
let novaVariavel = variavel3 + variavel4;
console.log(typeof novaVariavel); //string

//parseInt (inteiro), parseFloat (decimais), Number (número)
let numero10 = 10;
let numeroParseInt = parseInt('5.2'); //Transforma em int
numero10 = parseFloat('10.2'); //Transforma em float
numero10 = '10';
numero10 = Number(numero10); //Transforma em número
console.log(numero10);
