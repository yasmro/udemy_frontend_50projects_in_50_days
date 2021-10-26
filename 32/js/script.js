const toggles = document.querySelectorAll('.toggle')
const goodCheckBox = document.getElementById('good')
const cheapCheckBox = document.getElementById('cheap')
const fastCheckBox = document.getElementById('fast')

toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        doTheTrick(e.target)
    })
})

function doTheTrick(theClickedOne) {
    if(goodCheckBox.checked && cheapCheckBox.checked && fastCheckBox.checked){
        if(goodCheckBox === theClickedOne){
            fastCheckBox.checked = false
        }

        if(cheapCheckBox === theClickedOne){
            goodCheckBox.checked = false
        }

        if(fastCheckBox === theClickedOne){
            cheapCheckBox.checked = false
        }
    }
}