let form = document.querySelector('.formulario');
let inputCPF = form.querySelector('.cpf-validar');
form.addEventListener('submit', evento => {
  evento.preventDefault();
  if (inputCPF.value !== '') {
    let validacpf = new ValidaCPF(inputCPF.value);
    if (!validacpf.valida()) {
      console.log('CPF inválido');
    }
  };
});
class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  };

  isSequence() {
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }

  geraNovoCpf() {
    let cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    let digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    let digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCpf = cpfSemDigitos + digito1 + digito2;
  };

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    };

    let resultado = 11 - (total % 11);
    return resultado <= 9 ? String(resultado) : '0';
  };

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequence()) return false;
    this.geraNovoCpf();

    return (this.novoCpf === this.cpfLimpo);
  };

};

