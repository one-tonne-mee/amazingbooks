import faker from 'faker'

function generateBook () {
  const book = {}
  book.key = faker.random.uuid()
  book.name = faker.lorem.words()
  book.author = faker.name.firstName() + ' '+ faker.name.lastName()
  book['cover-img'] = 'sample' + (faker.random.number() % 10 ) + '.png'
  book.genre = faker.lorem.slug()
  book.rating = faker.random.number() % 5 + (faker.random.number() % 5)/10
  book.description = faker.lorem.sentences()
  return book
}

function fixtures(count = 10) {
  const books = []
  for(let i = 0; i < count ; i++) {
    books.push( generateBook() )
  }
  books.reduce( (p,book) => {
    p[book.key] = book
    return p
  } , {})
  return { books }
}

export async function getBooks(count) {
  const { books } = fixtures(count)
  return Promise.resolve(
    Object.keys(books).map(bookKey => books[bookKey])
  )
}

export default { getBooks }
