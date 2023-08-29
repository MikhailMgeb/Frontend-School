const battery = document.querySelector('.battery')


battery.addEventListener('click', async function () {
    const manager = await navigator.getBattery();
    const level = manager.level;
    battery.textContent = `Уровень батареи: ${level * 100}` + "%";
})
