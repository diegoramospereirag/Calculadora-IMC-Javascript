function multiplicar(x, y) {
  return x * y;
}

let a = multiplicar(4, 2);
console.log(a);

function somar(x, y = 4) {
  return x * y;
}

let f = somar(5);
console.log(f);

let listaProdutos = ['geladeira', 'fogão', 'sofa'];
let listaMaiuscula = listaProdutos.map(primeiraLetraMaiuscula);

function primeiraLetraMaiuscula(elemento) {
  return elemento.charAt(0).toUpperCase() + elemento.slice(1);
}

console.log(listaMaiuscula);
