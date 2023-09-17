const API_KEY = '94a17fefa325f09b65a0abe6ef3d0a12';
const from = 'EUR';
const to = 'GBP';
const amount = '10';
const endpoint = 'convert';

fetch('http://api.exchangeratesapi.io/v1/latest?access_key=6038913e1d493ee6d5f41ecb1965d643')
    .then(response => response.json())
    .then(data => console.log(data))
