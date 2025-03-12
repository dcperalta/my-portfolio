const form = document.getElementById('signUp');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

const successMessage = document.getElementById('successMessage');


document.getElementById('projects').addEventListener('click', function() {
  alert('Button clicked');
});

function showDetails(id) {
    var element = document.getElementById(id);
    element.classList.toggle("togglestyle");
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
});

form.addEventListener('submit', function(event) {
    // Clear any previous error messages
    nameError.textContent = '';

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        event.preventDefault(); // Prevent form submission
    }
});

form.addEventListener('submit', function(event) {
    // Clear any previous error messages
    nameError.textContent = '';
    emailError.textContent = '';

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        event.preventDefault();
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        event.preventDefault();
    } else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        event.preventDefault();
    }
});

// Function to validate email format
function validateEmail(email) {
		const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email));
}

form.addEventListener('submit', function(event) {
    // Clear any previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        event.preventDefault();
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        event.preventDefault();
    } else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        event.preventDefault();
    }
});

form.addEventListener('submit', function(event) {
    // Clear any previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    successMessage.textContent = ''; // Clear previous success message

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    // If all inputs are valid, show success message
    if (isValid) {
        successMessage.textContent = 'Welcome ' + nameInput.value + '! You have successfully signed up for the newsletter!';
    }

    event.preventDefault(); // Prevent form from actually submitting
});