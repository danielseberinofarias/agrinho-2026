document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll Reveal Premium
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, i * 120);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.card, .gallery-item, .section').forEach(el => {
        el.style.transition = 'all 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)';
        el.style.opacity = 0;
        el.style.transform = 'translateY(60px)';
        observer.observe(el);
    });
});
