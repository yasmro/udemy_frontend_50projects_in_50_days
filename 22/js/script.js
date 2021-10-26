// Canvas API
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Controller
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearBtn = document.getElementById('clear')

// let
let size = 20
let isPressed = false // マウスが押されている状態か
let color = 'black'
let x
let y

// マウスを押下している状態（押し続けている）だと，その位置を特定
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

// マウスを離すと，位置をリセット
canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
    console.log(canvas, ctx)
})

canvas.addEventListener('mousemove', (e) => {
    // マウスを押下したまま動かすと，動かした位置を特定し，軌跡を描き続ける
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        // drawCircle + drawLine
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        // ある時点の終点位置(x2, y2)を次の時点での始点位置(x, y)に置き換える
        x = x2
        y = y2

        // drawLine()で　描画する線の太さを2倍(size*2 = drawCircleの直径)にする
        
    }
})

// circleをかいてみる
function drawCircle(x, y){
    // 線を描き始める
    ctx.beginPath();
    // 中心座標X, 中心座標Y, 半径, スタートradian, エンドradian, 反時計回りか t/f
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    // fillStyleを色で指定
    ctx.fillStyle = color
    // fill 色を塗る
    ctx.fill()
}

// lineを書いてみる
function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    // 始点位置へ移動
    ctx.moveTo(x1, y1)
    // 終点座標まで線を引く
    ctx.lineTo(x2, y2)
    // 線の色，太さを指定
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    // 線を描画
    ctx.stroke()
}

function updateSizeOnScreen(){
    sizeEl.innerText = size
}

// Controller Zoneの設定
colorEl.addEventListener('change', (e) => {
    color = e.target.value
})

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50){
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5){
        size = 5
    }

    updateSizeOnScreen()
})

clearBtn.addEventListener('click', () => {
    // 左上から右下まできれいにする
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})