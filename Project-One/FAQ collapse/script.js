
const asks = document.querySelectorAll('.faq-ask')

asks.forEach(ask => {
    ask.addEventListener('click', () => {
        ask.parentNode.classList.toggle('active')
    })
})
    
