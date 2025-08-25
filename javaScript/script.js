document.addEventListener('DOMContentLoaded', function() {
const nav_toggle = document.querySelector('.nav-toggle');
const nav_toggle_icon = document.querySelector('.nav-toggle i');
const nav_movile = document.querySelector('.nav-movile');

nav_toggle.onclick = function() {
    nav_movile.classList.toggle('open');
    const isOpen = nav_movile.classList.contains('open');
    nav_toggle_icon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

}
const enlaces = document.querySelectorAll('.nav-movile a');
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        nav_movile.classList.remove('open');
        nav_toggle_icon.classList = 'fa-solid fa-bars';
    });
})
});
