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

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Optional: Close other items
        // faqItems.forEach(otherItem => {
        //     if (otherItem !== item) otherItem.classList.remove('active');
        // });

        item.classList.toggle('active');
    });
});

// Image Lightbox Modal
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("img-modal-content");
const galleryImages = document.querySelectorAll(".gallery-item img");
const closeModalBtn = document.querySelector(".close-modal");

// Open modal when clicking on gallery images
galleryImages.forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = "flex"; // Changed to flex for centering
        // modal.style.alignItems = "center"; // Handled by CSS/Flex usually, but lets ensure display block/flex consistency
        // Actually, CSS says modal is block usually, but let's stick to display: block if CSS says so, or flex for easier centering
        // The CSS provided earlier uses display: block for content but display: none for modal.
        // Let's use display: block as per CSS for modal, and apply flex centering via CSS if needed, or stick to margin: auto.
        // The CSS .modal uses padding-top 50px so it assumes block. 
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Close modal
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = "none";
    });
}

// Close when clicking outside the image
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Close on Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});
