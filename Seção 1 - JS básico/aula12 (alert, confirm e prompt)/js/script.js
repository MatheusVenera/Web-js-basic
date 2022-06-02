//Feito no console do navegador (NÃO VAI FUNCIONAR AQUI)
//Projeto calculadora
alert('Projeto calculadora simples');
alert('Essa calculadora faz calculo de apenas 2 números e apenas das 4 operações básicas');
let numero1 = Number(prompt('Digite o primeiro número: '));
let operacao = prompt('Digite a operação (+ - * /): ');
let numero2 = Number(prompt('Digite o segundo número: '));
if (operacao == '+') {
    alert(`Seu resultado é ${numero1 + numero2}`)
} if (operacao == '-') {
    alert(`Seu resultado é ${numero1 - numero2}`)
} if (operacao == '*') {
    alert(`Seu resultado é ${numero1 * numero2}`)
} if (operacao == '/') {
    alert(`Seu resultado é ${numero1 / numero2}`)
}
alert(`Seu resultado é ${resultado}`)
    