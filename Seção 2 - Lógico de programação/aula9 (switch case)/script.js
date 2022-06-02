const data = new Date();
const diaSemana = data.getDay();

// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo'
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda'
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça'
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta'
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta'
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta'
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado'
// }
function getDiaDaSemana(diaSemana) {

    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda';
        case 2:
            return diaSemanaTexto = 'Terça';
        case 3:
            return diaSemanaTexto = 'Quarta';
        case 4:
            return diaSemanaTexto = 'Quinta';
        case 5:
            return diaSemanaTexto = 'Sexta';
        case 6:
            return diaSemanaTexto = 'Sábado';
        default:
            return 'Algo deu errado, tente novamente';
    };
};

console.log(diaSemana, getDiaDaSemana(diaSemana));