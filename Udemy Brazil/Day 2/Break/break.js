let i = 1;

// Loop while para iterar de 1 a 30
while (i <= 30) {
  // Verifica se o valor de i é igual a 9
  if (i === 9) break; // Se sim, o loop é interrompido imediatamente

  console.log('numero ', i); // Imprime o valor de i
  i++; // Incrementa i para a próxima iteração
}

// O break é uma instrução usada para sair imediatamente de um loop, mesmo se a condição de controle ainda for verdadeira.
// No exemplo fornecido, quando o valor de i atinge 9, o break é acionado e o loop while é interrompido, impedindo que os números maiores que 9 sejam impressos.
