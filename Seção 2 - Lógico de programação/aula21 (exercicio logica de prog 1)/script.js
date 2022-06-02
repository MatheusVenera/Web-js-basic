//Escreva uma função que recebe 2 números e retorne o maior

//Todas as formas realizam igualmente o proposto

//Sem função / com Math
console.log(Math.max(10,11));

//Con arrow function / sem Math
const maiorNumero = (x,y) => x > y ? x : y;
console.log(maiorNumero(6,9));


//Com function normal / com Math
function encontrarMaior(numero1, numero2) {
    return Math.max(numero1, numero2);
};
let maior = encontrarMaior(7,3);
console.log(maior);

//Com function normal / sem Math
function max(x, y) {
    return x > y ? x : y;
};
maior = max(5,3);
console.log(maior);