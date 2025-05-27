function menuIcon() {
    document.querySelector('.menu-list').classList.toggle('show');
    document.querySelector('nav').classList.toggle('activeNavBar');

};


const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector('.accordion-arrow');

        content.classList.toggle('open');
        arrow.classList.toggle('rotate');
    });
});