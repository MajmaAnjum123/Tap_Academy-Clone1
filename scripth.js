document.addEventListener('DOMContentLoaded', () => {
    // Handle Sign-In Form Submission
    const signInForm = document.querySelector('.sign-in-form form');
    signInForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email && password) {
            alert(`Welcome back! You are signed in with ${email}`);
        } else {
            alert('Please enter both email and password');
        }
    });

    // Handle Sign-Up Form Submission
    const signUpForm = document.querySelector('.sign-up-form form');
    signUpForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email-signup').value;
        const password = document.getElementById('password-signup').value;
        if (username && email && password) {
            alert(`Congratulations ${username}! Your account has been created.`);
        } else {
            alert('Please fill all the required fields');
        }
    });

    // Handle Registration Form Submission
    const registrationForm = document.querySelector('.registration-form form');
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email-register').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;
        const year = document.getElementById('year').value;
        const branch = document.getElementById('branch').value;

        if (name && email && phone && dob && year && branch) {
            alert(`Thank you ${name} for registering. We will contact you at ${email}.`);
        } else {
            alert('Please fill all the required fields');
        }
    });
});
