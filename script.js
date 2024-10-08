// Toggle active class for navigation menu items
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav ul li a.active')?.classList.remove('active');
        this.classList.add('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple slider for logo section
let sliderIndex = 0;
function showSlider() {
    const slides = document.querySelectorAll('.slider img');
    slides.forEach((img, index) => img.style.display = index === sliderIndex ? 'block' : 'none');
    sliderIndex = (sliderIndex + 1) % slides.length;
}
setInterval(showSlider, 2000);

// Dark mode toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = 'Toggle Dark Mode';
darkModeBtn.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Testimonials fade-in effect
window.addEventListener('scroll', () => {
    const testimonials = document.querySelector('.testimonials');
    const sectionPos = testimonials.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (sectionPos < screenPos) {
        testimonials.classList.add('fade-in');
    }
});
// Automatic slider animation
const slider = document.querySelector('.slider');
let sliderWidth = slider.scrollWidth;
let currentPos = 0;
let moveSlider;

function startSlider() {
    moveSlider = setInterval(() => {
        currentPos -= 2;  // Adjust the speed here by changing the value
        if (Math.abs(currentPos) >= sliderWidth / 2) {
            currentPos = 0;
        }
        slider.style.transform = `translateX(${currentPos}px)`;
    }, 30);  // Controls the speed of the slide
}

function stopSlider() {
    clearInterval(moveSlider);
}

// Start the slider when page loads
window.addEventListener('load', () => {
    startSlider();

    // Stop the slider when hovered (if desired)
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);
});
// Array of background images
const backgrounds = [
    'background1.jpeg', // Coding image 1
    'background2.jpeg', // Coding image 2
    'background3.jpeg'  // Coding image 3
];
// Index for the current background
let currentBackground = 0;

// Function to change background
function changeBackground() {
    // Update the current background index
    currentBackground = (currentBackground + 1) % backgrounds.length;

    // Set the new background image with a smooth transition
    document.body.style.transition = 'background-image 1s ease-in-out';
    document.body.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
}

// Set the initial background immediately on page load
document.body.style.backgroundImage = `url(${backgrounds[currentBackground]})`;

// Change background every 5 seconds
setInterval(changeBackground, 5000);
// Log to console to ensure script is running
console.log("Background image script is running. Current image:", backgrounds[currentBackground]);// Function to change background
function changeBackground() {
    currentBackground = (currentBackground + 1) % backgrounds.length;
    const newBackground = backgrounds[currentBackground];
    document.body.style.transition = 'background-image 1s ease-in-out';
    document.body.style.backgroundImage = `url(${newBackground})`;
    console.log("Changed background to:", newBackground); // Log current background
}
