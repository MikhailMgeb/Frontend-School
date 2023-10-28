import { openKey, secretKey, headField } from './keysApi.js';

fetch('https://api.ilovepdf.com/v1/auth', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(headField),
})
    .then((response) => response.json())
    .then((data) => console.log('data: ', data))
