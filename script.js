document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previene el comportamiento predeterminado del enlace

            const targetId = link.getAttribute('href').substring(1);

            // Oculta todas las secciones
            sections.forEach(section => {
                section.classList.remove('seccion-activa');
                section.classList.add('oculto');
            });

            // Muestra la sección clicada
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('oculto');
                targetSection.classList.add('seccion-activa');
            }
        });
    });
});