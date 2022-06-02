//REGRAS
//Podemos criar a variável e declarar mais pra frente no código, ou não
//Não podemos criar variáveis com palavras reservadas
//Variáveis precisam ter nomes significativos
//Não podemos começar nome de variável com um número
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Não podemos redeclarar variáveis com let
// NÃO UTILIZAR VAR, UTILIZE LET


//Criando variável
let nome;
console.log(nome); //retorna undefined
nome = 'joao';
let novoNome = 'matheus';
console.log(nome);
console.log(novoNome);

//Alterando valor das variáveis
nome = 'joao2';
novoNome = 'matheus2';
console.log(nome);
console.log(novoNome);
var texto = 'texto';
console.log(texto);
texto = 'novoTexto';
console.log(texto);

//Criando 'variável' constante
const jose = 'jose';
console.log(jose);
//Retorna erro, pois const não pode ser alterada
// jose = 'novoJose';
// console.log(jose);