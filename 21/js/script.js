const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// fillしているboxをドラッグし始める/おわる時に起動
// https://gray-code.com/javascript/execute-processing-when-drag-and-drop/
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
})

function dragStart(){
    // hold classを追加 (+=でもいける)
    this.className += ' hold'
    // hold classを追加してから，classNameをinvisibleにする
    setTimeout(() => this.className = 'invisible', 0)
    
}

function dragEnd(){
    this.className = 'fill'
}

function dragOver(e){
    e.preventDefault();
    
}

function dragEnter(e){
    // DragEnter will reject the immediate user selection as the potential target element.
    e.preventDefault();
    // ドラッグ中にempty領域に入ったら hoveredクラスを追加（＝empty boxの罫線が点線になる）
    this.className += ' hovered'
}

function dragLeave(){
    this.className = 'empty'
}

function dragDrop(){
    // ドロップ先のdivの中にfillをいれる．
    this.className = 'empty'
    this.append(fill)
}