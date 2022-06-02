let texto = 'texto';
console.log(texto.replace('x', 's')); //substitui um texto por outro

texto = 'texto';
console.log(texto.length); //retorna o tamanho da string

texto = 'apenas um texto';
console.log(texto.split(' ')); //divide a string pelo caractere, sem ele
texto = 'o rato roeu a roupa do rei de roma';
console.log(texto.split('r'));

texto = 'apenas um texto';
console.log(texto.slice(0,6)); //fatia uma parte da string
console.log(texto.slice(2)); //fatia a partir do numero, sentido -->
console.log(texto.slice(-2)); //fatia a partir do numero, sentido <--

texto = 'apenas um texto';
console.log(texto.substring(0,6)); //mesma coisa q o slice

texto = 'apenas um texto';
console.log(texto.includes('um')); //retorna se contem uma sub-string

texto = 'TEXTO';
console.log(texto.toLowerCase()) //transforma em minusculo

texto = 'texto';
console.log(texto.toUpperCase()); //transforma em maiusculo

texto = 'apenas um texto ';
let x = 3;
console.log(texto.repeat(x)) //repete uma string x vezes 

texto = 'apenas mais um texto                        a       ';
console.log(texto.trim()); //remove o espaço em branco do final