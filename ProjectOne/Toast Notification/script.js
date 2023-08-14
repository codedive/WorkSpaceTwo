const button = document.getElementById('bton')
const toasts = document.getElementById('toast')

const notify = ['Hello world', 'How are you ?', 'What are you doing?', "I don't know", 'What to do?' ]

const type = ['test', 'pass', 'failed']

button.addEventListener('click', () => createnote())

function createnote(notify = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomMessageMe())

    notif.innerText = notify ? notify : getRandomMessage()

    
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    },3000)
}

function getRandomMessage() {
    return notify[Math.floor(Math.random() * notify.length)]
}

function getRandomMessageMe() {
    return type[Math.floor(Math.random() * type.length)]
}