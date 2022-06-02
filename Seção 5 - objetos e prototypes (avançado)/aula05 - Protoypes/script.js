/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, serevindo de modelo ou molde para futuras produções

Todos os objetos tem uma referência interna para um protótipo
que vem da propriedade protoype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro do próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro
*/


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Esse vai valer, pois primeiro vale as coisas dentro do corpo do
    //objeto, depois os do __proto__ (Prototype)
    // this.nomeCompleto  = () => 'ORIGINAL' + ' ' + this.sobrenome;
};

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}


const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');
const data = new Date();

//Praticamente mesma coisa que console.log()
console.dir(pessoa1);
console.dir(data); 