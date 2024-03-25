let driverSpeed = 39; // Velocidade do motorista

if (driverSpeed > 110) {
  // Se a velocidade do motorista for superior a 110
  console.log('Driving too Fast'); // Imprime 'Dirigindo muito rápido'
} else if (driverSpeed >= 40) {
  // Senão, se a velocidade do motorista for 40 ou mais
  console.log('Ok'); // Imprime 'Ok'
} else {
  // Se nenhuma das condições anteriores for atendida
  console.log('Driving too slow'); // Imprime 'Dirigindo muito devagar'
}
