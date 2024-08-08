
document.addEventListener('DOMContentLoaded', function() {
    var usernameInput = document.querySelector('input[id="id_username"]');
    var passwordInput = document.querySelector('input[id="id_password"]');
    var old_passwordInput = document.querySelector('input[id="id_old_password"]');
    var new_password1Input = document.querySelector('input[id="id_new_password1"]');
    var new_password2Input = document.querySelector('input[id="id_new_password2"]');
    var emailInput = document.querySelector('input[id="id_email"]');
    var first_nameInput = document.querySelector('input[id="id_first_name"]');
    var id_password1Input = document.querySelector('input[id="id_password1"]');
    var id_password2Input = document.querySelector('input[id="id_password2"]');

    console.log(usernameInput, passwordInput, old_passwordInput, new_password1Input, new_password2Input, emailInput, first_nameInput);

    if (usernameInput && !usernameInput.hasAttribute('placeholder')) {
        usernameInput.setAttribute('placeholder', 'Имя Пользователя');
    }

    if (passwordInput && !passwordInput.hasAttribute('placeholder')) {
        passwordInput.setAttribute('placeholder', 'Пароль');
    }

    if (old_passwordInput && !old_passwordInput.hasAttribute('placeholder')) {
        old_passwordInput.setAttribute('placeholder', 'Старый Пароль');
    }

    if (new_password1Input && !new_password1Input.hasAttribute('placeholder')) {
        new_password1Input.setAttribute('placeholder', 'Новый пароль');
    }

    if (new_password2Input && !new_password2Input.hasAttribute('placeholder')) {
        new_password2Input.setAttribute('placeholder', 'Новый пароль (Ещё раз)');
    }

    if (emailInput && !emailInput.hasAttribute('placeholder')) {
        emailInput.setAttribute('placeholder', 'E-mail');
    }

    if (first_nameInput && !first_nameInput.hasAttribute('placeholder')) {
        first_nameInput.setAttribute('placeholder', 'Имя');
    }
    if (id_password1Input && !id_password2Input.hasAttribute('placeholder')) {
        id_password1Input.setAttribute('placeholder', 'Пароль');
    }
    if (id_password2Input && !id_password2Input.hasAttribute('placeholder')) {
        id_password2Input.setAttribute('placeholder', 'Пароль (Ещё раз)');
    }
});

