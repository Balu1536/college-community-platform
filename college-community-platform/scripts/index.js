// Function to handle the toggle of the navigation menu on smaller screens
function toggleNav() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Optional: Alert message when a nav link is clicked
function showAlert(event) {
    // You can customize the message or remove this if unnecessary
    // alert(`You clicked on: ${event.target.textContent}`);
}

// DOMContentLoaded ensures the HTML is fully loaded before scripts run
document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle setup
    const menuToggleBtn = document.getElementById('menuToggle');
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', toggleNav);
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

    // Nav link alert (optional)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', showAlert);
    });

    // Dark Mode Toggle Button Logic
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});
