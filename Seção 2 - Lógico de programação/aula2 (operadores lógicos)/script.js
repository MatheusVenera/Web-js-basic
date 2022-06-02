/*
Operadores lógicos
&& -> AND
|| -> OR
! -> NOT
*/

console.log(true && true);
console.log(false || false || true);
console.log(!true);

const usuario = 'Matheus';
const senha = '12345';
if (usuario === 'Matheus' && senha === '123') {
    console.log('Verdadeiro');
} else if (senha === '1234') {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
};
console.log(!true); //retorna false
console.log(!!true); //retorna true, inverteu duas vezes com o !
console.log(!!!true); //retorna false