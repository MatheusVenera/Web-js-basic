//Objeto falar
const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
};

//Objeto comer
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
}

//Objeto beber
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}
//Criando o objeto prototype
//Mesma coisa
// const pessoaPrototype = {...falar, ...comer, ...beber}
const pessoaPrototype = Object.assign({}, falar, comer, beber)
function criaPessoa(nome, sobrenome) {
    //Criando o objeto juntando os outros objetos
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}
const p1 = criaPessoa('Matheus', 'Venera')
const p2 = criaPessoa('Maria', 'A')
console.log(p1)
console.log(p2)