// Declaração de função
function filmes() {
  console.log('The Flash'); // Imprime 'The Flash' no console
}

filmes(); // Chama a função filmes

// Expressão de função
const carro = function () {
  console.log('Tesla'); // Imprime 'Tesla' no console
};

carro(); // Chama a função carro

const caminhão = carro; // Atribui a função carro à variável caminhão

caminhão(); // Chama a função caminhão, que é a mesma que carro
