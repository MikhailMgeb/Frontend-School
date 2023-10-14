const page = document.querySelector('.page');
const input = document.createElement('input');
const button = document.createElement('button');
const nameBlock = document.querySelector('.name-block');
const greetings = document.createElement('p');

input.classList.add('name-input');
button.classList.add('name-button');

function getUserName() {
  if (window.localStorage.getItem('name')) {
    return new Promise((resolve, reject) => {
      resolve(window.localStorage.getItem('name'));
    });
  } else {
    return new Promise((resolve, reject) => {
      button.textContent = 'Подтверждаю!';
      input.placeholder = 'Ваше имя';

      nameBlock.appendChild(input);
      nameBlock.appendChild(button);

      button.addEventListener('click', () => {
        if (input.value === '') {
          return;
        }
        window.localStorage.setItem('name', input.value);
        resolve(input.value);
      });
    });
  }
}

getUserName().then((name) => {
  greetings.textContent = 'Добро пожаловать, ' + name;
  greetings.classList.add('popap');
  nameBlock.appendChild(greetings);
  input.remove();
  button.remove();
});
