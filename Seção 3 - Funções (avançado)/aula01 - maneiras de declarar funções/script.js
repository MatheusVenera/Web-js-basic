//Declaração de função padrão > ocorre Function hoisting
//A função é elevada para o top do código pela engine do js,
//portanto, posso invocar a função antes do bloco de código dela
function falaOi() {
    console.log('oi');
};
falaOi();
// falaOi();
// function falaOi() {
//     console.log('oi');
// };


//Declarção 

//First-class objects (Objetos de primeira classe)
//(Function expression) Dá pra tratar as funções como dados
//Adicionar função em uma variável, portanto, a variavel se torna uma
//funcao. Com isso, é possível passar a variavel para outra função
//fazendo que uma segunda função execute a primeira que está na variavel
const falarOi = falaOi();
const dado = function souUmDado() {
    console.log('Sou um dado')
};
dado();
function executaFuncao(funcao) {
    funcao()
};
executaFuncao(dado);
//Function expression anonima (funcao sem nome)
const carro = function() {
    console.log('Sou um carro')
};
carro();

//Arrow functions
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();

//Dentro de um objeto
const objeto = {
    nome: 'Matheus',
    falar: function () {
        console.log('Estou falando....');
    },
    latir() {
        console.log('au au');
    }
};
objeto.falar();
objeto.latir();