const showPasswordIcon = document.querySelector('#showPassword');
const hidePasswordIcon = document.querySelector('#hidePassword');
const passwordInput = document.querySelector('#password');
const form = document.getElementById('registrationForm');

showPasswordIcon.addEventListener('click', function () {
    passwordInput.setAttribute('type', 'text');
    showPasswordIcon.style.display = 'none';
    hidePasswordIcon.style.display = 'inline';
});

hidePasswordIcon.addEventListener('click', function () {
    passwordInput.setAttribute('type', 'password');
    hidePasswordIcon.style.display = 'none';
    showPasswordIcon.style.display = 'inline';
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    alert(`Ім'я: ${firstName}\nФамілія: ${lastName}`);
});


