const friends = ['Thiago', 'Kaio', 'Breno'];

// O loop for-of é usado para iterar sobre os elementos de uma array.
// Em cada iteração, a variável 'i' contém diretamente o valor do elemento atual da array, em vez dos índices.
// Isso torna o código mais legível e conveniente, especialmente quando você está interessado nos valores dos elementos da array, como é o caso aqui.
for (let i of friends) {
  console.log(i); // Imprime cada elemento da array
}
