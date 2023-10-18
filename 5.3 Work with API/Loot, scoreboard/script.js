const API_KEY = 'b27133ddfb0c08a0707a8803a2bae2d9';
const valueRUB = document.querySelector('.scoreboard__rub');
const valueGEL = document.querySelector('.scoreboard__gel');

const currencyExchange = () => {
  fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      valueRUB.textContent = data.rates.RUB.toFixed(2) + ' RUB';
      valueGEL.textContent = data.rates.GEL.toFixed(2) + ' GEL';
    })
    .finally(() => {
      setInterval(currencyExchange, 2000);
    });
};

currencyExchange();
