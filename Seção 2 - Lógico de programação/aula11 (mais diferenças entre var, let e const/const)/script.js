// const verdadeira = true;
// //Let tem escopo de bloco
// //Var tem escopo de função
// //Let n pode ser REDECLARADO (pode ser reatribuído valor)
// let nome = 'Matheus';
// // let nome = 'Joao'; Retorna erro Identifier nome has been declared
// var nome2 = 'Luiz' //criando
// var nome2 = 'Joao' //printa joao, pois foi REDECLARA no mesmo escopo
// if (verdadeira) {
//     //Printa joao pois está em outro bloco
//     let nome = 'Joao'; //Não retorna erro, pois LET tem escopo de BLOCO {bloco}
//     var nome2 = 'Maria' //Redeclara 
//     console.log(nome, nome2);

//     if (verdadeira) {
//         let nome = 'teste';
//         var nome2 = 'lobo mal' //REDECLARANDO, ou seja, vale para todos os escopos
//         console.log(nome, nome2); //Printa teste pois está em outro bloco
//         //A engine vai subindo de escala, ou seja, se no escopo atual ela n encontra a variavel, ela sobre pra outro
//         //bloco, e caso n encontre, vai indo até chegar no escopo global
//     };
// };
// console.log(nome, nome2);
// console.log(nome); //Printa Matheus, pois está no escopo global



//A função PROTEGE as variáveis
//A função consegue encontrar variáveis vizinhas, perto dela
//no código, e com isso usar variáveis de fora, dentro dela
function falaOi() {
    var sobrenome = 'Miranda'
    console.log(sobrenome); //printa
};
// console.log(sobrenome); sobrenome is not defined
falaOi();


function falaTchau() {
    var sobrenome = 'Venera';

    if (true) {
        let nome = 'Luiz'
        console.log(nome); //printa Luiz
    };
    // console.log(nome); nome is not defined, pq foi declarada dentro do escopo do IF
    //let respeita o escopo, o var taca o fds, só respeita o da função
};
falaTchau();

console.log(ultimoNome); //printa undefined, pois a var está criada depos
//a engine faz a elevação (hoisting), ele detecta onde cria a variavel, e declara ela no topo
//mas sem valor (SOMENTE COM VAR)


var ultimoNome = 'Nome';