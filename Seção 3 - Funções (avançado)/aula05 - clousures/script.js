//Closure - ela fecha um escopo, e retorna a variável definida, nesse
//caso é nome. Closure é a habilidade de lembrar o escopo léxico
function retornaFuncao(nome) {
    return function () {
        return nome;
    };
};

const funcao = retornaFuncao('Matheus');
const funcao2 = retornaFuncao('Luiz');
console.dir(funcao)
console.dir(funcao2)