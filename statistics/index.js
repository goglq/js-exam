const books = JSON.parse(localStorage.getItem('books'))
const visitors = JSON.parse(localStorage.getItem('visitors'))

if (books) {
  books.slice(0, 5).forEach((book) => createBookItem(book))
}

if (visitors) {
  visitors.slice(0, 5).forEach((visitor) => createVisitorItem(visitor))
}

function createVisitorItem(visitor) {
  const visitorItem = `<tr>
      <td>${visitor.id}</td>
      <td>${visitor.fullname}</td>
      <td>${visitor.phone}</td>
    </tr>`

  $('#visitor-list').append(visitorItem)
}

function createBookItem(book) {
  const bookItem = `<tr>
    <td>${book.id}</td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.year}</td>
    <td>${book.publisher}</td>
    <td>${book.count}</td>
  </tr>`

  $('#book-list').append(bookItem)
}
