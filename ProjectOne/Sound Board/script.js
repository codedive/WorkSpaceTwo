const sounds = ['hip-hop', 'kam-riser', 'staccato', 'islandy', 'fight', 'trap', 'loop']

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    document.getElementById('buttons').
    appendChild('btn')
})
