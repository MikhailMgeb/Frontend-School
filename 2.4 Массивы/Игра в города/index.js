let askFirst = prompt('Введи название города'); // получаем город
let askSecond = [];
let totalCity = [];
totalCity.push(askFirst);

while (true) {
    askSecond = prompt('Введи название города'); // получаем город

    if (askFirst[askFirst.length - 1] === askSecond[0]) {
        if (totalCity.includes(askSecond)) {
            alert('Город уже был!')
        } else {
            totalCity.push(askSecond)
            askFirst = askSecond;
        }
    }
}

