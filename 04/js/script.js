const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.add('active')
    input.focus() // inputにfocusをあてる．
})

// [追加] inputのフォーカスから外れた時(=blur)，inputの中身が空なら，activeクラスをはずす．
input.addEventListener('blur', () => {
    if(input.value === ""){
        search.classList.remove('active')
    }
})