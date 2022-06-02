// Objeto simplifica isso
// let nome01 = 'Matheus';
// let sobrenome01 = 'Venera';
// let idade01 = 19;

// let nome02 = 'Luiz';
// let sobrenome02 = 'Oliveira';
// let idade02 = 25;

// let nome03 = 'João';
// let sobrenome03 = 'da Silva';
// let idade03 = 30;

//Objeto literal 
const pessoaMatheus = {
    nome: 'Matheus',
    sobrenome: 'Venera',
    idade: 19
};
//Retorna um parametro do objeto
console.log(pessoaMatheus.nome);

const pessoaMaria = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 22
};
//Retorna o objeto
console.log(pessoaMaria);


//Construindo o objeto com function (chamada de function factory, pq fabrica objetos)
function criarPessoa(nome, sobrenome, idade) {
    return pessoa = {
        // Como os parametros passados tem o mesmo nome que os atributos
        // do objeto, ele identifica automaticamente, e pode fazer isso:
        nome,
        sobrenome,
        idade
        // Mesma coisa que debaixo (quando o nome for diferente, tem q ser assim:)
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
    };
};
console.log(criarPessoa('Matheus', 'Venera', 19));


const pessoa1 = criarPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criarPessoa('Maria', 'Oliveira', 22);
const pessoa3 = criarPessoa('Vinicios', 'Tribess', 21);
const pessoa4 = criarPessoa('Joao', 'Rudolff', 35);
const pessoa5 = criarPessoa('Danielly', 'Costa', 18);

// Objeto com método
const carro = {
    nome: 'Fox',
    marca: 'Volkswagen',
    ano: 2004,

    falar() {
        console.log(`Sou o ${this.nome}, sou da marca ${this.marca} e sou do ano de ${this.ano}`);
    },

    buzinar() {
        console.log('BIBI');
    }
}

carro.falar();
carro.buzinar();