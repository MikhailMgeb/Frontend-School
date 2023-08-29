const input = document.querySelector('.input');
const startTimer = document.querySelector('.start-timer');
const blockResult = document.querySelector('.result');

function sortNumbers(array) {
    let minNumber = 0;
    let maxNumber = 0;
    let middleNumber = 0;
    minNumber = array[0];
    maxNumber = array[0];
    for (let i = 0; i < array.length; i++) {

        if (minNumber < array[i]) {
            minNumber = array[i];
        }

        if (maxNumber > array[i]) {
            maxNumber = array[i];
        }

        middleNumber += array[i];
    }

    middleNumber = Math.floor(middleNumber / array.length - 1);

    return { minNumber, maxNumber, middleNumber };
}

function getArrayNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100));
        }, 0);
    });
}

startTimer.addEventListener('click', (event) => {
    const array = [];

    for (let i = 0; i < input.value; i++) {
        array.push(getArrayNumber());
    }

    Promise.all(array).then(function (result) {
        const dateNumber = sortNumbers(result);

        const resultNumberMin = document.createElement('p');
        resultNumberMin.textContent = 'Минимальное число: ' + dateNumber.minNumber;
        blockResult.appendChild(resultNumberMin);

        const resultNumberMax = document.createElement('p');
        resultNumberMax.textContent = 'Максимальное число: ' + dateNumber.maxNumber;
        blockResult.appendChild(resultNumberMax);

        const resultNumberMidle = document.createElement('p');
        resultNumberMidle.textContent = 'Среднее число: ' + dateNumber.middleNumber;
        blockResult.appendChild(resultNumberMidle);
    })
})
