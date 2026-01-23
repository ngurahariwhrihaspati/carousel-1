// Burger Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    const menuLinks = document.querySelectorAll('.overlay-menu a');

    // Toggle menu visibility on burger button click
    burgerBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });

    // Close menu when a menu link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu-wrapper')) {
            navMenu.classList.remove('active');
        }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
        }
    });
});

// Function to change menu position programmatically
function setMenuPosition(position) {
    const menu = document.getElementById('navMenu');
    menu.classList.remove('menu-left', 'menu-right', 'menu-top', 'menu-bottom', 'menu-top-right');
    menu.classList.add(`menu-${position}`);
    localStorage.setItem('menuPosition', position);
}

// Restore menu position from localStorage if saved
document.addEventListener('DOMContentLoaded', function() {
    const savedPosition = localStorage.getItem('menuPosition') || 'top-right';
    setMenuPosition(savedPosition);
});