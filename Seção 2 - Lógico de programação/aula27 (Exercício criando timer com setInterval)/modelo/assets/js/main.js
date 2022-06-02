//Monta a hora baseado em data, no unix timestamp, ou seja, 00:00:00 01/01/1970]
//A partir daí, vai contado, assim o relógio já está montado, porém, fica com limite de um dia, ou seja, 23:59:59, depois disso, zera o timer
//Desta forma, ele não está de fato montando um timer, mas sim exibindo a hora a partir do unix timestamp
//É muito mais prático de fazer, porém é gambiarra e se a pessoa quiser contar um tempo maior que 23:59:59, não dá
//Forma do professor
// function getTimeFromSeconds(segundos) {
//     const data = new Date(segundos * 1000);
//     return data.toLocaleTimeString('pt-BR', {
//         hour12: false,
//         timeZone: 'GMT'
//     });
// };
function relogio() {

    let h1relogio = document.querySelector('#h1timer');
    let botaoIniciar = document.querySelector('#iniciar');
    let botaoPausar = document.querySelector('#pausar');
    let botaoZerar = document.querySelector('#zerar');


    function addZero(numero) {
        if (numero < 10) {
            return `0${numero}`
        };
        return numero;
    };

    let segundos = 0;
    let minutos = 0;
    let horas = 0;
    let timer;
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            if (minutos == 59 && segundos == 60) {
                horas++;
            };
            if (segundos == 60) {
                minutos++;
                segundos = 0;
            };
            relogio = `${addZero(horas)}:${addZero(minutos)}:${addZero(segundos)}`;
            h1relogio.innerHTML = relogio;
        }, 1000);
    };

    let piscar;
    function piscarRelogio() {
        piscar = setInterval(function () {
            if (h1relogio.style.visibility === 'visible') {
                h1relogio.style.visibility = 'hidden';
            } else {
                h1relogio.style.visibility = 'visible';
            };
        }, 500);
    };


    //Ao invés de criar um listener pra cada botão, cria um geral pra depois descobrir em qual foi. Se tiver muitos botões, facilita o trabalho
    document.addEventListener('click', function (evento) {
        if (evento.target === botaoIniciar) {
            h1relogio.style.color = 'black';
            h1relogio.style.visibility = 'visible';
            clearInterval(timer);
            clearInterval(piscar);
            iniciaRelogio();
        } else if (evento.target === botaoPausar) {
            if (h1relogio.style.color === 'red') {
                h1relogio.style.color = 'black';
                h1relogio.style.visibility = 'visible';
                clearInterval(timer);
                clearInterval(piscar);
                iniciaRelogio();
            } else if (h1relogio.style.color === 'black') {
                h1relogio.style.color = 'red';
                h1relogio.style.visibility = 'visible';
                piscarRelogio();
                clearInterval(timer);
            };
        } else if (evento.target == botaoZerar) {
            h1relogio.style.color = 'black';
            h1relogio.style.visibility = 'visible';
            clearInterval(timer);
            clearInterval(piscar);
            segundos = 0;
            h1relogio.innerHTML = '00:00:00';
        };
    });
};
relogio();

// botaoIniciar.addEventListener('click', function (event) {
//     // h1relogio.classList.remove('pausado'); forma do professor
//     h1relogio.style.color = 'black';
//     h1relogio.style.visibility = 'visible';
//     clearInterval(timer);
//     clearInterval(piscar);
//     iniciaRelogio();
// });

// botaoPausar.addEventListener('click', function (event) {
//     // h1relogio.classList.add('pausado'); forma do professor
//     h1relogio.style.color = 'red';
//     h1relogio.style.visibility = 'visible';
//     piscarRelogio();
//     clearInterval(timer);
// });

// botaoZerar.addEventListener('click', function (event) {
//     h1relogio.style.color = 'black';
//     h1relogio.style.visibility = 'visible';
//     clearInterval(timer);
//     clearInterval(piscar);
//     segundos = 0;
//     h1relogio.innerHTML = '00:00:00';
// });