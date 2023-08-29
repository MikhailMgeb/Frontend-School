const getGeolocation = new Promise(function (resolve, reject) {

    function success(position) {
        resolve(position);
    }

    function error() {
        reject(new Error('не могу считать!'));
    }

    navigator.geolocation.getCurrentPosition(success, error);
})

getGeolocation.then((value) => {
    console.log(value.coords.latitude);
    console.log(value.coords.longitude);
}).catch(() => console.log('Ошибка поиска геолокации!!!'))
