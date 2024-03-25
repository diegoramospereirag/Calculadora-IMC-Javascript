let funcionarios = [
  { nome: 'Davi', idade: 18 },
  { nome: 'Luiz', idade: 23 },
  { nome: 'Thiago', idade: 27 },
  { nome: 'Marcio', idade: 56 },
];

let pessoasListagem = funcionarios.filter(function (valor) {
  return valor.nome.length < 5;
});

let produtos = [
  { id: 1, descricao: 'Smartphone', categoria: 'Eletrônico' },
  { id: 2, descricao: 'Notebook', categoria: 'Eletrônico' },
  { id: 3, descricao: 'Geladeira', categoria: 'Eletrôdomestico' },
  { id: 4, descricao: 'Mesa', categoria: 'Eletrôdomestico' },
];

function buscarEletronico(valor) {
  return valor.categoria == 'Eletrônico';
}

let eletronico = produtos.filter(buscarEletronico);

console.log(eletronico);
