const numeros = [1,2,4,5,6,7,8,9];
//Continue
for (let numero of numeros) {
    if (numero === 2) {
        //Quando a engine encontra a palavra continue, no momento
        //que encontra, ele passa para o próximo item sem executar
        //o que vem depois
        console.log('Pulei o numero 2');
        continue;
    };

    console.log(numero);
};

console.log('######################');

//break
for (let numero of numeros) {
    if (numero === 7) {
        //Quando a engine encontra a palavra break, no momento
        //que encontra, ele encerra o laço
        console.log('Achei o 7');
        break;
    };

    console.log(numero);
};