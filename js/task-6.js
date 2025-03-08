function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  let markup = '';

  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin: 5px;"></div>`;
    size += 10;
  }

  boxesContainer.insertAdjacentHTML('beforeend', markup);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
