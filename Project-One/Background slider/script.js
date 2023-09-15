const body = document.body
const slides = document.querySelectorAll('.slide')
const Lbtn = document.getElementById('left')
const Rbtn = document.getElementById('right')

let activeslides = 0

Rbtn.addEventListener('click', () => {
    activeslides++

    if (activeslides > slides.length - 1) {
         activeslides = 0
    }
    setbgbody()
    setactiveslides()
})

Lbtn.addEventListener('click', () => {
    activeslides--

    if (activeslides < 0) {
         activeslides = slides.length - 1
    }
    setbgbody()
    setactiveslides()
})

setbgbody()

function setbgbody() {
    body.style.backgroundImage = slides[activeslides].style.backgroundImage
}

function setactiveslides() {
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeslides].classList.add('active')
}