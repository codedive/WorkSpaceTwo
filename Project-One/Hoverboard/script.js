const container = document.getElementById('contain')
const colors = ['slateblue', 'rebeccapurple', 'hotpink', 'orchid', 'red', 'orange', 'green']

const squares = 500

for(let i = 0; i < squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setcolor(square))

    square.addEventListener('mouseout', () => removecolor(square))

    container.appendChild(square)

}

function setcolor(element) {
    const color = getrandomcolor()
    element.style.background = color
    element.style.boxshadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removecolor(element) {
    element.style.background = `#1d1d1d`
    element.style.boxshadow = `0 0 2px #000`
}

function getrandomcolor() {
    return colors[Math.floor(Math.random() * colors.length)]
}