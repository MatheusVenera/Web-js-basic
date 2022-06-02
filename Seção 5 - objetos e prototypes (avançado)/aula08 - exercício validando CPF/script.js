// function validarCPF(cpf) {
//     //Etapa 1
//     let cpfLimpo = cpf.replace(/\D+/g, '');
//     let cpfLimpoSemDigito = cpfLimpo.slice(0, -2)
//     let cpfArray = Array.from(cpfLimpoSemDigito);
//     let soma = 0;
//     cpfArray.reduce(function(acumulador, valor) {
//         soma += (Number(valor) * acumulador);
//         acumulador--;
//         return acumulador;
//     }, 10);
//     let primeiroDigito = 11 - (soma % 11);
//     if (primeiroDigito > 9) {primeiroDigito = 0};
//     cpfArray.push(primeiroDigito.toString());

//     //Etapa 2
//     soma = 0;
//     cpfArray.reduce(function(acumulador, valor) {
//         soma += (Number(valor) * acumulador);
//         acumulador--;
//         return acumulador;
//     }, 11);
//     let segundoDigito = 11 - (soma % 11);
//     if (segundoDigito > 9) {segundoDigito = 0};
//     cpfArray.push(segundoDigito.toString());
//     let cpfResultante = cpfArray.join('');
//     console.log(cpfResultante);
//     if (cpfResultante === cpfLimpo) {
//         return true
//     }
//     return false
// };
// console.log(validarCPF('096.183.879-50'));


function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    let cpfParcial = this.cpfLimpo.slice(0, -2);
    let digito1 = this.criaDigito(cpfParcial);
    let digito2 = this.criaDigito(cpfParcial + digito1);

    let novoCpf = cpfParcial + digito1 + digito2;
    console.log(novoCpf)
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    let cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--;
        return ac;
    }, 0);

    let digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
    let sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};
let cpf = new ValidaCPF('111.111.111-11');
console.log(cpf.valida())