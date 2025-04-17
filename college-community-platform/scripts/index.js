// Function to handle the toggle of the navigation menu on smaller screens
function toggleNav() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Function to handle click events for interactive links
function showAlert(event) {
    event.preventDefault();
    alert("You clicked on: " + event.target.textContent);

    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('active'); // auto-close menu
    }
}

// DOMContentLoaded ensures the HTML is fully loaded before scripts run
document.addEventListener('DOMContentLoaded', () => {
    // Add click alert + auto-close to all nav links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', showAlert);
    });

    // Toggle menu on click (mobile)
    const menuToggleBtn = document.getElementById('menuToggle');
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', toggleNav);

        // Optional: Toggle with keyboard for accessibility
        menuToggleBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') toggleNav();
        });
    }

    // FAQ toggle behavior
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});




