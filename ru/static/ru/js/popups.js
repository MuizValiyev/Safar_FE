const openPopupButton2 = document.getElementById('openPopup2');
const openPopupImage = document.getElementById('openPopupImage');
const popup2 = document.getElementById('popup2');
const openPopupAccount = document.getElementById('openPopupAccount');
const PopupAccount = document.getElementById('popup_account');



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



openPopupAccount.addEventListener('click', (event) => {
    const rect = openPopupAccount.getBoundingClientRect();
    PopupAccount.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!PopupAccount.contains(event.target) && event.target !== openPopupAccount) {
        PopupAccount.classList.remove('show');
    }
});



