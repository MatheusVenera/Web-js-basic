const nome = 'Matheus';
const sobrenome = 'Venera';
export const idade = 19;
const cpf = 'uashduauisd' //n é expotado pq n tem export em nenhum lugar

export default function subtracao(x, y) { //exporta como o default do modulo
    return x-y;
};
// export {nome, sobrenome, idade, soma, subtracao as default} //outra forma de exportar como default

function soma(x,y) {
    return x + y;
};

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export {nome, sobrenome as lastname, soma}
