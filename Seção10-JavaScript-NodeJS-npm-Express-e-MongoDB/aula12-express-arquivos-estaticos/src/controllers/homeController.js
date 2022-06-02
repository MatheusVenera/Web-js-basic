//Get
exports.GETPaginaInicial = (req, resp) => {
    resp.render('index');
}
//POST
exports.POSTPaginaInicial = (req, resp) => {
    resp.send(`Ei, sou sua nova rota de POST`);
};