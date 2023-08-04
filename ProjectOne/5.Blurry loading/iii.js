const blur = document.querySelector('.blur')
const back = document.querySelector('.back')

let load = 0

let int = setInterval(opaque,30)

function opaque() {
     load++

     if(load > 99) {
          clearInterval(int)
     }

     back.innerText = `${load}%`
     back.style.opacity = scale(load,0,100,1,0)
     blur.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}