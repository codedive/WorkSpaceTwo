const smallcup = document.querySelectorAll('.cup-small')
const liters = document.getElementById('Liters')
const percentages = document.getElementById('percentage')
const remain = document.getElementById('remained')

updatebigcup()

smallcup.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightcups(idx))
})

function highlightcups(idx) {
     if (smallcup[idx].classList.contains('full') && !smallcup
     [idx].nextElementSibling.classList.contains('full')) {
        idx--
     }
    smallcup.forEach((cup,idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updatebigcup()
}

function updatebigcup() {
    const fullcup = document.querySelectorAll('.cup-small.full').length
    const totalcup = smallcup.length

    if (smallcup === 0) {
        percentages.style.visibility = 'hidden'
        percentages.style.height = 0
    }
    else {
        percentages.style.visibility = 'visible'
        percentages.style.height = `${fullcup / totalcup * 330}px`
        percentages.innerText = `${fullcup / totalcup * 100}%`
    }

    if (fullcup === totalcup) {
        remain.style.visibility = 'hidden'
        remain.style.height = 0
    }
    else {
        remain.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullcup / 1000)}L`
    }
}