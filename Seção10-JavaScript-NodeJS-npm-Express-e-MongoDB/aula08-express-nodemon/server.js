const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type ="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, resp) => {
    resp.send('Recebi o formulário');
})

app.get('/contato', (req, resp) => {
    resp.send('Obrigado por entrar em contato com a gente');
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});