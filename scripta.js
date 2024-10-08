// Highlight Placed Students section when the page loads
window.addEventListener('load', function () {
    const placedStudentsSection = document.querySelector('.placed-students');

    // Add a highlight class to placed students section
    placedStudentsSection.classList.add('highlight');

    // Remove highlight class after a few seconds
    setTimeout(() => {
        placedStudentsSection.classList.remove('highlight');
    }, 3000);
});
