//Array é do tipo object
let alunos = ['Matheus', 'Cecília', 'Vinicios', 'Julia'];
console.log(typeof alunos);
//Para ter certeza que é um array e não outro objeto, usar:
console.log(alunos instanceof Array); //se for array, retorna true

//Podem ser vários tipos de dados
let dados = ['alunos', 1, 0.4, null, true];
console.log(dados);
if (dados[3] == null) {
    console.log('O item 3 é nulo')
}

alunos = ['Matheus', 'Cecília', 'Vinicios', 'Julia'];
//Adiciona um item no indíce indicado
alunos[1] = 'João';
console.log(alunos);

//Adiciona ao final
alunos.push('José');
console.log(alunos);

//Adiciona no começo
alunos.unshift('Cleber');
console.log(alunos);

//Reverte a lista
console.log(alunos.reverse());

//Mostra o tamanho da lista
console.log(alunos.length);

//Remove o último item e o retorna
let ultimoItem = alunos.pop();
console.log(ultimoItem);
console.log(alunos);

//Remove o prmeiro item e o retorna (altera índice, pois os outros "descem" um índice)
//Antes:      [0]        [1]       [2]
//          ['Item1', 'Item 2', 'Item 3']
//
//Depois:     [0]        [1]
//          ['Item2', 'Item 3']
let primeiroItem = alunos.shift();
console.log(primeiroItem);
console.log(alunos);

//Remove sem alterar índice, ou seja, preenche com elemento vazio (undefined)
console.log(alunos);
delete alunos[2];
console.log(alunos[100]) //índice que não existe, retorna undefined

alunos = ['Matheus', 'Cecília', 'Vinicios', 'Julia'];

//Fatiar de um elemento até outro
console.log(alunos.slice(0,3));
alunos = ['Matheus', 'Cecília', 'Vinicios', 'Julia'];
console.log(alunos.slice(-3));

