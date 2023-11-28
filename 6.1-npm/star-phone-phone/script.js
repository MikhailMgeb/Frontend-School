const input = document.querySelector('.phone');
const button = document.querySelector('.btn');
const errorMsg = document.querySelector('.error-msg');
const validMsg = document.querySelector('.valid-msg');

const errorMap = ['Invalid number', 'Invalid country code', 'Too short', 'Too long', 'Invalid number'];

const iti = window.intlTelInput(input, {
    utilsScript: '/node_modules/intl-tel-input/build/js/utils.js'
});

const reset = () => {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hide");
    validMsg.classList.add("hide");
};

button.addEventListener('click', () => {
    reset();
    if (input.value.trim()) {
        if (iti.isValidNumber()) {
            validMsg.classList.remove("hide");
        } else {
            input.classList.add("error");
            const errorCode = iti.getValidationError();
            errorMsg.innerHTML = errorMap[errorCode];
            errorMsg.classList.remove("hide");
        }
    }
});

IMask(input, {
    mask: 'num',
    lazy: false,  // make placeholder always visible

    blocks: {
      num: {
        mask: Number,
        expose: true,
      },
    }
  })

