class validaFormulario {
  constructor() {
    this.form = document.querySelector('.formulario');
    this.eventos();
  };

  eventos() {
    this.form.addEventListener('submit', evento => {
      this.handleSubmit(evento);
    })
  };

  handleSubmit(evento) {
    //Previne default (reiniciar página)
    evento.preventDefault();

    //Pega campos
    this.inputNome = this.form.querySelector('.nome-validar');
    this.inputSobrenome = this.form.querySelector('.sobrenome-validar');
    this.inputCPF = this.form.querySelector('.cpf-validar');
    this.inputUsuario = this.form.querySelector('.usuario-validar');
    this.inputSenha = this.form.querySelector('.senha-validar');
    this.inputRepetirSenha = this.form.querySelector('.repetir-senha-validar');
    this.listaCampos = [this.inputNome, this.inputSobrenome, this.inputCPF,
    this.inputUsuario, this.inputSenha, this.inputRepetirSenha];

    //Validações
    console.log(this.confereCampoVazio());
    console.log(this.confereTamanhoInvalido(this.inputUsuario));
    console.log(this.confereTamanhoInvalido(this.inputSenha));
    console.log(this.confereCaracteresInvalidos(this.inputUsuario));
    console.log(this.confereSenhasDiferentes());
  }

  confereCampoVazio() {
    for (const campo of this.listaCampos) {
      if (campo.value === '') {
        return 'campo vazio';
      }
    };
  };

  confereCaracteresInvalidos(campoUsuario) {
    if (String(campoUsuario.value).match(/\W|_/)) {
      return 'caracteres invalidos';
    }
  };

  confereTamanhoInvalido(campo) {
    if (campo === this.inputUsuario) {
      if (this.inputUsuario.value.length < 3 || this.inputUsuario.value.length > 12) {
        return 'usuario'
      }
    } else if (campo === this.inputSenha) {
      if (this.inputSenha.value.length < 6 || this.inputSenha.value.length > 12) {
        return 'senha'
      }
    };
  };

  confereSenhasDiferentes() {
    if (this.inputSenha.value !== this.inputRepetirSenha.value) {
      return 'senhas diferentes';
    }
  }
};
let validarForm = new validaFormulario();