//Escreva uma função chamada ePaisagem que recebe 2 argumentos
//largura e altura de uma imagem (number)
//Return true se estiver no modo paisagem (deitada, ou seja, largura > altura)
//                    condição, por si só já retorna true ou false
let ePaisagem = (largura, altura) => largura>altura;
console.log(ePaisagem(1000,100));