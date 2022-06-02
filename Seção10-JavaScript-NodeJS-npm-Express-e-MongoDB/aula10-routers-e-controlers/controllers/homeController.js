//Get
exports.GETPaginaInicial = (req, resp) => {
    resp.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type ="text" name="nome">
    Outro campo: <input type ="text" name="outroCampo">
    <button>Enviar</button>
    </form>
    `);
}
//POST
exports.POSTPaginaInicial = (req, resp) => {
    resp.send(`Ei, sou sua nova rota de POST`);
};