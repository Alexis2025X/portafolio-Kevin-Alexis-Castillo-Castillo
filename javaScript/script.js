document.addEventListener('DOMContentLoaded', function() {
const nav_toggle = document.querySelector('.nav-toggle');
const nav_toggle_icon = document.querySelector('.nav-toggle i');
const nav_movile = document.querySelector('.nav-movile');


// para el menu hamburguesa
nav_toggle.onclick = function() {
    nav_movile.classList.toggle('open');
    const isOpen = nav_movile.classList.contains('open');
    nav_toggle_icon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

}
const enlaces = document.querySelectorAll('.nav-movile a');

    //para el menu pcs
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.nav-desktop a[href="#${id}"]`);
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-desktop a').forEach(link => {
                link.classList.remove('selected');
            });
            if (navLink) {
                navLink.classList.add('selected');
            }
        }

    });
}, {
    rootMargin: "0% 0px 30% 0px", threshold: 0.5 
});
//Falta arreglar el observer del menu movil
const observer_movile = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id_movile = entry.target.getAttribute('id');
        const navLink_movile = document.querySelector(`.nav-movile a[href="#${id_movile}"]`);
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-movile a').forEach(link_movile => {
                link_movile.classList.remove('selected');
            });
            if (navLink_movile) {
                navLink_movile.classList.add('selected');
            }
        }
    });
}, {
    rootMargin: "0% 0px 10% 0px", threshold: 0.5 
});


//Para cerrar el menu movil al dar click en un enlace
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        nav_movile.classList.remove('open');
        nav_toggle_icon.classList = 'fa-solid fa-bars';
    });
    const hash = enlace.getAttribute('href');
    const target = document.querySelector(hash);
    if (hash.startsWith('#')) {
        if (target) {
            observer.observe(target);
            observer_movile.observe(target);
        }
    }
})

//Botón traductor
const button_traductor = document.getElementById('button-traductor');
button_traductor.addEventListener('click', () => {
    if(button_traductor.innerHTML === `<i class="fa-solid fa-globe"></i>${button_traductor.innerText = "Español"}`) {
        //button_traductor.innerText = 'Español';

        button_traductor.innerHTML = `<i class="fa-solid fa-globe"></i>${button_traductor.innerText = "Ingles"}`;
        button_traductor.setAttribute('data-lenguaje', 'es');
            //alert('Función en desarrollo');
    } else {
        button_traductor.innerHTML = `<i class="fa-solid fa-globe"></i>${button_traductor.innerText = "Español"}`;
        button_traductor.setAttribute('data-lenguaje', 'en');
        //button_traductor.innerText = 'Ingles';
            //alert('Función en terminada');
    }
});


const traductor = document.querySelectorAll("[data-lenguaje]");
const textToChange = document.querySelectorAll("[data-section]");
traductor.forEach((button) => {
    button.addEventListener('click', () => {
        //const lang = button.getAttribute('data-lenguaje');
        //console.log(button.getAttribute('data-lenguaje'));
        fetch(`json/${button.getAttribute('data-lenguaje')}.json`)
            .then(res => res.json()) 
            .then(data => {
                textToChange.forEach(element => {
                    const section = element.getAttribute('data-section');
                    const value = element.getAttribute('data-value');
                    element.innerHTML = data[section][value];
                    element.placeholder = data[section][value]
                    
                    // console.log(element.innerHTML = data[section][value])
                    //console.log(element.ariaPlaceholder = data[section][value])
                })
            })
    })
})






});

