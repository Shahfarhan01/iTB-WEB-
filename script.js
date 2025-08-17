document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});