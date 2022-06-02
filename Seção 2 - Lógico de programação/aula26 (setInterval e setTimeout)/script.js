function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
};

//setInterval executa a cada determinado tempo sem parar, a não ser
//que seja interrompido por outra coisa
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);


//setTimeout executa algo uma única vez depois de determinado tempo
//que o código é executado
setTimeout(function() {
    clearInterval(timer);
}, 5000);
