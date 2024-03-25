let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let num = number.map(function (valor) {
  return valor * 2;
});

let funcionarios = [
  { id: 1, nome: 'Davi', idade: 18 },
  { id: 3, nome: 'Luiz', idade: 23 },
  { id: 2, nome: 'Thiago', idade: 53 },
  { id: 4, nome: 'Marcio', idade: 56 },
];

function buscarIdade(element) {
  return element.idade < 50;
}

let nomes = funcionarios.map(buscarIdade);
console.log(nomes);
