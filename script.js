// Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Scroll Animations
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Active Nav Link Highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Testimonial Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

setInterval(() => {
    testimonialCards[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    testimonialCards[currentTestimonial].classList.add('active');
}, 5000);

// FAQ Accordion
const faqItems = document.querySelectorAll('faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Pricing Toggle
const billingToggle = document.getElementById('billing-toggle');
const prices = document.querySelectorAll('.price');

billingToggle.addEventListener('change', () => {
    prices.forEach(price => {
        price.textContent = billingToggle.ariaChecked
            ? price.dataset.yearly
            : price.dataset.monthly;
    });
});

document.querySelector('.hero').addEventListener('mousemove', e => {
    const rect = e.target.getBoundingClientRect();
    e.target.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.target.style.setProperty('--y', `${e.clientY - rect.top}px`);
});

