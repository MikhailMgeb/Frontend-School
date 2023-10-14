const page = document.querySelector('.page');

fetch(
  `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${prompt('введи ключ API')}`)
  .then((response) => response.json())
  .then((word) => {
    const image = document.createElement('img');
    image.classList.add('theme');
    fetch(
      `https://api.unsplash.com/search/photos?query=${word.word}&client_id=Sc_x-ousk_bVIWSlFcHp9sER1cCtnxwmZDd8quQnCyk`
    )
      .then((response) => response.json())
      .then((url) => {
        image.src = url.results[0].urls.full;
        page.appendChild(image);
      })
      .catch(() => {
        fetch(
          `https://api.unsplash.com/photos/random?client_id=Sc_x-ousk_bVIWSlFcHp9sER1cCtnxwmZDd8quQnCyk`
        )
          .then((response) => response.json())
          .then((url) => {
            image.src = url.urls.full;
            page.appendChild(image);
          })
          .catch(console.log('нет фотки!!!'));
      });
  })
  .finally(() => {
    const loader = document.querySelector('.lds-ring');
    loader.classList.add('hidden');
  });
