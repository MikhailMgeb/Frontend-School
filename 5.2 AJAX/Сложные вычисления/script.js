const blockMath = document.querySelector('.block-math');
const button = document.querySelector('.block-math__button');
const inputFirst = document.querySelector('.input-first');
const inputSecond = document.querySelector('.input-second');
const resultNumberBlock = document.querySelector('.result-number');
const spanLoader = document.querySelector('.block-math__span');

button.addEventListener('click', () => {
    inputFirst.disabled = true;
    inputSecond.disabled = true;
    button.disabled = true;

    spanLoader.classList.add('loader');
    const resultNumber = document.createElement('p');
    resultNumberBlock.innerHTML = '';

    fetch(`http://localhost:3000/?first=${inputFirst.value}&second=${inputSecond.value}`)
        .then((response) => response.json())
        .then((result) => {
            spanLoader.classList.remove('loader');
            inputFirst.disabled = false;
            inputSecond.disabled = false;
            button.disabled = false;

            resultNumber.classList.add('result-number__text');
            resultNumber.textContent = 'Итого: ' + result.result;
            resultNumberBlock.appendChild(resultNumber);
        })
        .catch(() => {
            resultNumber.textContent = 'Введите число';
            resultNumber.classList.add('error');
        })
})
