const blockMath = document.querySelector('.block-math');
const inputFirst = document.querySelector('.input-first');
const inputSecond = document.querySelector('.input-second');
const resultNumber = document.createElement('p');
blockMath.appendChild(resultNumber);

blockMath.addEventListener('input', (event) => {
    resultNumber.classList.remove('error');

    fetch(`http://localhost:3000/?first=${inputFirst.value}&second=${inputSecond.value}`)
        .then((response) => response.json())
        .then((result) => {
            resultNumber.textContent = result.result;
        })
        .catch(() => {
            resultNumber.textContent = 'Введите число';
            resultNumber.classList.add('error');
        })
})
