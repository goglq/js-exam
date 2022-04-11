import Visitor from '../models/Visitor.js'
import { toggleForm } from '../functionality.js'

const formAddVisitorId = '#form-add-visitor'

const visitors = JSON.parse(localStorage.getItem('visitors'))

if (visitors) {
  visitors.forEach((visitor) => createVisitorItem(visitor))
}

$('#btn-open-add-form').click(() => {
  toggleForm(formAddVisitorId)
})

$('#btn-close-form').click((e) => {
  e.preventDefault()
  toggleForm(formAddVisitorId)
})

$(formAddVisitorId).submit((e) => {
  const name = $('#input-name').val()
  const phone = $('#input-phone').val()

  addVisitor(name, phone)
})

function addVisitor(fullname, phone) {
  visitors.push(
    new Visitor(visitors[visitors.length - 1].id + 1, fullname, phone)
  )

  localStorage.setItem('visitors', JSON.stringify(visitors))
}

function createVisitorItem(visitor) {
  const visitorItem = `<tr>
    <td>${visitor.id}</td>
    <td>${visitor.fullname}</td>
    <td>${visitor.phone}</td>
    <td>
        <button>Редактировать</button>
    </td>
  </tr>`

  $('#visitor-list').append(visitorItem)
}
