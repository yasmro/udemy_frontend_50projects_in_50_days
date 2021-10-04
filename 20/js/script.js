const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click',  (e) => {
        // https://qiita.com/yukiB/items/cc533fbbf3bb8372a924
        // [1] クリックした箇所の位置を取得 (ブラウザの左上が原点)
        const x = e.clientX
        const y = e.clientY

        // [2] ボタンの大きさを取得
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = `${yInside}px`
        circle.style.left = `${xInside}px`


        button.appendChild(circle)
        // thisを入れる場合は function (e)にする
        // this.appendChild(circle)
        
        // 0.5秒後付与されたspan.circle要素を削除する
        setTimeout(() => circle.remove(), 500)
    })
})