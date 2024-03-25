let airport = 'SEA'; // Define o código do aeroporto

switch (airport) {
  case 'MCO': // Verifica se o código do aeroporto é 'MCO'
    console.log('Orlando'); // Se sim, imprime 'Orlando'
    break; // Sai do switch após encontrar uma correspondência
  case 'JFK': // Verifica se o código do aeroporto é 'JFK'
    console.log('John F. Kennedy'); // Se sim, imprime 'John F. Kennedy'
    break; // Sai do switch após encontrar uma correspondência
  case 'SEA': // Verifica se o código do aeroporto é 'SEA'
    console.log('Seattle'); // Se sim, imprime 'Seattle'
    break; // Sai do switch após encontrar uma correspondência
  default: // Caso nenhum dos casos anteriores corresponda
    console.log('Unknown'); // Imprime 'Desconhecido'
}
