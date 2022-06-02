function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra/esconde a chave
            value: nome, //valor da chave
            writable: true, //se pode alterar valor da chave
            configurable: true //se pode apagar chave ou reconfigurar ela
        },
        preco: {
            enumerable: true, //mostra/esconde a chave
            value: nome, //valor da chave
            writable: true, //se pode alterar valor da chave
            configurable: true //se pode apagar chave ou reconfigurar ela
        }
    });

    // Object.defineProperty(this, 'estoque', {
    //     enumerable: false, //mostra/esconde a chave
    //     value: estoque, //valor da chave
    //     writable: false, //se pode alterar valor da chave
    //     configurable: false //se pode apagar chave ou reconfigurar ela
    // });
};

const p1 = new Produto('Camiseta', 20, 3);

for (const chave in p1) {
    console.log(chave)
};



