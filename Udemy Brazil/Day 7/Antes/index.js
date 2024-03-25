let numerosComputador;
let numerosJogador = [];

function update() {
  numerosComputador = Math.floor(Math.random() * 10);
  console.log(numerosComputador);
}

function comparacaoNumeros() {
  const numeroJogador = Number(document.getElementById('inputBox').value);
  numerosJogador.push(' ' + numeroJogador);

  document.getElementById('guesses').innerHTML = numerosJogador;

  if (numeroJogador < numerosComputador) {
    document.getElementById('inputBox').value = '';
  } else if (numeroJogador > numerosComputador) {
    document.getElementById('inputBox').value = '';
  }
}
