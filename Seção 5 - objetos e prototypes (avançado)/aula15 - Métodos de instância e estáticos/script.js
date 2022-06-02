function teste() {
    console.log('Sou um teste')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    };

    aumentarVolume() {
        this.volume += 2;
    };


    //Método de instância
    diminuirVolume() {
        this.volume -= 2;
    };

    //Método estático
    static somaValores(x, y) {
        return x + y
    }
};

const controle1 = new ControleRemoto('Samsung');
controle1.aumentarVolume();
console.log(ControleRemoto.somaValores(2,4));