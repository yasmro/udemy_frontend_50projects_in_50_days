const boxes = document.querySelectorAll('.box')

// スクロール時に起動する関数
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    // https://qiita.com/makoto1219/items/9d5b71a792025703cdea
    // window.innerHeightは現在のブラウザの高さを取得する
    // 4/5をかけるのは調節用．
    const triggerBottom = window.innerHeight / 5 * 4 

    boxes.forEach(box => {
        // getBoundingClientRectはターゲット要素をの位置をブラウザの表示領域の左上を(0, 0)として、そこからの相対位置で示される。
        // 高さ・幅なども返す（今回はtopで位置を指定）
        const boxTop = box.getBoundingClientRect().top

        // boxの位置がtriggerBottomよりも小さい（上の位置にあれば）--> showクラスを付与
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
