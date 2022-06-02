const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Miranda',
    idade: 19,
    endereco: {
        rua: 'Julio Alpen',
        numero: 378
    }
};

// console.log(pessoa);
// {
//     nome: 'Matheus',
//     sobrenome: 'Miranda',
//     idade: 19,
//     endereco: { rua: 'Julio Alpen', numero: 378 }
//   }
// const nome = pessoa.nome;
// console.log(nome);
// Matheus

//atribuição via desestruturação
//se o atributo não existir, ele retorna undefined, mas pode definir
//valor padrao. Caso o valor existe, o do objeto vale
// const { nome, sobrenome, idade } = pessoa;
// const { nome = 'Matheus', sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade);
// Matheus Miranda 19

//caso queira mudar o nome da variavel
//a variavel n pega o valor da chave nome
// const { nome: n = 'Matheus', sobrenome, idade } = pessoa;

// Só printa rua e número
// const {endereco: { rua, numero } } = pessoa;
// console.log(rua, numero);

// const {endereco: { rua, numero }, endereco } = pessoa;
// //imprime a rua e o número, e o objeto completo
// console.log(rua, numero, endereco);


//Operador rest
const {nome, ...resto} = pessoa;
console.log(nome, resto);