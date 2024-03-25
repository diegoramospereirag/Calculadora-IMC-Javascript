let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10];

numbers.forEach(function (number) {
  console.log(number);
});

tot = 0;
numbers.forEach((valor) => {
  tot += valor;
});
console.log(tot);
