const movies = [
  { id: 1, movieName: 'The Vigadores' },
  { id: 2, movieName: 'The Batman' },
  { id: 3, movieName: 'Spider Man' },
];

// Usando o método `find()` para encontrar o objeto de filme com o nome 'The Batman'
console.log(
  movies.find(function (movie) {
    // Função de callback
    return movie.movieName == 'The Batman'; // Condição de busca
  }),
);
