//O while checa a condição primeiro, e depois executa o laço
//O Do while executa primeiro, e depois verifica a condição

function random(min, max) {
    const resultado = Math.random() * (max - min) + min;
    return Math.floor(resultado);
};

let rand = random(1, 50);
rand = 10;
//O while n vai executar se a condição ser falsa, mas o do while sim
while (rand !== 10) {
    // rand = random(1, 50);
    console.log(rand);
};

console.log('#################');

do {
    // rand = random(1, 50);
    console.log(rand);
} while (rand !== 10);