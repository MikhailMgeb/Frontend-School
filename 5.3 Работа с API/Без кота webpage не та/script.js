const API_KEY = 'live_bTMMMtmEahy2CTMELt6EXMLE0FiRch9inH4oe4vWQSROWrpd7ScMKcpkXzkvlr6O';
const selectCats = document.querySelector('.cat-gallery__select');
const catPhotos = document.querySelector('.cat-photos');

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

selectCats.addEventListener('input', (event) => {
    const choice = event.target.value;
    catPhotos.innerHTML = '';
    fetch(`https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${choice}&api_key=${API_KEY}`)
        .then(response => response.json())
        .then(photoList => {
            for(let catPhoto of photoList){
                const image = document.createElement('img');
                image.classList.add('photo');
                image.src = catPhoto.url;

                catPhotos.appendChild(image);
            }
        })
})