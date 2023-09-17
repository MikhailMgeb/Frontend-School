const catGallery = document.querySelector('.cat-gallery');
const selectCats = document.querySelector('.cat-gallery__select');
const catPhotos = document.querySelector('.cat-photos');

selectCats.disabled = true;

fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .then(dataset => {
        for (const name of dataset) {
            const option = document.createElement('option');
            option.textContent = name.name;
            option.value = name.id;
            selectCats.appendChild(option);
        };
    })
    .finally(() => {
        selectCats.disabled = false;
    })

selectCats.addEventListener('input', (event) => {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    catGallery.appendChild(loader);

    selectCats.disabled = true;
    const choice = event.target.value;
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${choice}`,
        {
            headers: {
                "x-api-key": "live_bTMMMtmEahy2CTMELt6EXMLE0FiRch9inH4oe4vWQSROWrpd7ScMKcpkXzkvlr6O"
            }

        })
        .then(response => response.json())
        .then(photoList => {
            catPhotos.innerHTML = '';

            for (let catPhoto of photoList) {
                const image = document.createElement('img');
                image.classList.add('photo');
                image.src = catPhoto.url;

                catPhotos.appendChild(image);
            }
        })
        .finally(() => {
            selectCats.disabled = false;
            loader.remove()
        })
})