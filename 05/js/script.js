const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let loading = 0;

// 30msごとにblurring関数を呼び出す
let interval = setInterval(blurring, 30)

// スケールの再定義
// 0 (in_min) --> 100 (in_max) の定義域に対して 0(out_min) --> 1(out_max)の値域とするなど．
// numは再定義後のスケール値を返す．
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function blurring() {
    loading++;
    if(loading > 99){
        // loading > 99のときsetInterval関数をとりけす．
        clearInterval(interval)
    }
    loadingText.innerText = `${loading}%`
    // loading{0 --> 100 } => opacity{1 --> 0}に変換
    loadingText.style.opacity = scale(loading, 0, 100, 1, 0)

    // loading{0 --> 100 } => blur px{30 --> 0}に変換
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
}

