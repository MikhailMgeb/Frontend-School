const inputPaints = document.querySelector('.input-paints');
const buttonPaints = document.querySelector('.button-paints');

let saveColor = '';

inputPaints.addEventListener('change', function (event) {
  saveColor = event.target.dataset.currentColor;
  console.log(saveColor);
});

buttonPaints.addEventListener('click', function () {
  buttonPaints.style.background = saveColor;
});
