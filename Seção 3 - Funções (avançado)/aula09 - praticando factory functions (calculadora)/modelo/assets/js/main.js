function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', evento => {
                if (evento.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        cliqueBotes() {
            document.addEventListener('click', evento => {
                const elemento = evento.target;
                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (elemento.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            //Não usar, pois é perigoso visto que permite que qualquer
            //script seja executado pelo eval
            //Se usar, fazer filtros para aumentar a segurança
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                };
                this.display.value = conta;
            } catch (error) {
                alert('Conta inválida');
            }
        },
    };
};

const calculadora = criaCalculadora();
calculadora.inicia();