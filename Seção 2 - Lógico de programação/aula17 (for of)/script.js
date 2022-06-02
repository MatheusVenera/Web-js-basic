// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (sem índice)(iteráveis, arrays ou objetos)


// Cada letra de uma string
const nome = 'Luiz Otávio';

for (const valor of nome) {
    console.log(valor);
};
console.log('#############');

//Cada valor da uma lista
const nomes = ['Matheus', 'Vinicios', 'Julia', 'Cecilia'];
for (const valor of nomes) {
    console.log(valor);
};
console.log('#############');

//ForEach com arrow function
nomes.forEach(valor => {
    console.log(valor);
    console.log()
});
console.log('#############');

//ForEach com function normal
nomes.forEach(function(valor, indice, arrayCompleto) {
    console.log(valor, indice, arrayCompleto);
});