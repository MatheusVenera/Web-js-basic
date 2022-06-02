function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
};


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
};

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2, rand(1,3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe dados na tela')
    }).catch(e => {
        console.log('ERRO: ', e);
    });
console.log('Isso aqui será exibido antes de qualquer promise')


function esperaAi6(tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Foi resolvido 1');
        }, tempo);
    });
};
function esperaAi2(tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Foi resolvido 2');
        }, tempo);
    });
};
function esperaAi3(tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Foi resolvido 3');
        }, tempo);
    });
};
function esperaAi4(tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Foi resolvido 4');
        }, tempo);
    });
};

console.log('oi')
esperaAi(rand(4, 10))
    .then(resposta => {
        console.log(resposta);
    });
esperaAi2(rand(4, 10))
    .then(resposta => {
        console.log(resposta);
    });
esperaAi3(rand(4, 10))
    .then(resposta => {
        console.log(resposta);
    });
esperaAi4(rand(4, 10))
    .then(resposta => {
        console.log(resposta);
    });

    console.log('oi2')