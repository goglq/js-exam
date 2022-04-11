import Book from './models/Book.js'
import { toggleForm } from './functionality.js'

const formAddBookId = '#form-add-book'
const bookList = $('#book-list')
let books = JSON.parse(localStorage.getItem('books'))

if (books) {
  books.forEach((book) => createBookItem(book))
}

$('#btn-open-add-form').click(() => {
  toggleForm(formAddBookId)
})

$('#btn-close-form').click((e) => {
  e.preventDefault()
  toggleForm(formAddBookId)
})

$('#btn-open-edit-form').click(() => {})

$('.btn-delete-item').click(function (e) {
  const bookId = this.getAttribute('data-id')
  removeBook(bookId)
  window.location.reload()
})

$(formAddBookId).submit((e) => {
  const title = $('#input-title').val()
  const author = $('#input-author').val()
  const year = $('#input-year').val()
  const publisher = $('#input-publisher').val()
  const pages = $('#input-pages').val()
  const count = $('#input-count').val()

  addBook(title, author, year, publisher, pages, count)
})

function addBook(title, author, year, publisher, pages, count) {
  books.push(
    new Book(
      books[books.length - 1].id + 1,
      title,
      author,
      year,
      publisher,
      pages,
      count
    )
  )

  localStorage.setItem('books', JSON.stringify(books))
}

function removeBook(bookId) {
  books = books.filter((book) => book.id != bookId)
  const cards = JSON.parse(localStorage.getItem('cards')).filter(
    (card) => card.bookId != bookId
  )
  localStorage.setItem('books', JSON.stringify(books))
  localStorage.setItem('cards', JSON.stringify(cards))
}

function createBookItem(book) {
  const bookItem = `<tr>
  <td>${book.id}</td>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.year}</td>
  <td>${book.publisher}</td>
  <td>${book.count}</td>
  <td>
      <button data-id="${book.id}" class="btn-edit-item">Редактировать</button>
      <button data-id="${book.id}" class="btn-delete-item">Удалить</button>
  </td>
</tr>`

  bookList.append(bookItem)
}
