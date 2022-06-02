//Filter, map, reduce

//Retorne os números maiores que 10

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];


//Filter método longo, + explicativo
// //pode receber valor, indice e o proprio array callobackFilter(valor, indice, array)
// function callbackFilter(valor) {
//     return valor > 10; //retorna true ou false
//     //se true, ele adiciona para a outra lista
// };

// const resultado = numeros.filter(callbackFilter);
const resultado = numeros.filter(valor => valor>10);
console.log(resultado)

//Retorna as pessoas que tem o nome com 5 letras ou mais
//Retorna as pessoas com mais de 50 anos
//Retorna as pessoas cujo nome termina com a

const pessoa = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosada', idade: 32},
    {nome: 'Wallace', idade: 47}
];
//Retorna as pessoas que tem o nome com 5 letras ou mais
const pessoaComNomeGrande = pessoa.filter(objeto => objeto.nome.length >= 5);
console.log(pessoaComNomeGrande);
console.log("**********************")


//Retorna as pessoas com mais de 50 anos
const pessoasVelhas = pessoa.filter(objeto => objeto.idade > 50);
console.log(pessoasVelhas);
console.log("**********************")


//Retorna as pessoas cujo nome termina com a
const pessoasNomeTerminaEmA = pessoa.filter(objeto =>
    objeto.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomeTerminaEmA);
