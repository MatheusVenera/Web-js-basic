//Get
exports.GETPaginaInicial = (req, resp, next) => {
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    resp.render('index');
    return;
}
//POST
exports.POSTPaginaInicial = (req, resp, next) => {
    resp.send(`Ei, sou sua nova rota de POST`);
};