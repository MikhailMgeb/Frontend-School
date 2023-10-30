import { API_KEY } from './apiKey.js';

const page = document.querySelector('.page');
const image = document.createElement('img');

fetch(
  `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((word) => {
    image.classList.add('theme');
    return fetch(
      `https://api.unsplash.com/search/photos?query=${word.word}&client_id=Sc_x-ousk_bVIWSlFcHp9sER1cCtnxwmZDd8quQnCyk`
    )
      .then((response) => response.json())
      .then((url) => {
        image.src = url.results[0].urls.full;
        page.appendChild(image);
      })
      .catch(() => { });
  })
  .finally(() => {
    const loader = document.querySelector('.lds-ring');
    loader.classList.add('hidden');
  });

fetch(`https://api.unsplash.com/photos/random?client_id=Sc_x-ousk_bVIWSlFcHp9sER1cCtnxwmZDd8quQnCyk`)
  .then((response) => response.json())
  .then((url) => {
    console.log(url.urls.full)
    image.src = url.urls.full;
    page.appendChild(image);
  })
  .catch(console.log('нет фотки!!!'));
