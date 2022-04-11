import Book from './models/Book.js'
import Visitor from './models/Visitor.js'
import VisitorCard from './models/VisitorCard.js'

const initialBooks = [
  new Book(1, 'Title 1', 'Author 1', 1995, 'Publisher 1', 100, 5),
  new Book(2, 'Title 2', 'Author 1', 1995, 'Publisher 1', 100, 5),
  new Book(3, 'Title 3', 'Author 1', 1995, 'Publisher 1', 100, 5),
]

const initialVisitors = [
  new Visitor(1, 'Sam Samov', '+7(999)888-77-66'),
  new Visitor(2, 'Ben Benov', '+7(999)888-77-66'),
  new Visitor(3, 'Frank Frankov', '+7(999)888-77-66'),
]

const initialVisitorCards = [
  new VisitorCard(
    1,
    1,
    1,
    new Date(2000, 1, 1).toLocaleDateString(),
    new Date(2000, 1, 5).toLocaleDateString()
  ),
  new VisitorCard(2, 1, 2, new Date(2000, 1, 1).toLocaleDateString()),
  new VisitorCard(
    3,
    2,
    2,
    new Date(2000, 1, 1).toLocaleDateString(),
    new Date(2000, 1, 5).toLocaleDateString()
  ),
]

if (!localStorage.getItem('books')) {
  localStorage.setItem('books', JSON.stringify(initialBooks))
}

if (!localStorage.getItem('visitors')) {
  localStorage.setItem('visitors', JSON.stringify(initialVisitors))
}

if (!localStorage.getItem('cards')) {
  localStorage.setItem('cards', JSON.stringify(initialVisitorCards))
}
