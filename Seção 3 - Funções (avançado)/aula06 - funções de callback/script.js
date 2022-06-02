//Funções de callback que são executadas quando uma ação (function)
//finaliza
function rand(min = 1000, max = 3000) {
    const numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
};


function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
};
function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
};
function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
};

//Mesmas estruturas, só pra n criar "árvore de Natal"
f1(f1Callback);
function f1Callback() {
    f2(f2Callback);
};
function f2Callback() {
    f3(f3Callback);
};
function f3Callback() {
    console.log('Olá mundo')
};
// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Olá mundo!')
//         })
//     });
// });