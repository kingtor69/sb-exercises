$('#add-todo-form').submit(function(e) {
    e.preventDefault()
    addTodo(e.target[0].value)
})
// $('.add-todo').click(addTodo)
$('.complete-todo').click(completeTodo)
$('.delete-todo').click(deleteTodo)

async function addTodo(input) {
    console.log(input)
    const newTodo = await axios.post(`/api/todos/`, {title: input})
    console.log(newTodo)
}

async function completeTodo() {
    const id = $(this).data('id')
    await axios.patch(`/api/todos/${id}`, {done: true})
    $(`#todo-${id}`).addClass('done')
}

async function deleteTodo() {
    const id = $(this).data('id')
    await axios.delete(`/api/todos/${id}`)
    $(this).parent().parent().remove()
}

