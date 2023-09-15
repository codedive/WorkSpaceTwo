const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.count')
const finalEL = document.querySelector('.final')
const Replay = document.querySelector('#replay')

runanimi()

function resetdom() {
    counter.classList.remove('hide')
    finalEL.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value =''
    })

    nums[0].classList.add('in')

}

function runanimi() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalEL.classList.add('show')
            }
        })
    })
}

Replay.addEventListener('click', () => {
    resetdom()
    runanimi()
})