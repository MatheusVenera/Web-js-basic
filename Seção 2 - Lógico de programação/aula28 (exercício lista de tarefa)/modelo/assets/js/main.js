function tarefa() {

    let botaoAdicionarTarefa = document.querySelector('#botaoAdicionarTarefa');
    let campoAddTarefa = document.querySelector('#campoNovaTarefa');
    let listaUl = document.querySelector('#listaDeTarefas');
    let contadorID = 0;

    function nullValue() {
        campoAddTarefa.style.borderStyle = 'solid';
        campoAddTarefa.style.borderColor = 'red';
        campoAddTarefa.style.borderWidth = '1px';
        campoAddTarefa.placeholder = 'Digite alguma coisa...';
        let msgErro = setInterval(function () {
            campoAddTarefa.style.borderStyle = 'solid';
            campoAddTarefa.style.borderColor = 'black';
            campoAddTarefa.style.borderWidth = '1px';
            campoAddTarefa.placeholder = '';
            clearInterval(msgErro);
        }, 2000);
    };


    function limpaInput() {
        campoAddTarefa.value = '';
        campoAddTarefa.focus();
    };

    function addTarefa() {
        listaUl.innerHTML += `<li id="li-${contadorID}">${campoAddTarefa.value} <button id="${contadorID}" class="botaoApagar">Apagar</button> </li>`;
        contadorID++;
        limpaInput();
        salvarTarefa();
    };

    function apagarTarefa(id) {
        //Pegar só o número do ID
        let tarefaToDelete = document.getElementById(`li-${id}`);
        listaUl.removeChild(tarefaToDelete);
        salvarTarefa();
        return true;
    };

    function salvarTarefa() {
        const liTarefas = listaUl.querySelectorAll('li');
        const listaDeTarefas = [];
        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        };
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    };

    document.addEventListener('click', function (evento) {
        evento.preventDefault(evento);
        if (evento.target === botaoAdicionarTarefa) {
            if (campoAddTarefa.value === '') {
                nullValue();
            } else {
                addTarefa();
            };
        } else if (evento.target !== campoAddTarefa) {
            const botaoClicado = evento.target;
            apagarTarefa(botaoClicado.id);
        }
    });

    function carregarTarefas() {
        let stringJSONTarefas = localStorage.getItem('tarefas');
        let arrayTarefas = JSON.parse(stringJSONTarefas);
        for (const i in arrayTarefas) {
            listaUl.innerHTML += `<li id="li-${contadorID}">${arrayTarefas[i]} <button id="${contadorID}" class="botaoApagar">Apagar</button> </li>`;
            contadorID++;
        };
    };
    document.onload(carregarTarefas());
};
tarefa();