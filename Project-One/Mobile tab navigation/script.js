const contents = document.querySelectorAll('.content')
const listitem = document.querySelectorAll('nav ul li')

listitem.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        hideallcontent()
        hideallitem()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideallcontent() {
    contents.forEach(content => content.classList.remove('show'))
}

function hideallitem() {
    listitem.forEach(item => item.classList.remove('active'))
}