const navbar = document.querySelector('.navbar');
const navbaroffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbar_links = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressbarpercent = [97, 89, 85, 87, 80, 70, 50]

window.addEventListener('scroll', () => {
    mainfn();
});

const mainfn = () => {
    if (window.pageYOffset >= navbaroffsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbar_links.forEach(navbar_link => {
               navbar_link.classList.remove('change');
            })
            navbar_links[i].classList.add('change');
        }            
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, i) => {
            el.style.width = `${progressbarpercent[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressbarpercent[i];
        });
    }
};

mainfn();

window.addEventListener('resize', () => {
    window.location.reload();
});