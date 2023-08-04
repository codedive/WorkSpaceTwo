const animie = document.querySelectorAll('.animi')

window.addEventListener('scroll',checkbox)

checkbox()

function checkbox() {
    const triggerbottom = window.innerHeight / 5 * 4;

    animie.forEach(animi => {
        const boxtop = animi.getBoundingClientRect().top

        if(boxtop < triggerbottom) {
            animi.classList.add('show');
        }
        else{
            animi.classList.remove('show');
        }
    })
}
