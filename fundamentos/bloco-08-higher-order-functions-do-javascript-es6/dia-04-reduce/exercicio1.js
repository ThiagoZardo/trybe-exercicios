const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

//1 - Dada uma matriz, transforme em um array.
function flatten(callBack) {
  return callBack.reduce((result, number) => result.concat(number), []);
}

console.log(flatten(arrays));