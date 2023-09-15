const quizdata = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const quiz = document.getElementById('quiz')
const answerEL = document.querySelectorAll('.answer')
const questionEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentquiz = 0
let score = 0

loadquiz()

function loadquiz() {
    deselectanswers()

    const currentquizdata = quizdata[currentquiz]

    questionEL.innerText = currentquizdata.question
    a_text.innerText = currentquizdata.a
    b_text.innerText = currentquizdata.b
    c_text.innerText = currentquizdata.c
    d_text.innerText = currentquizdata.d
}

function deselectanswers() {
    answerEL.forEach(answerEL => answerEL.checked = false)
}

function getselected() {
    let answer

    answerEL.forEach(answerEL => {
        if (answerEL.checked) {
            answer = answerEL.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getselected()

    if (answer) {
        if (answer === quizdata[currentquiz].correct) {
            score++
        }
        currentquiz++

        if (currentquiz < quizdata.length) {
            loadquiz()
        }else {
            quiz.innerHTML = `
            <h2>You answered at ${score} / ${quizdata.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
