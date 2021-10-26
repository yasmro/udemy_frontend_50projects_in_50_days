const resultEl = document.getElementById('result')
const clipboardBtn = document.getElementById('clipboard')
const lengthEl = document.getElementById('length')
const hasUpperEl = document.getElementById('uppercases')
const hasLowerEl = document.getElementById('lowercases')
const hasNumberEl = document.getElementById('numbers')
const hasSymbolEl = document.getElementById('symbols')

const generateBtn = document.getElementById('generate')

generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthEl.value)
    const [hasUpper, hasLower, hasNumber, hasSymbol] = [hasUpperEl.checked, hasLowerEl.checked, hasNumberEl.checked, hasSymbolEl.checked]
    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})

clipboardBtn.addEventListener('click', () => {
    // https://dev.macha795.com/js-program-clipboard-display-none/
    // textareaにコピーする文字を入れておいた要素をあらかじめ作成し，その中身を.select(), document.execCommand('copy')でコピーできるようにする

    const textarea = document.createElement('textarea')
    const password = resultEl.innerText
    if(!password){ return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password Copied!')
})

function generatePassword(upper, lower, number, symbol, length){
    let generatedPassword = ''
    const numberOfTypes = upper + lower + number + symbol
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])
    console.log(typesArr)

    if(numberOfTypes === 0){
        return ''
    }

    // 一定のパターンの場合
    // for(i = 0; i < length ; i += numberOfTypes){
    //     typesArr.forEach( type => {
    //         // 書かれている名前の関数を実行
    //         generatedPassword += randomFunc[Object.keys(type)[0]]()
    //     })

    // }

    // オールミックスにしたい時
    for(i = 0; i < length ; i++){
        const temp = typesArr.map( type => randomFunc[Object.keys(type)[0]]())
        generatedPassword += temp[Math.floor(Math.random() * temp.length)]

    }


    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

// オブジェクトの中に関数を組み込む
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

function getRandomLower(){
    // String.fromCharCode
    // 英小文字＝ 97〜122
    // 英語大文字 = 65〜92
    // 数字 = 48~57
    // 記号＝ '!@#$%^&*(){}[]=<>/,.'
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}