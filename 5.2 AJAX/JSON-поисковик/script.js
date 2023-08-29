const searchInput = document.querySelector('.block-search__input');
const searchButton = document.querySelector('.block-search__button');
const content = document.querySelector('.content');
const loader = document.querySelector('.loader');

const isTextApi = document.createElement('p');
isTextApi.classList.add('content-text');

function getText(date) {
    if (date === '') {
        return;
    }

    isTextApi.textContent = 'это ' + data.result;
    content.appendChild(isTextApi);
    return;
}

searchButton.addEventListener('click', () => {
    const apiAdress = '/date/' + searchInput.value + '.json';
    loader.classList.remove('hidden');
    searchButton.disabled = true;

    fetch(apiAdress)
        .then((response) => response.json())
        .catch(() => console.log('Error occurred!'))
        .then((data) => {
            getText(data);
            loader.classList.add('hidden');
            searchButton.disabled = false;
        })
})