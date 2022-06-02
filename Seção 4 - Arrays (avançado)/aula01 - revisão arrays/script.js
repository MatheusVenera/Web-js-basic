let nomes = ['Eduardo', 'Mônica', 'João'];
// let nomes = new Array('Eduardo', 'Maria', 'Joana'); mesma coisa
delete nomes[1]; //remove o valor do índice 2 e deixa um buraco lá,
//n é preenchido pelo valor seguinte da lista
console.log(nomes)

nomes = ['Eduardo', 'Mônica', 'Joana', 'Wallace', 'Rosada'];
const novo = nomes.slice(1, -2); //[ 'Mônica', 'Joana' ]
console.log(novo);

const nome = nomes.join(' '); //Eduardo Mônica Joana Wallace Rosada
console.log(nome);