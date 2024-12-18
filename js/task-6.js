const boxes = document.getElementById('boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxElements = []

  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');

    box.style.width = 30 + 10 * i + 'px';
    box.style.height = 30 + 10 * i + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxElements.push(box)
  }

  boxes.append(...boxElements)
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function handleCreate() {
  const number = +inputNumber.value;

  if (number < 1 || number > 100) return;

  destroyBoxes();
  createBoxes(number)
  inputNumber.value = ''
}

btnCreate.addEventListener('click', handleCreate)
btnDestroy.addEventListener('click', destroyBoxes)
