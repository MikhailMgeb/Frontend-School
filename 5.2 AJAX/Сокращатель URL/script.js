const urlInput = document.querySelector('.shot-url__input');
const urlbutton = document.querySelector('.shot-url__button');

const answer = document.querySelector('.answer');
const shotUrlText = document.createElement('p');
answer.appendChild(shotUrlText);

const buttonCopy = document.createElement('button');
buttonCopy.textContent = 'Скопировать URL';

function handlerCopy() {
    return navigator.clipboard.writeText(shotUrlText.textContent);
}

urlbutton.addEventListener('click', () => {
    urlbutton.classList.add('loading');
    urlbutton.disabled = true;
    buttonCopy.remove();
    shotUrlText.textContent = '';
    shotUrlText.classList.remove('error');

    fetch('https://is.gd/create.php?format=json&url=' + urlInput.value)
        .then((response) => response.json())
        .then((url) => {
            urlbutton.disabled = false;
            urlbutton.classList.remove('loading');

            if (url.errorcode === 1) {
                shotUrlText.textContent = url.errormessage;
                shotUrlText.classList.add('error');
            }

            if (url.shorturl) {
                shotUrlText.textContent = url.shorturl;
                answer.appendChild(buttonCopy);
                buttonCopy.addEventListener('click', handlerCopy)
            }
        })
})