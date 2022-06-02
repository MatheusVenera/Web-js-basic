const produto = {
    nome: 'Camiseta',
    preco: 1.80
};

//Copiar um objeto para outro
// const caneca = {...produto};
// caneca.nome = 'Caneca';

//Copiar com assign (se usar vários objetos, e tiverem chaves com mesmo
//nome, o último vale)
// const caneca = Object.assign({}, produto);

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.entries(produto)); //retorna cada chave com valor
//em uma lista, dentro de uma lista
//[ [ 'nome', 'Camiseta' ], [ 'preco', 1.8 ] ]

//For of normal
// for (const entry of Object.entries(produto)) {
//     console.log(entry)
// };

//For of com desestruturação
for (let [chave, valor] of Object.entries(produto)) {
    console.log(`Chave:  ${chave} e valor ${valor}`);
};
//Outra forma de fazer tbm
//             0        1
//valor = ['Camiseta', 1.8]
for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
};
