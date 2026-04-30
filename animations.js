// Плавный скролл для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200, // Увеличили длительность для "кинематографичности"
        easing: 'ease-out-back', // Эффект небольшой пружины при появлении
        once: false, // Теперь анимация будет повторяться при прокрутке вверх-вниз
        mirror: true,
        anchorPlacement: 'top-bottom',
    });
});