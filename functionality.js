export function toggleForm(formId) {
  const form = $(formId)
  if (form.hasClass('visible')) {
    form.removeClass('visible')
  } else {
    form.addClass('visible')
  }
}
