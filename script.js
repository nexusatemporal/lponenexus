// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.mobile-menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// Smooth scroll for anchor links (polyfill support only if needed, but CSS scroll-behavior: smooth handles most)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Offset for fixed navbar
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
