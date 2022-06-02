function* geradora1() {
    //Finge que tem código aqui
    yield 'Valor 1' //quase mesma coisa q return
    //Finge que tem código aqui
    yield 'Valor 2'
    //Finge que tem código aqui
    yield 'Valor 3'
};

const g1 = geradora1();
// console.log(g1.next().value) retorna só o valor ao nivés do objeto
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
// { value: 'Valor 1', done: false }
// { value: 'Valor 2', done: false }
// { value: 'Valor 3', done: false }
console.log(g1.next());
// { value: undefined, done: true }

function* geradora2() {
    //Finge que tem código aqui
    yield 'Valor 1' //quase mesma coisa q return
    //Finge que tem código aqui
    yield 'Valor 2'
    //Finge que tem código aqui
    yield 'Valor 3'
};
console.log("***************************************")
const g2 = geradora2();

for (const valor of g2) {
    console.log(valor);
};


//gerador infinito (PERIGOSO)

function* contador() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    };
};
const varContador = contador();
console.log(varContador.next().value);//0
console.log(varContador.next().value);//1
console.log(varContador.next().value);//2
console.log(varContador.next().value);//3
console.log(varContador.next().value);//4
console.log(varContador.next().value);//5
console.log(varContador.next().value);//6
console.log(varContador.next().value);//7
console.log(varContador.next().value);//8
console.log(varContador.next().value);//9
console.log(varContador.next().value);//10
console.log(varContador.next().value);//11
console.log(varContador.next().value);//12
console.log(varContador.next().value);//13

console.log("***********************")
//Gerador que delega função para outra geradora

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
};

function* geradora4() {
    yield* geradora3(); //aqui está delegando o yield* para a funcao geradora3
    yield 3;
    yield 4;
    yield 5;
};
const g4 = geradora4();

for (const valor of g4) {
    console.log(valor)
};

function* geradora5() {
    yield function() {
        console.log('Vim do y1')
    };


    yield function() {
        console.log('Vim do y2');
    };
};

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();

function* geradorComReturn() {
    //o return retorna o valor e para o gerador
    yield 1;
    yield 2;
    yield 3;
    return 4;
};
const geradorReturn = geradorComReturn();
console.log(geradorReturn.next().value)//1
console.log(geradorReturn.next().value)//2
console.log(geradorReturn.next().value)//3
console.log(geradorReturn.next().value)//4
console.log(geradorReturn.next().value)//undefined
console.log(geradorReturn.next().value)//undefined