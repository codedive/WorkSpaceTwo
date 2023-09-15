const hide = document.querySelector('.hide')
const btn = document.querySelector('.btn')
const ins = document.querySelector('.ins')

btn.addEventListener('click',() => {
     hide.classList.toggle('active')
     ins.focus()
})