//Retorne a soma do dobro de todos os pares
//-> filtrar pares
//-> dobrar valores
// -> reduzir (somar tudo)


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaDobroPares = numeros.filter(valor =>
     valor % 2 === 0).map(valor => 
        valor*2).reduce(
            function(acumulador, valor) {
    return acumulador+valor
});
console.log(somaDobroPares);

//Mesma coisa
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const somaDobroPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor*2).reduce(function(acumulador, valor) {
//     return acumulador+valor
// });
// console.log(somaDobroPares);

//Mesma coisa
// const pares = numeros.filter(valor => valor % 2 == 0);
// const dobro = pares.map(valor => valor*2);
// const soma = dobro.reduce(function(acumulador, valor) {
//     return acumulador+valor;
// });
// console.log(soma);