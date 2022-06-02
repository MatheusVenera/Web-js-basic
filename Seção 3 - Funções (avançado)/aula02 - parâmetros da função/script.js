//Arguments não funciona com arrow functions, mas da pra fazer com
//rest operator
const arrowFunction = (...args) => { console.log(args) };
arrowFunction('+', 1, 20, 30, 40, 50);

function funcao() {
    console.log(arguments[0]);
};
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9);

function somarNumeros(a, b, c) { //a == 1, b == 2, c == 3 e o resto
    //vai estar somente na lista arguments
    //todos estão em arguments igualmente, porém os informados tem
    //lugar na variavel passada na funcao
    let total = 0;
    for (const argumento of arguments) {
        total += argumento;
    };
    console.log(total, a, b, c)
};
somarNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55 1 2 3

function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
};
funcao(1, 2, 3) //os outros ficam como undefined
//1 2 3 undefined undefined undefined

function novaFuncao(a, b = 2, c) { //mesma coisa que acontece com c \/
    c = c || 0; //checa se c existe valor, se tiver se mantem, caso
    //n tenha, fica com valor padrao de 0
};
novaFuncao(2) //como n passa os argumentos, ele resolve como definido
//acima
//caso seja passado o valor undefined ou null para algum argumento
//ele assume o valor padrão. Em nenhum outro valor ele faz isso,
//somente na falta do valor ou com undefined / null

//Atribuição via desestruturação nos parametros (array ou objetos)
function outraFuncao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
};
outraFuncao({ nome: 'Luiz', sobrenome: 'Otávio', idade: 19 });

function conta(operador, acumulador, ...numeros) { //rest operator
    //            +           0    [20,30,40,50]
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    };
    console.log(operador, acumulador, numeros);
};
conta('+', 0, 20, 30, 40, 50);