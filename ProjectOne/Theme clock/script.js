const hourEL = document.querySelector('.hour')
const minuteEL = document.querySelector('.minute')
const secondEL = document.querySelector('.second')
const timeEL = document.querySelector('.time')
const dateEL = document.querySelector('.date')
const modeEL = document.querySelector('.mode')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

modeEL.addEventListener('click', (e) => {
     const html = document.querySelector('html')
     if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
     } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
     }
})

function timeset() {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursforclock = hour % 12
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM'

    hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hoursforclock, 0, 11, 0, 360)}deg)`
    minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
    secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

    timeEL.innerHTML = `${hoursforclock}:${minute < 10 ? `0${minute}` : minute} ${ampm}`
    dateEL.innerHTML = `${days[day]}, ${months[month]}, <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
       return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

timeset()

setInterval(timeset, 1000)