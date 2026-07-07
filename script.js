// script.js - AGRINHO 2026
document.addEventListener('DOMContentLoaded', () => {

    // Rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animação ao rolar (Scroll Reveal)
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.style.transition = 'all 0.8s ease';
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        observer.observe(section);
    });

    console.log('🚀 AGRINHO 2026 - Script carregado com sucesso!');
});
