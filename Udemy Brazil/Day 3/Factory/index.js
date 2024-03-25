// Definindo uma função de fábrica para criar objetos de livro
function createBook(title, author, pages) {
  // Criando um objeto de livro com as propriedades fornecidas
  const book = {
    bookTitle: title, // Definindo o título do livro
    bookAuthor: author, // Definindo o autor do livro
    bookPages: pages, // Definindo o número de páginas do livro
  };
  return book; // Retornando o objeto de livro criado
}

// Criando dois livros usando a função de fábrica
const book1 = createBook('Atomic', 'James', 360); // Criando o livro 1 com título "Atomic", autor "James" e 360 páginas
const book2 = createBook('Hubble', 'Tesla', 455); // Criando o livro 2 com título "Hubble", autor "Tesla" e 455 páginas

// Imprimindo os livros criados no console
console.log(book1); // Exibindo os detalhes do livro 1 no console
console.log(book2); // Exibindo os detalhes do livro 2 no console
