import { API_KEY } from './apiKey.js';
const valueRUB = document.querySelector('.scoreboard__rub');
const valueGEL = document.querySelector('.scoreboard__gel');

function exchangeRates() {
  fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      valueRUB.textContent = Number(data.rates.RUB).toFixed(2) + ' RUB';
      valueGEL.textContent = Number(data.rates.GEL).toFixed(2) + ' GEL';
    })
    .finally(() => {
      const timerId = setTimeout(() => {
        exchangeRates()
      }, 10000)
    });
}

exchangeRates()