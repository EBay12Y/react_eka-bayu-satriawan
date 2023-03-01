function submitForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    alert("Thank you for contacting us!\n\nNama: " + firstName + " " + lastName + "\nEmail: " + email + "\nMessage: " + message);
}

const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

function checkInput() {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.style.border = '2px solid green';
            } else {
                input.style.border = '2px solid red';
            }
        });
    });
}

checkInput();
