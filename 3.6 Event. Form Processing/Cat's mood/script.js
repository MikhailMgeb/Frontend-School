const form = document.querySelector('.form');
const blockImage = document.querySelector('.block-image');

const image = document.createElement('img');
image.classList.add('image');

const formData = {};
const catImagePaths = {
    "funny": "/image/ginger/cat-1-1.png",
    "sad": "/image/ginger/cat-2-1.png",
    "sadskinny": "/image/ginger/cat-2-1.png",
    "sadfat": "/image/weigth/1.jpg",
    "funnyskinnyginger": "/image/ginger/cat-1-1.png",  // веселый рыжый ('funny-ginger')
    "sadginger": "/image/ginger/cat-2-1.png",  // грустный рыжый ('sad-ginger')
    "funnystriped": " /image/striped/cat-1-2.png", // веселый рыжый ('funny-striped')
    "sadstriped": "/image/striped/cat-2-2.png", // веселый рыжый ('sad-striped')
    "sadgingerfat": "/image/weigth/1.png", // грустный рыжый толстый('sad-ginger')
    "sadgingerskinny": "/image/weigth/2.png", // грустный рыжый худой('sad-ginger')
    "sadstripedfat": "/image/weigth/3.png", // грустный полосатый худой('sad-ginger')
    "sadstripedfat": "/image/weigth/4.png", // грустный полосатый худой('sad-ginger')
};


form.addEventListener('input', function (event) {
    const target = event.target;
    const key = target.name;
    let keys = '';
    formData[key] = target.value;

    if (blockImage.contains(image)) {
        image.remove();
    }

    for (let value of Object.values(formData)) {
        keys += value;
        image.src = catImagePaths[keys];
    }

    blockImage.appendChild(image);
})

