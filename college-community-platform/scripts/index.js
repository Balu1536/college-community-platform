// Function to handle the toggle of the navigation menu on smaller screens
function toggleNav() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Function to handle click events for interactive links
function showAlert(event) {
    event.preventDefault();
    alert("You clicked on: " + event.target.textContent);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Get all the navigation links and add click event listeners
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', showAlert);
    });

    // Add a click event to toggle the mobile navigation menu
    const menuToggleBtn = document.getElementById('menuToggle');
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', toggleNav);
    }
});
