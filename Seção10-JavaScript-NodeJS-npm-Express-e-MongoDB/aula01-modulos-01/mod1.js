// const nome = 'Matheus';
// const sobrenome = 'Venera';

// const falaNome = () => {
//     console.log(nome, sobrenome);
// };


// //Mesma coisa
// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.quaalquerCoisa = 'O que eu quiser exportar';
// //Mesma coisa
// // console.log(exports)
// console.log(module.exports)


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Luiz'
const sobrenome = 'Miranda'

module.exports = {
    nome, sobrenome, Pessoa
}