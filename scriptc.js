// Get the form element
const form = document.querySelector('form');

// Listen for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    
    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;

    // Display a confirmation message
    alert(`Thank you, ${name}! You have registered for the ${course} course. We will contact you at ${email} or ${phone} shortly.`);
    
    // Clear form after submission
    form.reset();
});
