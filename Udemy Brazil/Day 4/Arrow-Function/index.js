const movies = [
  { id: 1, movieName: 'The Batman' },
  { id: 2, movieName: 'Coringa' },
  { id: 3, movieName: 'Coringa' },
];

console.log(movies.find((movie) => movie.movieName == 'The Batman'));
