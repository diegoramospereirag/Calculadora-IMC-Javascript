//let friends = ['Breno', 'Kaio', 'Lucas', 'Bernardo', 'Gabriel Felix'];
//totalFriends = friends.length;

//let countrySul = ['Brazil', 'Argentina', 'Bolivia', 'Uruguai'];
//let countryNorte = ['Canada', 'Stade Unid', 'Mexico'];
//let countryContined = countryNorte.concat(countrySul);
//countrySul;
//console.log(countryContined)

let meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

let oneTrimestre = meses.slice(0, 3);
let twoTrimestre = meses.slice(3, 6);
let treeTrimestre = meses.slice(6, 9);
let forTrimestre = meses.slice(9, 12);

console.log(oneTrimestre);

console.log(twoTrimestre);

console.log(treeTrimestre);

console.log(forTrimestre);

console.log(oneTrimestre, +twoTrimestre, +treeTrimestre, +forTrimestre);
