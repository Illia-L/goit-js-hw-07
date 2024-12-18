const input = document.getElementById('name-input')
const output = document.getElementById('name-output')

function handleInput(e) {
  const valinInput = e.target.value.trim()
  const name = valinInput || 'Anonymous'

  output.textContent = name
}

input.addEventListener('input', handleInput)