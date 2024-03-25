function CreateGame(title, personPrin, classification) {
  this.gameTitle = title;
  this.gamePersonPrin = personPrin;
  this.classification = classification;
}

const game1 = new CreateGame('Minecraft', 'Steve', 'Livre');
const game2 = new CreateGame('Good Of War', 'Kratos', '+16');

console.log(game1);
console.log(game2);
