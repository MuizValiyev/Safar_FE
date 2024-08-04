

const openPopupButton2 = document.getElementById('openPopup2');
const openPopupImage = document.getElementById('openPopupImage');
const popup2 = document.getElementById('popup2');

openPopupButton2.addEventListener('click', (event) => {
    const rect = openPopupButton2.getBoundingClientRect();
    popup2.classList.toggle('show');
});
openPopupImage.addEventListener('click', (event) => {
    event.stopPropagation();  // Prevent the event from bubbling up to the button
    const rect = openPopupImage.getBoundingClientRect();
    popup2.classList.toggle('show');
});


document.addEventListener('click', (event) => {
    if (!popup2.contains(event.target) && event.target !== openPopupButton2) {
        popup2.classList.remove('show');
    }
});


window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    setTimeout(function() {
        loader.classList.add('hidden');
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500); // Время исчезновения
    }, 1000); // Задержка перед исчезновением
});