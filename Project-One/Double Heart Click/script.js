const hearts = document.querySelector('.heart')
const times = document.querySelector('#times')

let clicktime = 0
let timesClicked = 0

hearts.addEventListener('click',(e) => {
     if (clicktime === 0) {
         clicktime = new Date().getTime()
     } else {
        if ((new Date().getTime() - clicktime) < 800) {
            createheart(e)
        } else {
            clicktime =  new Date().getTime()
        }
     }
})

const createheart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftoffset = e.target.offsetLeft
    const topoffset = e.target.offsetTop

    const insidex = x - leftoffset
    const insidey = y - topoffset

    heart.style.top = `${insidey}px`
    heart.style.left = `${insidex}px`

    hearts.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(),1000)
}