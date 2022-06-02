const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true) //async = true
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
                }
        });
    })
};

document.addEventListener('click', (evento) => {
    const elemento = evento.target;
    const tag = elemento.tagName.toLowerCase()
    if (tag === 'a')
        evento.preventDefault();
    carregaPagina(elemento);
})

async function carregaPagina(elemento) {
    try {
        const href = elemento.getAttribute('href');

        const response = await request({
            method: 'GET',
            url: href
        });
        carregaResultado(response)
    } catch (error) {
        console.log(error)
    }
};

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
};