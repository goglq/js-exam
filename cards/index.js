import VisitorCard from '../models/VisitorCard.js'
import { toggleForm } from '../functionality.js'

const formAddCardId = '#form-add-card'

const cards = JSON.parse(localStorage.getItem('cards'))
const visitors = JSON.parse(localStorage.getItem('visitors'))
const books = JSON.parse(localStorage.getItem('books'))

if (cards) {
  cards.forEach((card) => createCardItem(card))
}

$('#btn-open-add-form').click(() => {
  toggleForm('#form-add-card')
  visitors.forEach((visitor) =>
    $('#input-visitor').append(
      `<option value=${visitor.id}>${visitor.fullname}</option>`
    )
  )
  books.forEach((book) =>
    $('#input-book').append(`<option value=${book.id}>${book.title}</option>`)
  )
})

$(formAddCardId).submit(() => {
  toggleForm(formAddCardId)
})

$('#btn-close-form').click((e) => {
  e.preventDefault()
  toggleForm(formAddCardId)
})

$(formAddCardId).submit((e) => {
  const visitorId = $('#input-visitor').val()
  const bookId = $('#input-book').val()

  addCard(visitorId, bookId, new Date().toLocaleDateString(), undefined)
})

$('.btn-return').click(function (e) {
  e.preventDefault()
  const cardId = this.getAttribute('data-id')
  returnBook(cardId)
  window.location.reload()
})

function returnBook(cardId) {
  const cardIndex = cards.findIndex((card) => card.id == cardId)
  cards[cardIndex].returnDate = new Date().toLocaleDateString()
  localStorage.setItem('cards', JSON.stringify(cards))
}

function addCard(visitorId, bookId, takeDate, returnDate) {
  cards.push(
    new VisitorCard(
      cards[cards.length - 1].id + 1,
      visitorId,
      bookId,
      takeDate,
      returnDate
    )
  )

  localStorage.setItem('cards', JSON.stringify(cards))
}

function createCardItem(card) {
  const cardItem = `<tr>
    <td>${card.id}</td>
    <td>${
      visitors.find((visitor) => visitor.id == card.visitorId).fullname
    }</td>
    <td>${books.find((book) => book.id == card.bookId).title}</td>
    <td>${card.takeDate}</td>
    <td>${
      card.returnDate !== undefined
        ? card.returnDate
        : `<button data-id="${card.id}" class="btn-return">return</button>`
    }</td>
  </tr>`

  $('#card-list').append(cardItem)
}
