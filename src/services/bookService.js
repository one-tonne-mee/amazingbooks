import fixtures from './fixtures.json'
export async function getBooks() {
  const { books } = fixtures
  return Promise.resolve(
    Object.keys(books).map(bookKey => books[bookKey])
  )
}

export default { getBooks }
