const root = document.getElementById('root')

window.addEventListener('keydown',(e) => {
    root.innerHTML = `
        <div class="key">
            ${e.key === ' ' ? 'space' : e.key}
            <small>Event.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>Event.keycode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>Event.code</small>
        </div>
    `
})