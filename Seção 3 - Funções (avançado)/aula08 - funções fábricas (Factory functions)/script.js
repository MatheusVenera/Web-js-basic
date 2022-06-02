//Factory function (Função fábrica) - fabrica objetos
//Constructor function (Função construtora) - constrói objetos
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está falando sobre ${assunto}`
        },

        altura: altura,
        peso: peso,
        imc() {
            const indiceIMC = this.peso / (this.altura ** 2);
            return indiceIMC.toFixed(2);
        },
    };
};

const p1 = criaPessoa('Matheus', 'Venera', 1.77, 55);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());