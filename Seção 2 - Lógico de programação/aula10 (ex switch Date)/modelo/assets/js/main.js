//Função feita manualmente (antiga)
// function mostrarData() {
//     let h1Data = document.querySelector('#h1Data');
//     let data = new Date();
//     let diaSemana = data.getDay();
//     let dia = data.getDate();
//     dia = dia >=10 ? dia : `0${dia}`;
//     let mes = data.getMonth();
//     let ano = data.getFullYear();
//     let hora = data.getHours() >= 10 ? data.getHours() : `0${data.getHours()}`;
//     // hora = hora >= 10 ? hora : `0${hora}`;
//     let minutos = data.getMinutes() >= 10 ? data.getMinutes() : `0${data.getMinutes()}`;
//     // minutos = minutos >= 10 ? minutos : `0${minutos}`;
//     //Dia da semana refatorado (de 66 para 4 linhas)
//     let diasDaSemanaString = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
//     let mesesString = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
//     diaSemana = diasDaSemanaString[diaSemana];
//     mes = mesesString[mes];
//     //Dia da semana e mes com switch (antigo)---------------------------------------------------------------------------------------------------------------------------
//     // switch (diaSemana) {
//     //     case 0:
//     //         diaSemana = 'Domingo';
//     //         break;
//     //     case 1:
//     //         diaSemana = 'Segunda-feira';
//     //         break;
//     //     case 2:
//     //         diaSemana = 'Terça-feira';
//     //         break;
//     //     case 3:
//     //         diaSemana = 'Quarta-feira';
//     //         break;
//     //     case 4:
//     //         diaSemana = 'Quinta-feira';
//     //         break;
//     //     case 5:
//     //         diaSemana = 'Sexta-feira';
//     //         break;
//     //     case 6:
//     //         diaSemana = 'Sábado';
//     //         break;
//     //     default:
//     //         diaSemana = 'Algo de errado aconteceu';
//     // };
//     //Mês
//     // switch (mes) {
//     //     case 0:
//     //         mes = 'Janeiro';
//     //         break;
//     //     case 1:
//     //         mes = 'Fevereiro';
//     //         break;
//     //     case 2:
//     //         mes = 'Março';
//     //         break;
//     //     case 3:
//     //         mes = 'Abril';
//     //         break;
//     //     case 4:
//     //         mes = 'Maio';
//     //         break;
//     //     case 5:
//     //         mes = 'Junho';
//     //         break;
//     //     case 6:
//     //         mes = 'Julho';
//     //         break;
//     //     case 7:
//     //         mes = 'Agosto';
//     //         break;
//     //     case 8:
//     //         mes = 'Setembro';
//     //         break;
//     //     case 9:
//     //         mes = 'Outubro';
//     //         break;
//     //     case 10:
//     //         mes = 'Novembro';
//     //         break;
//     //     case 11:
//     //         mes = 'Dezembro';
//     //         break;
//     //     default:
//     //         mes = 'Algo de errado aconteceu';
//     // };
//     return h1Data.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} <br> ${hora}:${minutos}`;
// };
// mostrarData();


//Feita segundo documentação (refatorado)
const h1Data = document.querySelector('#h1Data');
function mostraHora() {
    let data = new Date();
    return data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' });
};
setInterval(function () {
    let data = mostraHora();
    h1Data.innerHTML = `${data}`;
}, 1000);
