const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')
const timel = document.getElementById('time')
const scorel = document.getElementById('score')
const messageEL = document.getElementById('message')
const game_container = document.getElementById('game-container')
const choose_inst_btn = document.querySelectorAll('.choose-inst-btn')

let second = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_inst_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = {src, alt}
        screens[1].classList.add('up')
        setTimeout(createinsect, 1000)
        startgame()
    })
})

function startgame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(second / 60)
    let s = second % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timel.innerHTML = `Time: ${m}:${s} `
    second++
}

function createinsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" 
    style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', caughtinsect)
    game_container.appendChild(insect)

}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function caughtinsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addinsects()
}

function addinsects() {
    setTimeout(createinsect, 1000)
    setTimeout(createinsect, 1500)
}

function increaseScore() {
    score++

    if (score >19) {
        message.classList.add('visible')
    }
    scorel.innerHTML = `Score: ${score}`
}