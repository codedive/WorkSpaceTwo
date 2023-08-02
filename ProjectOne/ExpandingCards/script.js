const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeactionclasses()
            panel,classlist.add('active')
        
    })
})

function removeactionclasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}