const page = document.querySelector('.page');

page.addEventListener('keydown', function (event) {
    if (event.keyCode === 67 && event.ctrlKey === true) {
        let select = window.getSelection();
        select = select + ' скопировано с ' + window.location.href;
        navigator.clipboard.writeText(select);
    }
})

page.addEventListener('copy', () => {
    let select = window.getSelection();
    select = select + ' скопировано с ' + window.location.href;
    navigator.clipboard.writeText(select);
})
