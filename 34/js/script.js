const nums = document.querySelectorAll('.nums span')

const counter = document.querySelector('.counter')

const finalEl = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})

function resetDOM() {
    counter.classList.remove('hide')
    finalEl.classList.remove('show')
    
    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}

function runAnimation(){
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        // addEventListner 'animationend'
        num.addEventListener('animationend', (e) => {
            
            if(e.animationName === 'goIn' && idx !== nextToLast){
                // 最後の要素でなければ，eの要素の.goInを消して.goOutを付与する
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling){
                // num.nextElementSibling -> num の隣にある要素
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalEl.classList.add('show')
            }
        })
    })
}