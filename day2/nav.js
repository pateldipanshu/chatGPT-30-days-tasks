const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Show/hide menu
    if (navLinks.classList.contains('active')) {
        hamburger.classList.add('close'); // Switch to close icon
    } else {
        hamburger.classList.remove('close'); // Switch back to hamburger icon
    }
});
