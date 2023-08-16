const addbtn = document.getElementById('app')

addbtn.addEventListener('click', () => addNote('hello'))

function addNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hide"} "></div>
        <textarea class="${text ? "hide" : ""}></textarea>
    
    `

    const edtbtn = note.querySelector('.edit')
    const delbtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const testarea = note.querySelector('textarea')

    testarea.value = text
    main.innerHTML = marked(text)

    delbtn.addEventListener('click', () => {
      note.remove()
    })

    edtbtn.addEventListener('click', () => {
        main.classList.toggle('hide')
        testarea.classList.toggle('hide')
    })

    /*testarea.addEventListener('input', (e) => {
        const { value } = e.target
        main.innerHTML = marked(value)
    })*/
    document.body.appendChild(note)
}