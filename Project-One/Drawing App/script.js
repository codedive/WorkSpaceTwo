const canvas = document.getElementById('canvas')
const decreasebtn = document.getElementById('decrement')
const increasebtn = document.getElementById('increment')
const sizes = document.getElementById('size')
const colorEL = document.getElementById('color')
const clr = document.getElementById('clear')
const ctx = canvas.getContext('2d')

let size = 10
let color 
let isPressed = false 
let x
let y

canvas.addEventListener('mousedown',(e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup',(e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove',(e) => {
    if (isPressed) {
        
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawcircle(x2, y2)
        drawline(x, y, x2, y2)

        x = x2
        y = y2
    }
})


function drawcircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawline(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizes.innerText = size
}

decreasebtn.addEventListener('click', (e) => {
    size -= 5

    if (size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

increasebtn.addEventListener('click', (e) => {
    size += 5

    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

colorEL.addEventListener('change', (e) => color = e.target.value)

clr.addEventListener('click',(e) => ctx.clearRect(0, 0, canvas.width, canvas.height))



