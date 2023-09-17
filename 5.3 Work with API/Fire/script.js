const inputText = document.querySelector('.kap-cha__input-text');
const button = document.querySelector('.button');
const blockImage = document.querySelector('.block-image');
const blockKapcha = document.querySelector('.kap-cha');

const letters = "абвгджзеклмнопрстуфхшзчцшьэъюя";
const myKey = '51f627bee86430e3ac6ab7eec1b3d8fe';

const randomLength = Math.floor(Math.random() * 4) + 2;

function getRandomWord(letters, length) {
    let randomWord = [];
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * letters.length);
        randomWord.push(letters[randomIndex]);
    }
    return randomWord.join('');
}

const randomWord = getRandomWord(letters, randomLength);


fetch(`https://api.imgbun.com/png?key=${myKey}&text=${randomWord}&color=&size=`)
    .then(response => response.json())
    .then(result => {
        const image = document.createElement('img');
        image.classList.add('image');

        image.src = result.direct_link;
        blockImage.appendChild(image);
    })

button.addEventListener('click', () => {
    if (inputText.value === randomWord) {
        blockKapcha.remove();

        const messege = document.createElement('p');
        messege.textContent = 'верно!';
        blockImage.appendChild(messege);
    }
})


//ЗАДАНИЕ Фыр-фыр-------------------------------------------------------------------------------------
// const foxGallery = document.querySelector('.fox-gallery');
// const foxAddButton = document.querySelector('.fox-gallery__button');

// foxAddButton.addEventListener('click', (event) => {
//     foxAddButton.disabled = true;
//     foxAddButton.classList.add('load');

//     fetch('https://randomfox.ca/floof/')
//         .then(resolve => resolve.json())
//         .then(result => {
//             foxAddButton.disabled = false;

//             const image = document.createElement('img');
//             image.classList.add('fox-gallery__photo')
//             image.src = result.image;

//             foxGallery.appendChild(image);
//             foxAddButton.classList.remove('load');
//         })
// })