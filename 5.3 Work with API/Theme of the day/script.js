
fetch('https://api.wordnik.com/v4/words.json/randomWord?api_key=luxfw7rqui299pwpwdflamw9baggz1zl55jm0dpxqjz1h3ym6')
    .then(response => response.json())
    .then(word => {
        console.log(word.word)
        fetch(`https://api.unsplash.com/search/photos?query=${word.word}`, {
            headers:{
                client_id: 'Sc_x-ousk_bVIWSlFcHp9sER1cCtnxwmZDd8quQnCyk'
            }
        })
        .then(response => response.json())
        .then(url => console.log(url))
    })

