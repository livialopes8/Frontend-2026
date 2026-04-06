import './style.css'
import './style.css'

const form = document.querySelector('#login-form')

if (form) {
  const emailInput = document.querySelector('#email')
  const senhaInput = document.querySelector('#senha')

  const emailError = document.querySelector('#email-error')
  const senhaError = document.querySelector('#senha-error')
  const formMessage = document.querySelector('#form-message')

  function limparErros() {
    emailError.textContent = ''
    senhaError.textContent = ''
    formMessage.textContent = ''
  }

  function validarFormulario() {
    let formularioValido = true

    limparErros()

    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Informe o e-mail.'
      formularioValido = false
    }

    if (senhaInput.value.trim() === '') {
      senhaError.textContent = 'Informe a senha.'
      formularioValido = false
    }

    if (!formularioValido) {
      formMessage.textContent = 'Preencha os campos obrigatórios.'
    }

    return formularioValido
  }

  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
      emailError.textContent = ''
    }

    if (emailInput.value.trim() !== '' && senhaInput.value.trim() !== '') {
      formMessage.textContent = ''
    }
  })

  senhaInput.addEventListener('input', () => {
    if (senhaInput.value.trim() !== '') {
      senhaError.textContent = ''
    }

    if (emailInput.value.trim() !== '' && senhaInput.value.trim() !== '') {
      formMessage.textContent = ''
    }
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formularioValido = validarFormulario()

    if (formularioValido) {
      window.location.href = '/index.html'
    }
  })
}