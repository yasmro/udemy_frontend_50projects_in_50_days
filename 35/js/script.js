const imgs = document.getElementById('imgs')

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run, 2000)
const WIDTH = 300

function run() {
    idx = (idx + 1 + img.length) % img.length
    changeImage()
}

function changeImage(){
    imgs.style.transform = `translateX(${-idx * WIDTH}px)`
}

function resetInterval(){
    // ボタン押下時は，intervalをリセットして，もう一回作り直す．
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

leftBtn.addEventListener('click', () => {
    idx = (idx - 1 + img.length) % img.length
    changeImage()
    resetInterval()
})

rightBtn.addEventListener('click', () => {
    idx = (idx + 1 + img.length) % img.length
    changeImage()
    resetInterval()
})