//Trocar de lugar conforme os comentários
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

[varA, varB, varC] = ['B', 'C', 'A'];
console.log(varA, varB, varC);

//Outra forma
// const varATemp = varA;
// varA = varB;
// varB = varC;
// varC = varATemp;
// console.log(varA, varB, varC);