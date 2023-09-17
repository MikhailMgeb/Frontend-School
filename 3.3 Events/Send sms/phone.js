const inputDisplayPhone = document.querySelector('.input-display-phone');
const blockPhone = document.querySelector('.block-phone');
const button = document.querySelectorAll('.phone-button');

let lastClick;
let i = 0;
let timerId;

blockPhone.addEventListener('click', function (event) {
    let buttonDateAttribute = event.target.closest('.phone-button');

    if (!buttonDateAttribute) {
        return;
    }

    buttonDateAttribute = buttonDateAttribute.dataset.symbol;

    if (inputDisplayPhone.value.length === '0') {
        inputDisplayPhone.value = buttonDateAttribute[i];
    }

    if (buttonDateAttribute[i] === undefined) {
        i = 0;
    }

    if (lastClick === buttonDateAttribute) {
        // clearTimeout(timerId)
        buttonDateAttribute[i + 1] === undefined ? i = 0 : i += 1;
        inputDisplayPhone.value = inputDisplayPhone.value.substr(0, inputDisplayPhone.value.length - 1);
        inputDisplayPhone.value += buttonDateAttribute[i];
        // timerId = setTimeout(() => {
        //     console.log('Прошла 1 секунда')
        // }, 1000)

    } else {
        i = 0;
        inputDisplayPhone.value += buttonDateAttribute[i];
    }

    lastClick = buttonDateAttribute;
})

