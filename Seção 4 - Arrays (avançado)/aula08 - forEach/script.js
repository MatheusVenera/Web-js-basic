const a1 = [1,2,3,4,5,6,7,8,9];
const a2 = [1,2,3,4,5,6,7,8,9];

//Sintaxe completa
a1.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});

let total = 0;
a2.forEach(valor => {total += valor});
console.log(total);