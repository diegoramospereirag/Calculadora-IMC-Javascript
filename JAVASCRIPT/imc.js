const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== '' ){
    
  const valorIMC = (peso / (altura * altura)).toFixed(1);

  let classificacao = ''
   
  if (valorIMC < 18.5){
    classificacao = 'Abaixo do Peso';
  }else if (valorIMC < 25){
    classificacao = 'Peso Ideal, Parabéns!';
  }else if (valorIMC < 30){
    classificacao = 'Levemente acima do Peso.';
  }else if (valorIMC < 40){
    classificacao = 'Acima do Peso Grau I';
  }else if (valorIMC < 50){
    classificacao = 'Acima do Peso Grau II, Atenção!';
  }else{
    classificacao = 'Acima do Peso Grau III, Cuidado!';
  }
  resultado.textContent = `${nome} seu IMC é ${valorIMC} você está ${classificacao}`
  
  }else{
    resultado.textContent = 'Preencher Todos os Campos'
  }
}


calcular.addEventListener('click', imc);