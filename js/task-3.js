const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', event => {
  const userName = event.target.value.trim();
  outputElement.textContent = userName === '' ? 'Anonymous' : userName;
});
