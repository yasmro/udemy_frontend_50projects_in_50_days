const contents = document.querySelectorAll('.content')
const menus = document.querySelectorAll('.phone nav ul li')

menus.forEach((menu, idx) => {
    menu.addEventListener('click', () => {
        hideAllContents()
        hideAllMenus()

        menu.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents(){
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllMenus(){
    menus.forEach(menu => menu.classList.remove('active'))
}