import faker from 'faker';

function generateBook() {
  const book = {};
  book.key = faker.random.uuid();
  book.name =
    capitalizeFirstLetter(faker.company.bsBuzz()) +
    ' ' +
    capitalizeFirstLetter(faker.company.bsAdjective()) +
    ' ' +
    capitalizeFirstLetter(faker.company.bsBuzz()) +
    ' ' +
    capitalizeFirstLetter(faker.company.bsAdjective()) +
    ' ' +
    capitalizeFirstLetter(faker.company.bsBuzz());
  book.author = faker.name.findName();
  book['cover-img'] = 'sample' + faker.random.number() % 10 + '.png';
  book.genre = capitalizeFirstLetter(faker.lorem.slug());
  book.rating = faker.random.number() % 6 + (faker.random.number() % 10) / 10;
  book.description = faker.lorem.paragraphs(3);
  return book;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function fixtures(count = 10) {
  const books = [];
  for (let i = 0; i < count; i++) {
    books.push(generateBook());
  }
  books.reduce((p, book) => {
    p[book.key] = book;
    return p;
  }, {});
  return { books };
}

export async function getBooks(count) {
  const { books } = fixtures(count);
  return Promise.resolve(Object.keys(books).map(bookKey => books[bookKey]));
}

export default { getBooks };
