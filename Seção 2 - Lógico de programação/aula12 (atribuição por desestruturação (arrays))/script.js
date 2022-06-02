// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A
// // console.log(a, b, c); printa a, b, c

// //Desestruturação
// [a, b , c] = [1, 2, 3];
// console.log(a, b, c);


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//... operador rest, pega o resto n declarado (quando usado pra pegar)
//... operador spread, distribui o resto (quando usado pra espalhar)
// let [primeiroNumero, segundoNumero, ... resto] = numeros;
// console.log(primeiroNumero, segundoNumero);
// console.log(resto);
//Pulando os valores com , , (vírgula, espaco, vírgula) (valor vazio)
let [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco);

const listaDeListas = [
//   0,1,2
    [1,2,3], //0
    [4,5,6], //1
    [7,8,9] // 2
];

// const itemSeis = listaDeListas[1][2];
// console.log(itemSeis);

const [, [,,seis]] = listaDeListas; //retorna o item 6 via desestruturação
console.log(seis);