let colorClient = 'Write'; // Cor escolhida pelo cliente
let colorStock = 'Black'; // Cor disponível no estoque

// A variável colorSold receberá a cor escolhida pelo cliente, a menos que o cliente não tenha escolhido nenhuma cor,
// nesse caso, será atribuída a cor disponível no estoque.
// Isso é feito usando o operador lógico OR (||), que retorna o primeiro operando se ele puder ser convertido para verdadeiro,
// caso contrário, retorna o segundo operando.
let colorSold = colorClient || colorStock;
console.log(colorSold);
