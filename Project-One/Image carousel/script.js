const imgs = document.getElementById('imgs')
const leftbtn = document.getElementById('left')
const rightbtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeimg()
}

function changeimg() {
    if (idx > img.length -1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetinterval() {
    clearInterval((interval))
    interval = setInterval(run, 2000)
}

leftbtn.addEventListener('click', () => {
    idx--
    changeimg()
    resetinterval()
})

rightbtn.addEventListener('click', () => {
    idx++
    changeimg()
    resetinterval()
})