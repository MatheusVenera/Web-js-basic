/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 e 23 - Boa noite
*/

//if - pode ser usado sozinho
// else e else if precisa de um if primário
//else if pode ser repetido no bloco condica
//o else só pode ser o ultimo, e é único

const hora = 25;
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <=23 ) {
    console.log('Boa noite');
} else {
    console.log('Tá errado isso aí bruxo');
};