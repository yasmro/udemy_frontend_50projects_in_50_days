const codes = document.querySelectorAll('.code')

// 最初にフォーカスさせる
codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        // 0〜9が入力された時
        if(0 <= e.key && e.key <= 9){
            // ある数字が既に入力されている状態で，別の数字に上書きしたい時，一度既存の数字を削除する必要がある（1マスに2桁入力される）
            codes[idx].value = ''

            // setTimeoutのそとにcodes[idx + 1].focus()を書くと，1桁目が反応せず，2桁目から入力されてしまう
            // 遅延処理を入れる
            setTimeout(() => {
                codes[idx + 1].focus()
            }, 10)
            
        } else if(e.key === 'Backspace'){
            setTimeout(() => {
                codes[idx - 1].focus()
            }, 10)
        }
    })
})