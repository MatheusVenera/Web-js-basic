function formulario() {
    let form = document.querySelector('#form');
    let resultado = document.querySelector('#resultado');
    const listaPessoas = [];
    function recebeEventoForm(evento) {
        evento.preventDefault();
        let nome = form.querySelector('#nome');
        let sobrenome = form.querySelector('#sobrenome');
        let peso = form.querySelector('#peso');
        let altura = form.querySelector('#altura');

        function criarPessoa(nome, sobrenome, peso, altura) {
            return pessoa = {
                nome,
                sobrenome,
                peso,
                altura
            };
        };
        let novaPessoa = criarPessoa(nome.value, sobrenome.value, peso.value, altura.value);
        listaPessoas.push(novaPessoa);
        console.log(listaPessoas);
            resultado.innerHTML += `Nome: ${listaPessoas[listaPessoas.length-1].nome}<br>`;
            resultado.innerHTML += `Sobrenome: ${listaPessoas[listaPessoas.length-1].sobrenome}<br>`;
            resultado.innerHTML += `Peso: ${listaPessoas[listaPessoas.length-1].peso}<br>`;
            resultado.innerHTML += `Altura: ${listaPessoas[listaPessoas.length-1].altura}<br><br>`;

    };
    form.addEventListener('submit', recebeEventoForm);
};
formulario();