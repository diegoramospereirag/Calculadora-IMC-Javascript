let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = numbers.reduce(function (total, numero) {
  return total + numero;
}, 0);

console.log(total);
