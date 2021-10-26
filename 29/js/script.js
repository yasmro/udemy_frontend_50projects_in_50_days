const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let numberOfClicks = 0;
// loveMe.addEventListener('dblclick', (e) => {
//     console.log(e)
// })

// 今回はclickイベントを利用し，その間隔を記録．
let clickTime = 0;
const THRESHOLD = 800;

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0){
        // 1回目であれば，そのunixtimeをとっていく．
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime()) - clickTime < THRESHOLD){
            // 1回目の時との差分が800ms以内であればダブルクリックと見做す
            createHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})

function createHeart(e){
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    // ダブルクリックした箇所を求める（原点は画像の左上）
    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    numberOfClicks++;
    times.innerText = numberOfClicks

    setTimeout(() => heart.remove(), 5000)
}