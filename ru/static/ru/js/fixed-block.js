// script.js
document.addEventListener("DOMContentLoaded", function() {
    var fixedBlock = document.getElementById("fixed-block");
    var offsetTop = fixedBlock.offsetTop;
    var offsetAdjust = 120; // Смещение для фиксирования

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > offsetTop - offsetAdjust) {
            fixedBlock.classList.add("fixed");
        } else {
            fixedBlock.classList.remove("fixed");
        }
    });
});
