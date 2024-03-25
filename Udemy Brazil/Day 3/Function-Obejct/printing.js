const book = {
  title: 'Atomic Habble',
  pages: 360,
  author: 'James Habble',
  chaptres: {
    chap1: 'Fundaments',
    chap2: '1st ADS',
  },
  printBook: function () {
    console.log('Printing...');
  },
};

book.printBook();
