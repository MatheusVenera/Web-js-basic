const HomeModel = require('../models/HomeModel');
HomeModel.create(
    {
        titulo: 'Um título de testes',
        descricao: 'Uma descrição de testes'
    }
)
.then(dados => {
    console.log(dados);
}).catch(err => {console.error(err);});
//Get
exports.GETPaginaInicial = (req, resp, next) => {
    resp.render('index');
}
//POST
exports.POSTPaginaInicial = (req, resp, next) => {
    resp.send(`Ei, sou sua nova rota de POST`);
};