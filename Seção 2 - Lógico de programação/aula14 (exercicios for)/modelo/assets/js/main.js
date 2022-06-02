// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (sem índice)(iteráveis, arrays ou objetos)


const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];
// Minha forma
// const container = document.querySelector('.container');
// for (let i = 0; i < elementos.length; i++) {
//     container.innerHTML += `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}>`;    
// };


//Forma do professor
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);  
};
container.appendChild(div);