// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (sem índice)(iteráveis, arrays ou objetos)



//For com function

// function retornaRandom() {
//     let numero = Math.random();
//     return numero;
// }
// let numeroFuncao = retornaRandom()
// let contador = 0;
// for (retornaRandom(); retornaRandom() !== 1; contador++) {
//     retornaRandom();
//     if (numeroFuncao == 1) {
//         console.log('Finalmente');
//     } else {
//         console.log('ainda nao');
//     }
// };


const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana'];
for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    console.log(fruta);
    //Imprime linha em branco
    console.log();
    
};

for (let i = 0; i < 10; i++) {
    console.log(i, i % 2 === 0 ? 'par' : 'impar');
};

pessoa = {
    nome: 'Matheus',
    idade: 0
};

for (let index = 0; pessoa.idade < 10; index++) {
    pessoa.idade++;
    console.log(`Idade ${pessoa.idade}`);
};
console.log(pessoa);