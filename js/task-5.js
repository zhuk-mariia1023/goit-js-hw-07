function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElement = document.querySelector('.change-color');
const spanElement = document.querySelector('.color');
const body = document.body;

buttonElement.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanElement.textContent = randomColor;
}
