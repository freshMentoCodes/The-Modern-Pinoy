document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', () => {
        const visibility = navList.getAttribute('data-visible') === 'true' ? 'false' : 'true';
        navList.setAttribute('data-visible', visibility);
        navToggle.setAttribute('aria-expanded', visibility);
    });

    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                navList.setAttribute('data-visible', 'false');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});

AOS.init({
    duration: 700,
    easing: 'ease-out-quart',
    once: true
});