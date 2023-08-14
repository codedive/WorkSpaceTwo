const tests = document.getElementById('test')
const speeds = document.getElementById('speed')

const text = 'we are Programmers'
let idx = 1

let speed = 300 / speeds.value

movetext()

function movetext() {
    tests.innerText = text.slice(0, idx)
    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(movetext, speed)
}

speeds.addEventListener('input', (e) => speed = 300 / e.target.value)