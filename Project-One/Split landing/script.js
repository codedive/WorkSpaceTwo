const contain = document.querySelector('.contain')
const left = document.querySelector('.left')
const right = document.querySelector('right')

left.addEventListener('mouseenter', () => contain.classList.add('hover-left'))
left.addEventListener('mouseleave',() =>contain.classList.remove('hover-left'))

right.addEventListener('mouseenter',() =>contain.classList.add('hover-right'))
right.addEventListener('mouseleave',() =>contain.classList.add('hover-right'))