// Smooth scrolling for internal links
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId !== '#') {
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Carousel functionality for testimonials
const carousel = document.querySelector('.testimonial-carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    carousel.scrollLeft = scrollLeft - walk;
});

// JavaScript to trigger testimonial animation on scroll
window.addEventListener('scroll', function() {
    const testimonialsSection = document.querySelector('.testimonials');
    const sectionPosition = testimonialsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        testimonialsSection.style.opacity = '1';
        testimonialsSection.style.transform = 'translateY(0)';
    }
});
