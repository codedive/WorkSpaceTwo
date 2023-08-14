const icons = document.querySelectorAll('.section-one-icons i')

let x = 1

setInterval(() => {
    x++

    const icon = document.querySelector('.section-one-icons .change')
    
    icon.classList.remove('change')
    if (x > icons.length) {
        icons[0].classList.add('change')
        x = 1
    } else {
        icon.nextElementSibling.classList.add('change')
    }
     
},4000)