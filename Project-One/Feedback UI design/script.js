const ratings = document.querySelectorAll('.rating')
const ratingscontainer = document.querySelector('.ratings-container')
const sendbtn = document.querySelector('#send')
const panel  = document.querySelector('#panel')
let selectrating = 'satisfied'

ratingscontainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectrating = e.target.
        nextElementSibiling.innerHTML
    }
})

sendbtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong><br>
    <strong>Feedback:${selectrating}</strong>
    <p>we'll use your feedback to improve our customer support </p>
    `
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}