import {API_KEY} from './key.js';
const valueRUB = document.querySelector('.scoreboard__rub');
const valueGEL = document.querySelector('.scoreboard__gel');

//const exchangeRates = fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`)

const exchangeRates = fetch(`http://127.0.0.1:5500/date.json`)
  .then((response) => response.json())
  .then((data) => {
    clearInterval(exchangeRates);
    valueRUB.textContent = data.rates.RUB.toFixed(2) + ' RUB';
    valueGEL.textContent = data.rates.GEL.toFixed(2) + ' GEL';
  })
  .finally(() => {
    setInterval(exchangeRates, 50000);
  });


