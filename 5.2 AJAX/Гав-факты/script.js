const input = document.querySelector('.input');
const button = document.querySelector('.button');
const factsText = document.querySelector('.facts-text');


button.addEventListener('click', function (event) {
    factsText.innerHTML = '';
    button.disabled = true;

    fetch('https://dog-api.kinduff.com/api/facts?number=' + input.value)
        .then((response) => response.json())
        .then((data) => {

            for (let fact of data.facts) {
                const text = document.createElement('p');
                text.textContent = fact;
                factsText.appendChild(text);
            }
            button.disabled = false;
        })
})
