const page = document.querySelector('.page');
const div = document.createElement('div');
div.classList.add('museum');
page.appendChild(div);

let count = 1

function updateСounter() {
    count = 0;
}

async function addContent(count) {
    const div = document.createElement('div');
    div.classList.add('museum');
    page.appendChild(div)

    const title = document.createElement('h2');
    title.classList.add('museum__name');

    const image = document.createElement('img');
    image.classList.add('museum__image');

    const discription = document.createElement('p');
    discription.classList.add('museum__discription');

    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(discription);

    fetch(`/museum/${count}.json`)
        .then((response) => response.json())
        .then((data) => {
            title.textContent = data.name;
            image.src = data.url;
            discription.textContent = data.discription;
        })
        .catch(() => {
            const theEndMessage = document.createElement('h3');
            theEndMessage.textContent = 'Это конец галлереи';
            theEndMessage.classList.add('message');
            page.appendChild(theEndMessage);
            updateСounter(count);
        })
}

addContent(count);

window.addEventListener('wheel', function (event) {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 4;
    const position = scrolled + screenHeight;

    if (position >= threshold) {
        count += 1;
        addContent(count);
    }
})
