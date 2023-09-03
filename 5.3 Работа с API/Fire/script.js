const inputText = document.querySelector('.kap-cha__input-text');
const inputColor = document.querySelector('.kap-cha__input-color');
const inputSize = document.querySelector('.kap-cha__input-size');
const button = document.querySelector('.button');
const blockImage = document.querySelector('.block-image');



const myKey = '51f627bee86430e3ac6ab7eec1b3d8fe'

button.addEventListener('click', () => {
    fetch(`https://api.imgbun.com/png?key=${myKey}&text=${inputText.value}&color=${inputColor.value}&size=${inputSize.value}`)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        const image = document.createElement('img');
        image.classList.add('image');
        image.src = result.direct_link;
        blockImage.appendChild(image);
    })
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