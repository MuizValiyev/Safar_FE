
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    setTimeout(function() {
        loader.classList.add('hidden');
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500); // Время исчезновения
    }, 1000); // Задержка перед исчезновением
});
