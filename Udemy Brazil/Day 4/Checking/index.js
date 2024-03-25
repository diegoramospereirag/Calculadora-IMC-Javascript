let tempLodon = [13, 8, 4, 2, 6];

let tempPositiive = tempLodon.filter((value) => value >= -1);
if (tempPositiive == false) {
  console.log('Cuidado, Pista congeladas!');
} else {
  console.log('Clima leve, Pistas liberadas!');
}
