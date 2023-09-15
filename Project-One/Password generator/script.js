const resultEL = document.getElementById('result')
const uppercaseEL = document.getElementById('uppercase')
const lowercaseEL = document.getElementById('lowercase')
const numbersEL = document.getElementById('numbers')
const symbolsEL = document.getElementById('symbols')
const lengthEL = document.getElementById('length')
const generateEL = document.getElementById('generate')
const clipboardEL = document.getElementById('clipboard')

const randomfunction = {
    lower :randomlower,
    upper :randomupper,
    Number :randomnumber,
    symbol :randomsymbol
}

generateEL.addEventListener('click',(e) => {
    const length = +lengthEL.value
    const islower = lowercaseEL.checked 
    const isupper = uppercaseEL.checked
    const isnumber = numbersEL.checked
    const isSymbol = symbolsEL.checked

    resultEL.innerText = generatePswd(islower, isupper, isnumber, isSymbol, length)

})

clipboardEL.addEventListener('click', (e) => {
    const txtarea = document.createElement('textarea')
    const pswd = resultEL.innerText

    if(!pswd) { return } 

    txtarea.value = pswd
    document.body.appendChild(txtarea)
    txtarea.select()
    document.execCommand('copy')
    txtarea.remove()
    alert('Password copied to clipboard')
})

function generatePswd(lower, upper, Number, symbol, length) {
    let generatedPswd = ''
    const typecount = lower + upper + Number +symbol
    const typearr = [{lower}, {upper}, {Number}, {symbol}].filter(item => Object.values(item)[0])

    if (typecount === 0) {
        return ''
    }

    for (let i = 0; i < length; i+=typecount) {
        typearr.forEach(type => {
            const fncName = Object.keys(type)[0]
            generatedPswd += randomfunction[fncName]()
        })
      
    }

    const finalpsd = generatedPswd.slice(0, length)
    return finalpsd
}

function randomnumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function randomlower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function randomupper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randomsymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

