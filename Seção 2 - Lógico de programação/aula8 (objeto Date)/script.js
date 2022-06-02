// const data = new Date();
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); //01/01/1970 //marco 0, Timestamp unix
// const data = new Date(2019, 3); //a, m, d, h, M, s, ms
let data = new Date(); //Quando vazio, pega a data atual
console.log('Dia:', data.getDate());
console.log('Mês:', data.getMonth()); //Mes é um array, começa do 0
console.log('Ano:', data.getFullYear());
console.log('Hora:', data.getHours());
console.log('Minutos:', data.getMinutes());
console.log('Segundos:', data.getSeconds());
console.log('Milissegundo:', data.getMilliseconds());
console.log('Dia da semana:', data.getDay()); //Semana começa no Domingo (0) e termina no sábado (6)
console.log(data.toString());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
};

//Formatando data
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
};

data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);