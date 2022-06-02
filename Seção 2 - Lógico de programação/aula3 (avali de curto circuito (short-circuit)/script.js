/*
&& -> false && true -> retorna o primeiro valor false (O VALOR MESMO)

VALORES AVALIADOS COMO FALSO (falsy values)
false = valor literalmente false
0
"" '' `` (string vazia)
null
undefined
NaN
*/
console.log('Luiz Otávio' && 0 && 'Maria'); //retorna O VALOR FALSO
console.log('Luiz Otávio' && true && 'Maria'); //retorna o ÚLTIMO
//VALOR caso tudo seja verdadeiro
console.log('Luiz' && true && NaN); //o resultado é falso, e retorna
// O VALOR falso
console.log('Luiz' && null && 'Maria' && false); //retorna o primeiro
//valor false


/*
|| -> true || false -> retora o "valor verdadeiro"
*/

console.log(0 || false || null || 'Luiz' || true); //exibe o primeiro
//que for verdadeiro

console.log(0 || false || null || '' || NaN); //retorna o ÚLTIMO false