const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

const registerForm = document.querySelector('.form-box.register form');
const loginForm = document.querySelector('.form-box.login form');

// Forgot password elements
const forgotPopup = document.querySelector('.forgot-password-popup');
const forgotForm = document.getElementById('forgotForm');
const forgotEmail = document.getElementById('forgotEmail');
const closeForgot = document.querySelector('.icon-close-forgot');
const forgotLink = document.querySelector('.remember-forgot a');

// Show forgot password popup
forgotLink.addEventListener('click', (e) => {
    e.preventDefault();
    forgotPopup.classList.remove('hidden');
});

// Close forgot password popup
closeForgot.addEventListener('click', () => {
    forgotPopup.classList.add('hidden');
});

// Handle forgot form submit
forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = forgotEmail.value.trim();
    if (!emailValue || !/^\S+@\S+\.\S+$/.test(emailValue)) {
        alert("Please enter a valid registered email.");
        return;
    }

    alert("Reset link sent to: " + emailValue);
    forgotPopup.classList.add('hidden');
});

// Login/Register popup logic
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Register validation
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerForm.querySelector('input[type="text"]').value.trim();
    const email = registerForm.querySelector('input[type="email"]').value.trim();
    const password = registerForm.querySelector('input[type="password"]').value;
    const terms = registerForm.querySelector('input[type="checkbox"]').checked;

    if (!username) {
        alert("Username is required.");
        return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (!terms) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    alert("Registration successful!");
    wrapper.classList.remove('active');
});

// Login validation
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email.");
        return;
    }

    if (!password) {
        alert("Password is required.");
        return;
    }

    alert("Login successful!");
});
