const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler')
// const pessoas = [
//     {nome: 'Matheus'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Luiza'},
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    let dados = await ler(caminho);
    imprimeDados(dados);
};

function imprimeDados(dados) {
    dados = JSON.parse(dados);
    
    dados.forEach(val => console.log(val));
}

leArquivo(caminhoArquivo)