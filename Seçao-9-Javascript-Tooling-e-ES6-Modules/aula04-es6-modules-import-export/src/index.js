import { nome as nome2, lastname, idade, soma, Pessoa } from "./modulo1";
import * as MeuModulo from "./modulo1";
import subtracaoDefault from "./modulo1"; //importando o padrão/default do modulo

console.log(MeuModulo);

const p1 = new Pessoa('Luiz', 'Otávio');
const nome = 'João'
console.log(nome2, lastname, idade);
console.log(soma(5,5));
console.log(p1)
console.log(subtracaoDefault(5,3))