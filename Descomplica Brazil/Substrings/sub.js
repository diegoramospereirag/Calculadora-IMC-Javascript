let s = 'Javascript e Python';
let pos1 = s.indexOf('Python');
console.log(pos1);

let novaString = s.substring(13, 19);

console.log(novaString);

let frase = 'Olá mundo!';
if (frase.startsWith('Olá')) {
  let sub = frase.substring(4);
  let novaString = sub.replace('mundo!', 'Pessoal!');
  let novaStringMaiusculo = novaString.toUpperCase();
  console.log(novaStringMaiusculo);
}

let url = 'https://exemplo.com/pagina?nome=poder&atores=Lucas,Guilherme';
const parametros = url.split('=')[2];

console.log(parametros);
