/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null,
bigint e symbol - Os valores são copiados quando usa o = (sinal de igual)
*/

//Não ocorre a alteração do valor, mas sim a alteração da REFERÊNCIA
// do valor da variavel, ou seja, n está trocando O vlr, mas sim DE vlr
// Lembrando que a variavel é um alias apontando para um ponto da memoria
let nome = 'Luiz';
nome = 'Matheus';

//Como a string é imutável, n da pra alterar parte dela
nome[0] = 'N';
console.log(nome);

let a = 'A';
let b = a; //Cópia de a, passa a ser independente. Cópia != referencia



/* 
Referências (mutáveis) - array, object, function
quando usa o = (sinal de igual), esta linkando (vinculando, fazendo referencia)
*/

let arrayA = [1,2,3];
let arrayB = arrayA; //A variavel arrayB fica linkada em arrayA,
// fazendo referencia a um valor comum na memória
//se o valor de arrayA é alterado, o de arrayB também, e o inverso tbm]
let arrayC = arrayA; //c tambem aponta para arrayA
console.log(arrayA, arrayB, arrayC);

arrayA.push(4);
console.log(arrayA, arrayB, arrayC);

arrayB.pop();
console.log(arrayA, arrayB, arrayC);

arrayC.push(5);
console.log(arrayA, arrayB, arrayC);

//Para copiar os valores, sem referencia
let novaArrayA = [1,2,3,4];
let novaArrayB = [...novaArrayA]; //fica com os mesmos valores, mas n referencia
let novaArrayC = novaArrayB; //arrayC referencia arrayB, mas nao arrayA 
console.log(novaArrayA, novaArrayB, novaArrayC);

novaArrayA.push(8);
console.log(novaArrayA, novaArrayB, novaArrayC);

novaArrayB.pop();
console.log(novaArrayA, novaArrayB, novaArrayC);

novaArrayC.push(10);
console.log(novaArrayA, novaArrayB, novaArrayC);

//OBJETOS
//referencia igual
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

let carro = pessoa;
console.log(carro, pessoa);

console.log(carro.nome);

//Sem referencia, apenas cópia (fazer spread)
let casa = {...pessoa};