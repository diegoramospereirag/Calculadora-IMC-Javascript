const message = 'Hey, my name is Diego';

// Verifica se a mensagem termina com 'diego' (independente de maiúsculas ou minúsculas)
console.log(message.toLowerCase().endsWith('diego')); // true

// Convertendo a mensagem para minúsculas antes de verificar se termina com 'diego'
console.log(message.toLowerCase().endsWith('diego')); // true

// Ignora maiúsculas/minúsculas ao verificar se a mensagem termina com 'diego'
console.log(message.toLowerCase().endsWith('diego')); // true

// Checa se a mensagem termina com 'diego', não importando as letras em maiúsculo ou minúsculo
console.log(message.toLowerCase().endsWith('diego')); // true

// Verifica se a mensagem termina com 'diego' sem levar em conta a capitalização
console.log(message.toLowerCase().endsWith('diego')); // true
