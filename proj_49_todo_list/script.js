const form = document.getElementById('form')
const input = document.getElementById('input')
const todos = document.getElementById('todos')

// get stored todos
const todosSaved = JSON.parse(localStorage.getItem('todos'))

if(todosSaved) {
    todosSaved.forEach(todo => addTodo(todo))
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    if (todo) {
        todoText = todo.text
    }


    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        // take user input and add to list
        todoEl.innerText = todoText

        // mark todo as done
        todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed')
        updateLS()
    })

        // delete todo right click use contextmenu
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        todos.appendChild(todoEl)

        // clear form
        input.value = ''

        updateLS()
    }
}

/**
//local storage needs to be as string so stringify key:value
localStorage.setItem('name', JSON.stringify(obj))
// to get from local storage remember to parse
JSON.parse(localStorage.getItem(obj))
*/
