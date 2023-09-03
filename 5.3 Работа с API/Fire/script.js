const foxGallery = document.querySelector('.fox-gallery');
const foxAddButton = document.querySelector('.fox-gallery__button');

foxAddButton.addEventListener('click', (event) => {
    foxAddButton.disabled = true;
    foxAddButton.classList.add('load');

    fetch('https://randomfox.ca/floof/')
        .then(resolve => resolve.json())
        .then(result => {
            foxAddButton.disabled = false;

            const image = document.createElement('img');
            image.classList.add('fox-gallery__photo')
            image.src = result.image;

            foxGallery.appendChild(image);
            foxAddButton.classList.remove('load');
        })
})