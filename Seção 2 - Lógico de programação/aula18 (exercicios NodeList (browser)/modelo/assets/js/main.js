const divParagrafos = document.querySelector('.paragrafos');

//NodeList, se comporta bem perecido com uma lista, mas não é
//Retorna [p,p,p,p];
const listParagrafos = divParagrafos.querySelectorAll('p');
// const estiloBody = getComputedStyle(document.body);
// const backgroundColorBody = estiloBody.backgroundColor;
for (const paragrafo of listParagrafos) {
    paragrafo.style.backgroundColor = backgroundColorBody;
    paragrafo.style.color = 'white';  
};