//return
//retorna um valor
//termina a função

function soma(a,b) {
    return a + b;
};

function subtracao(a,b) {
    let resultado = a-b;
};
subtracao(9,6); //n retorna nada, pq n tem return na função

function falaComeco(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    };
    return falaResto;
};
const fala = falaComeco('Olá');
const resto = fala('mundo');
console.log(resto)


//Se tivessem muitas funções, seria uma repetição
// function duplica(numero) {
//     return numero * 2;
// };
// function triplica(numero) {
//     return numero * 3;
// };
// function quadriplica(numero) {
//     return numero * 4;
// };

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(n) {
        return n * multiplicador;
    };
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));