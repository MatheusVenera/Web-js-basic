//Escopo léxico - a função conhece o local onde ela foi declarada,
//tudo que foi declarada dentro dela e os "vizinhos", na vdd, em todos
//os escopos, até o global
const nome =  'Matheus';

function falaNome() {
    const nome = 'João'
    console.log(nome)
};
falaNome();

function usaFalaNome() {
    const nome = 'Luiz'
    falaNome();
};
usaFalaNome();