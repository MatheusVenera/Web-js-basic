//Objeto literal (declarando com chaves)

// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };

// console.log(pessoa.nome);
// console.log(pessoa['sobrenome']);


//Com construtor (new)
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Matheus'
};

for (const chave in pessoa1) {
    console.log(`Chave: ${chave} e valor ${pessoa1[chave]}`);
};

//Removendo chave
delete pessoa1.nome;

//factory function / constructor function

//Factory
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// };
// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);

//Constructor

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
};
const p1 = new Pessoa('Luiz, Miranda');
Object.freeze(p1) //congela o objeto, não permitindo que ele seja mais
//alterado
const p2 = new Pessoa('Maria, Miranda');

