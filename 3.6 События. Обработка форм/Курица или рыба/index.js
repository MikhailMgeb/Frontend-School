const form = document.querySelector('.registration-form')
const formField = form.querySelector('.form-field')
const registrationButton = form.querySelector('.registration-form__button');
const checkboxFood = form.querySelector('.checkbox-food');
const isSelectFood = form.querySelector('.registration-form_select-food');

const registrationData = {};

function isCorrectChoice(formField) {
    const letters = 'ABCDEF';
    const spanСhoiceSeat = document.createElement('span')

    if (letters.indexOf(registrationData.seat[0])) {
        spanСhoiceSeat.classList.add('choice-seat-error');
        spanСhoiceSeat.textContent = 'Первая буква должна содержать "ABCDEF"';

        registrationButton.disabled = true;
    } else {
        registrationButton.disabled == false;
    }

    if (checkboxFood.checked === true) {
        isSelectFood.disabled = false;
    } else {
        isSelectFood.disabled = true;
    }
}

function сhoiceFood(formField) {
    if (formField.checked === true) {
        console.log('check-food');
    }
}

const validators = {
    seat: isCorrectChoice,
    food: сhoiceFood,
}

function validateFormField(formField) {
    const validator = validators[formField.name];

    if (!validator) {
        return true;
    }

    const error = validator(formField);
    
    const fieldContainer = formField.closest('.form-field');
    const errorElem = fieldContainer.querySelector('.registration-form__error');
    errorElem.classList.add('hidden');

    if (error === nell) {
        return true;
    }

    errorElem.classList.remove('hidden');
    errorElem.textContent = error;

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

form.addEventListener('input', (event) => {
    const target = event.target;
    const key = target.name;
    registrationData[key] = target.type === 'checkbox' ? target.checked : target.value;
})
