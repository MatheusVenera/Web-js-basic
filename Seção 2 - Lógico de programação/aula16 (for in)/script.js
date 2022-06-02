// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (sem índice)(iteráveis, arrays ou objetos)

const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(i); //índice
    console.log(frutas[i]); //valores
};

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Venera',
    idade: 19
};

for (const chave in pessoa) {
    console.log(chave); //chaves (nome, sobrenome, idade)
    //MESMA COISA
    // console.log(pessoa.nome);
    // console.log(pessoa['nome']);
    console.log(pessoa[chave]);
    console.log(`${chave}: ${pessoa[chave]}`);
};