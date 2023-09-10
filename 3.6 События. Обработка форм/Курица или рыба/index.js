const form = document.querySelector('.registration-form');
const formField = form.querySelector('.form-field');
const registrationButton = form.querySelector('.registration-form__button');
const checkboxFood = form.querySelector('.checkbox-food');
const isSelectFood = form.querySelector('.registration-form_select-food');
const message = document.querySelector('.message');

const errorBlock = form.querySelector('.registration-form__error')
errorBlock.classList.add('hidden');
message.classList.add('hidden');

const registrationData = {};
registrationButton.disabled = true;

form.addEventListener('input', (event) => {
    const target = event.target;
    const key = target.name;
    registrationData[key] = target.type === 'checkbox' ? target.checked : target.value;

    if (registrationData['food-agree'] === true) {
        isSelectFood.disabled = false;
    } else {
        isSelectFood.disabled = true;
    }

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    if (!letters.includes(registrationData.seat[0])) {
        errorBlock.innerHTML = '';
        const errorSeat = document.createElement('span');
        errorSeat.classList.add('choice-seat-error');
        errorSeat.textContent = 'Первая буква должна содержать "ABCDEF"';
        errorBlock.appendChild(errorSeat);
        errorBlock.classList.remove('hidden');
    } else {
        registrationButton.disabled = false;
        errorBlock.innerHTML = '';
        errorBlock.classList.add('hidden');
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.classList.remove('hidden');
    message.textContent = `Поздравляем с успешной регистрацией на рейс ваше место ${registrationData.seat}`;
})
