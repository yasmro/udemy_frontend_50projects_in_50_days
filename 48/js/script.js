const container = document.querySelector('.container')

const unsplashUrl = 'https://source.unsplash.com/random/'
const rows = 10
const cols = 3

for(let i = 0; i < rows * cols; i++){
    const img = document.createElement('img')
    img.src = `${unsplashUrl}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize(){
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber(){
    // 300 - 309
    return Math.floor(Math.random() * 10) + 300
}