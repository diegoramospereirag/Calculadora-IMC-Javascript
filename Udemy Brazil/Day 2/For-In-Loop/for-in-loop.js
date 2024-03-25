// Definição de um objeto chamado myCar com algumas propriedades
const myCar = {
  model: 'Mustang', // Propriedade "model" com o valor 'Mustang'
  year: 2023, // Propriedade "year" com o valor 2023
  color: 'Black', // Propriedade "color" com o valor 'Black'
};

// Usando um loop for-in para iterar sobre todas as propriedades do objeto myCar
// É importante incluir a palavra-chave 'in' na declaração do loop for-in
for (let i in myCar) {
  console.log(i, myCar[i]); // Imprime o nome da propriedade (i) e o valor correspondente (myCar[i])
}

// O loop for-in permite percorrer todas as propriedades de um objeto e executar uma ação para cada uma delas.
// A variável 'i' recebe o nome da propriedade atual em cada iteração, e 'myCar[i]' acessa o valor correspondente dessa propriedade.
// Isso permite imprimir todos os nomes e valores das propriedades do objeto myCar.
