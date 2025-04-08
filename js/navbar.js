window.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.getElementById('nav-links');
        let state = false;
        window.toggleBurger = () => {
            if (!state) {
                navLinks.style.display = "block";
                state = true;
            } else {
                navLinks.style.display = "none";
                state = false;
            }
        };
    });