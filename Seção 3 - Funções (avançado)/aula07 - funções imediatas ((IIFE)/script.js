//IIFE - Immediately invoked function expression
//Expressão de função invocada imediatamente


// function qualquerCoisa() {
//     console.log('Matheus')
// };
// qualquerCoisa();


//Função IIFE (invocada automaticamente)
//ela não "toca" o escopo global, mas pode pegar elementos dele
//Precisa estar dentro dos parentesis, e depois chamar dnv

// (function() {
//     return 'Oi';
// })();


const nome = 'matheus';
(function(idade, peso, altura) {
    console.log(nome)
    console.log(idade);
    console.log(peso);
    console.log(altura);

    const sobrenome = 'Venera'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    };

    function falaNome() {
        console.log(criaNome('João'));
    };

    falaNome();
})(30, 80, 1.8);