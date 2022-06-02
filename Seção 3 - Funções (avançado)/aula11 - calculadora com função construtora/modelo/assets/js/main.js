function Calculadora() {

    this.display = document.querySelector('.display');
    this.display.focus();
    this.divHistorico = document.querySelector('.historico');
    this.historico = [];

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.exibirHistorico = () => {
        this.divHistorico.innerHTML += `${this.historico[this.historico.length-1]} <br>`;
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', evento => {
            if (evento.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.cliqueBotoes = () => {
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
    };

    this.btnParaDisplay = function(valor) {
        this.display.value += valor;
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };
    this.realizaConta = () => {
        //Não usar, pois é perigoso visto que permite que qualquer
        //script seja executado pelo eval
        //Se usar, fazer filtros para aumentar a segurança
        let conta = this.display.value;
        this.historico.push(conta);
        try {
            conta = eval(conta);
            if (!conta) {
                alert('Conta inválida');
                return;
            };
            this.display.value = conta;
            let ultimoValor = this.historico.pop();
            ultimoValor += `=${conta}`;
            this.historico.push(ultimoValor);
            this.exibirHistorico();

        } catch (error) {
            alert('Conta inválida');
        }
    };
};

const calculadora = new Calculadora();
calculadora.inicia();