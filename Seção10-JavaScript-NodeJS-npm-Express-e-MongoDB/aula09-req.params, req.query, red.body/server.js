const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, resp) => {
    resp.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type ="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});
app.post('/', (req, resp) => {
    console.log(req.body);
    resp.send(`O que você me enviou foi: ${req.body.nome}`);
})

app.get('/testes/:idUsuarios?/:parametro?', (req, resp) => {
    console.log(req.params.idUsuarios);
    console.log(req.params.parametro);
    console.log(req.query)
    resp.send(req.params);
})

app.listen(3000, () => {
    console.log('listening on port 3000')
});