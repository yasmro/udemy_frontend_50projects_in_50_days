const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

const maxLiters = 2
const litersPerCup = 0.25

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

updateBigCup()

function highlightCups(chosenIdx){
    // smallCups[chosenIdx].nextElementSibling => smallCups[chosenIdx]の次の要素（smallCups[chosenIdx+1]）を取得
    if(smallCups[chosenIdx].classList.contains('full') && !smallCups[chosenIdx].nextElementSibling.classList.contains('full')){
        chosenIdx--;
    }

    // 4番目までのcupをクリックしたときに，０〜3番目のcupをfullにする．
    smallCups.forEach((cup, idx) => {
        if(idx <= chosenIdx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full')
    const numberOfFullCups = fullCups.length
    const numberOfCups = smallCups.length

    // percentage
    percentage.style.visibility = (numberOfFullCups === 0) ? 'hidden' : 'visible'
    percentage.style.height = `${numberOfFullCups / numberOfCups * 100}%`
    percentage.innerText = `${numberOfFullCups / numberOfCups * 100}%`
    
    // remained / liters
    remained.style.visibility = (numberOfFullCups === numberOfCups) ? 'hidden' : 'visible'
    remained.style.height = (numberOfFullCups === numberOfCups) ? 0 : 'auto'
    liters.innerText = `${maxLiters - (litersPerCup * numberOfFullCups)}L`
}
