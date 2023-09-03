const foxGallery = document.querySelector('.fox-gallery');
const foxAddButton = document.querySelector('.fox-gallery__button');

foxAddButton.addEventListener('click', (event) => {
    fetch('https://randomfox.ca/floof/')
        .then(resolve => resolve.json())
        .then(result => console.log(result))
})