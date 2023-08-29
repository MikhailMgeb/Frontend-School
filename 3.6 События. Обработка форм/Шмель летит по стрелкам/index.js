const image = document.querySelector('.image');
const page = document.querySelector('.page');
const keyboard = document.querySelector('.keyboard');
let positionUpDown = 228;
let positionLeftRight = 725;

function getControlTwo(className) {
    if (className === 'up' || className === 'ArrowUp') {
        positionUpDown -= 20;
        image.style.top = positionUpDown + 'px';
    }

    if (className === 'down' || className === 'ArrowDown') {
        positionUpDown += 20;
        image.style.top = positionUpDown + 'px';
    }

    if (className === 'left' || className === 'ArrowLeft') {
        positionLeftRight -= 20;
        image.style.left = positionLeftRight + 'px';
    }

    if (className === 'right' || className === 'ArrowRight') {
        positionLeftRight += 20;
        image.style.left = positionLeftRight + 'px';
    }

    return;
}

keyboard.addEventListener('click', function (event) {
    const nameClassClick = event.target.className;
    getControlTwo(nameClassClick);
})

page.addEventListener('keydown', function (event) {
    const nameClassKeydown = event.key;
    getControlTwo(nameClassKeydown);
})