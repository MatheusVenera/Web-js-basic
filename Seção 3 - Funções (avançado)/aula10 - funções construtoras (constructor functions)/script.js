//Factory function (Função fábrica) - fabrica objetos
//Constructor function (Função construtora) - constrói objetos
//Na função construtora, a gente precisa mudar a convenção com que
//escrevemos as funções
//Funções normais (camelCase, iniciando minuscula) criaPessoa()
//Funções construtoras - Pessoa (new)
function Pessoa(nome, sobrenome) {
    //Privadas (não estão disponíveis fora do objeto)
    const ID = 123456;
    const metodoInterno = () => {
        console.log(ID);
    };

    //Públicos, pois utilizam o this
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
};

const p1 = new Pessoa('Matheus', 'Venera');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();