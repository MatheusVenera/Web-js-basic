//Superclass (classe mãe/classe pai)
function ContaBancaria(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

ContaBancaria.prototype.sacar = function(valor){
    if (this.saldo < valor) {
        return `Você não tem saldo suficiente!\n${this.verSaldo()}\n`;
    };
    this.saldo -= valor;
    return this.verSaldo();
};
ContaBancaria.prototype.depositar = function(valor){
    this.saldo += valor;
    return this.verSaldo();
};
ContaBancaria.prototype.verSaldo = function(){
    return `Ag/c: ${this.agencia}/${this.conta}\nSeu saldo é de R$${this.saldo.toFixed(2)}\n`;
};


function ContaCorrente(agencia, conta, saldo, limite) {
    ContaBancaria.call(this, agencia, conta, saldo);
    this.limite = limite
};

ContaCorrente.prototype = Object.create(ContaBancaria.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)) {
        return `Você não tem saldo suficiente!\n${this.verSaldo()}\n`;
    };
    this.saldo -= valor;
    return this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
    ContaBancaria.call(this, agencia, conta, saldo);
};

ContaPoupanca.prototype = Object.create(ContaBancaria.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca('0101', '9716564', 0);
console.log(contaPoupanca.depositar(10));
console.log(contaPoupanca.sacar(10));