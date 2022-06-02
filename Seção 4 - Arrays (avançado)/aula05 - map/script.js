//Dobre os números
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const numerosDobrados = numeros.map(valor => valor*2);
// console.log(numerosDobrados);



//Para cada elemento
//Retorna apenas uma string com o nome da pessoa
//Remova a chave nome do objeto
//Adicione uma chave id em cada objeto


const pessoasOriginal = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

//Retorna apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

console.log("************")


//Remova a chave nome do objeto
const idades = pessoas.map((objeto) => ({idade: objeto.idade}));
console.log(idades);


console.log("************")


//Adicione uma chave id em cada objeto
const comIds = pessoas.map(function(objeto) {
    objeto.id = (Math.random() * (Number.MAX_SAFE_INTEGER - 1) + 1).toFixed(0);
    return objeto;
});
console.log(comIds)