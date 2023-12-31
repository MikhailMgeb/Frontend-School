import { API_KEY } from './apiKey.js';

const catGallery = document.querySelector('.cat-gallery');
const selectCats = document.querySelector('.cat-gallery__select');
const catPhotos = document.querySelector('.cat-photos');

selectCats.disabled = true;

fetch('https://api.thecatapi.com/v1/breeds')
  .then((response) => response.json())
  .then((dataset) => {
    for (const name of dataset) {
      const option = document.createElement('option');
      option.textContent = name.name;
      option.value = name.id;
      selectCats.appendChild(option);
    }
  })
  .finally(() => {
    selectCats.disabled = false;
  });

  const loader = document.createElement('div');

selectCats.addEventListener('input', (event) => {
  loader.classList.add('loader');
  catGallery.appendChild(loader);
  selectCats.disabled = true;
  const choice = event.target.value;
  fetch(`https://api.thecatapi.com/v1/images/search?limit=15&breed_ids=${choice}&api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((photoList) => {
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
      loader.classList.remove('loader');
    });
});
