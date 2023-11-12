const params = {
    url: 'https://api.unsplash.com/photos?',
    clientId: 'client_id=Sc_x-ousk_bVIWSlFcHp9sER1cCtnxwmZDd8quQnCyk',
    amount: 'per_page'
}

const container = document.querySelector('.swiper-wrapper');
const mySwiper = document.querySelector('.mySwiper');

function renderPhoto(data) {
    const div = document.createElement('div');
    div.classList.add('swiper-slide')

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = data.urls.full;
    image.alt = "This is an awesome image";

    div.appendChild(image);
    container.appendChild(div);
}

fetch(params.url + params.clientId)
    .then(response => response.json())
    .then(elements => {
        for (const element of elements) {
            renderPhoto(element);
        }
    })


const divSwiperButtonNext = document.createElement('div');
divSwiperButtonNext.classList.add('swiper-button-next');

const divSwiperButtonPrev = document.createElement('div');
divSwiperButtonPrev.classList.add('swiper-button-prev');

const divSwiperPagination = document.createElement('div');
divSwiperPagination.classList.add('swiper-pagination');

mySwiper.appendChild(divSwiperButtonNext);
mySwiper.appendChild(divSwiperButtonPrev);
mySwiper.appendChild(divSwiperPagination);

