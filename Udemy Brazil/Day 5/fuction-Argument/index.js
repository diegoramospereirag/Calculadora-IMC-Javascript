function price(a, b) {
  total = 0; // Inicializa a variável total como zero
  for (let value of arguments) total += value; // Percorre todos os argumentos passados para a função e soma seus valores ao total
  return total; // Retorna o total calculado
}

console.log(price(10, 20, 90, 130)); // Chama a função price com argumentos 10, 20, 90 e 130 e imprime o resultado no console
