const API_KEY = '&luxfw7rqui299pwpwdflamw9baggz1zl55jm0dpxqjz1h3ym6'
const urlApi = 'https://www.wordnik.com/word-of-the-day/words.json/randomWord'

fetch(urlApi, {
    headers: {
        API_KEY
    }
})
    .then(response => response.json())
    .then(result => console.log(result))