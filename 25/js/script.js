const nav = document.querySelector('.nav')

// スクロール時に呼び出される
window.addEventListener('scroll', fixNav)

function fixNav(){
    // window.scrollY = 現在のスクロール位置（y軸)
    // nav.offSetHeight = nav要素の高さ

    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}