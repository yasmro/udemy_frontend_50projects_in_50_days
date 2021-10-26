const boxesContainer = document.getElementById('boxes')

const magicBtn = document.getElementById('btn')

const NUMBER_OF_BOXES = {x: 4, y: 4}
const IMAGE_SIZE = {x: 500, y: 500}

function createBoxes(){
    for(let i = 0; i < NUMBER_OF_BOXES.y; i++){
        for(let j = 0; j < NUMBER_OF_BOXES.x; j++){
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${j*(IMAGE_SIZE.x / NUMBER_OF_BOXES.x)*(-1)}px ${i*(IMAGE_SIZE.y / NUMBER_OF_BOXES.y)*(-1)}px`
            boxesContainer.appendChild(box)
        }
    }
}

magicBtn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

createBoxes()

