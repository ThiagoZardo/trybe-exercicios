const sum = (...number) => number.reduce(((acumulator, currentValue) => acumulator + currentValue), 0);
  


console.log(sum(5, 5, 5, 5))