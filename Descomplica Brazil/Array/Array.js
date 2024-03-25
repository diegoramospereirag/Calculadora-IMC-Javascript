let nome = 'Diego';

if (typeof nome == 'string') {
  console.log('É uma string ' + nome.toLocaleUpperCase());
} else {
  console.log('Não é uma String');
}

let user;
let input;
input = document.getElementById('inputname').value;

user = document.getElementById('user').innerHTML = input;
