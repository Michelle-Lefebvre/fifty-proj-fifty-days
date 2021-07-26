const toggles = document.querySelectorAll('.faq-toggle');

// toggle buttons active
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});