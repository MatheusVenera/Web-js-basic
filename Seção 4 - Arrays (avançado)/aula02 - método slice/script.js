const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//splice(onde começar, quantos elementos remover, elementopraADD1, elementopraADD2, elementopraADD3)
//splice retorna um array dos itens removidos
//o pop retorna o valor removido apenas
const removidos = nomes.splice(3, 2);
console.log(removidos)

console.log(nomes);
//Simulando pop
// const removidos = nomes.splice(-1, 1)

//Simulando shift
//const removidos = nomes.splice(0, 1)

//Simulando push
// nomes.splice(nomes.length, 0, 'Luiz');

//Simulando unshift
//nomes.splice(0, 0, 'Luiz')
