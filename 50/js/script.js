// .screen要素をすべて取得
const screens = document.querySelectorAll('.screen')

const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn')
const startBtn = document.querySelector('#start-btn')
const gameContainer = document.querySelector('#game-container')

const timeEl = document.querySelector('#time')
const scoreEl = document.querySelector('#score')
const messageEl = document.querySelector('#message')

let seconds = 0
let score = 0
let selectedInsect = {}

startBtn.addEventListener('click', () => {
    // 最初（タイトル画面の）スクリーンに.upを付与し（100vh上にあげる→次の画面へ移動）
    screens[0].classList.add('up')
})

chooseInsectBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')

        selectedInsect = { src, alt }
        screens[1].classList.add('up')

        setTimeout(createInsect, 1000)
        startGame()
    })
})

function createInsect(){
    const insectEl = document.createElement('div')
    insectEl.classList.add('insect')
    
    const { x, y } = getRandomLocation()

    insectEl.style.top = `${y}px`
    insectEl.style.left = `${x}px`

    insectEl.innerHTML = `
        <img src="${selectedInsect.src}" 
            alt="${selectedInsect.alt}" 
            style="transform: rotate(${Math.random() * 360}deg)"    
        />
    `

    insectEl.addEventListener('click', catchInsect)

    gameContainer.appendChild(insectEl)
}

function getRandomLocation(){
    const width = window.innerWidth
    const height = window.innerHeight

    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return { x, y }
}

let startTime 

function startGame(){
    startTime = setInterval(increaseTime, 1000)
}

function increaseTime(){
    let m = Math.floor(seconds / 60)
    let s = seconds % 60

    const appendZero = (num) => {
        return num < 10 ? `0${num}` : `${num}`
    }
    
    timeEl.innerHTML = `Time: ${appendZero(m)}:${appendZero(s)}`
    seconds++
}

function catchInsect(){
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects(){
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore(){
    score++
    scoreEl.innerHTML = `Score: ${score}`

    if(score >= 20){
        messageEl.classList.add('visible')
        clearInterval(startTime)
        
        const insects = doucment.querySelectorAll('.insect')

        insects.forEach(insect => {
            insect.removeEventListner('click', catchInsect, true)
        })
    }

}