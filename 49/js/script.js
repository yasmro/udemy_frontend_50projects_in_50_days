const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todosUL = document.querySelector('#todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => {
        addTodo(todo)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    addTodo()
})

function addTodo(todo){
    let todoText = input.value

    // LSにあるtodoをdomに起こす際に使う．新規処理は関係ない
    if(todo){
        todoText = todo.text
    }

    if(todoText){
        const todoEl = document.createElement('li')

        // LSにあるtodoをdomに起こす際に使う．todo.completedがtrueであれば completed classを付与．
        // 新規処理は関係ない
        if(todo && todo.isCompleted){
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLocalStorage()
        })

        // 右クリック時処理
        todoEl.addEventListener('contextmenu', (e) => {
            // e.preventDefaultをわすれずに！
            e.preventDefault()

            todoEl.remove()
        })

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLocalStorage()
    }
}

function updateLocalStorage(){
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            isCompleted: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}