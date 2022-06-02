class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    };

    ligar() {
        if (this.ligado) return
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) return
        this.ligado = false;
    }
};

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
};


class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Método alterar ligado')
    }

    falaOi() {
        console.log('oi')
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
const t1 = new Tablet('iPad', true);
t1.ligar()
t1.falaOi()