//Get
exports.GETPaginaInicial = (req, resp, next) => {
    resp.render('index');
}
//POST
exports.POSTPaginaInicial = (req, resp, next) => {
    resp.send(`Ei, sou sua nova rota de POST`);
};