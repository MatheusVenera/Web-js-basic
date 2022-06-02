const a1 = [1,2,3];
const a2 = [4,5,6];
// const a3 = a1.concat(a2); //[1,2,3,4,5,6]
// const a3 = a2.concat(a1); [4,5,6,1,2,3]
// const a4 = a1.concat(a2, [7,8,9], 'Matheus'); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Matheus' ]
const a3 = [...a1, 'Matheus', ...a2, ...[7,8,9]];
//[ 1, 2, 3, 'Matheus', 4, 5, 6, 7, 8, 9 ]
