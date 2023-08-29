const input = document.querySelector('.input');
const button = document.querySelector('.button');

button.addEventListener('click', function (event) {
    button.disabled = true;
    const number = input.value

    fetch('https://dog-api.kinduff.com/api/facts', {
        method: 'GET',
        number: input.value,
    })
        .then((response) => response.json)
        .then((data) => console.log(data))
})