// Definindo uma função de fábrica para criar objetos de livro
function createBook(title, author, pages) {
  // Criando um objeto de livro com as propriedades fornecidas
  const book = {
    bookTitle: title, // Definindo o título do livro
    bookAuthor: author, // Definindo o autor do livro
    bookPages: pages, // Definindo o número de páginas do livro
  };
  return book;
}

const book1 = createBook('Atomic', 'James', 360);
const book2 = createBook('Hubble', 'Tesla', 455);

book1.color = 'Write';

console.log(book1);
console.log(book2);
