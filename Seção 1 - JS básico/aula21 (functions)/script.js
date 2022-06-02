//Retorno padrão (ou seja, se n for definido nada) é undefined
//Nada após o return é executado
function saudacao() {
    console.log('oi')
};
saudacao();

function calcularRaiz(numero) {
    let resultado = numero ** 0.5;
    return resultado;
};

console.log(calcularRaiz(9));
let resultado = calcularRaiz(64);
console.log(resultado);

function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
};

resultado = somarNumeros(1,2);
console.log(resultado);

//Se não enviar parâmetro, assumir valor
function subtrairNumeros(x = 2, y = 1) {
    return x-y;
};
console.log(subtrairNumeros()); //retorna 1
console.log(subtrairNumeros(5,3)); //retorna 2

//Função anonima, escondida em variável
const raiz = function(n) {
    return n ** 0.5;
};

console.log(raiz(9));

//Arrow function (mesma coisa, só remove a palavra function)
//Com ela, como só tem uma linha, pode remover as chaves {} e como
//só tem um parâmetro, pode remover os parentesis ()
const raizQuadrada = n => n ** 0.5;