// new Object -> Object.prototype
const objA = {
    chaveA: "A"
    // __proto__: Object.prototype
};

const objB = {
    chaveB: "B"
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveC); //chave própria
console.log(objC.chaveB); //chave B vindo pelo protoypeB
console.log(objC.chaveA); //chave A vindo pelo protoypeA

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(porcentagem) {
    this.preco = this.preco - (this.preco * (porcentagem) / 100)
};

Produto.prototype.aumento = function(porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem) / 100)
};

const p1 = new Produto('Camiseta', 50);
console.log(p1)
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(20)
console.log(p2)

// const p3 = Object.create(Object.prototype);
// console.log(p3) //{}

const p3 = Object.create(Produto.prototype);
p3.preco = 200;
p3.aumento(10);
console.log(p3)

const p4 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    }
})
p4.desconto(50);
console.log(p4)