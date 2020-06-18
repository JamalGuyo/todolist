$('document').ready(() => {
    const url = 'http://localhost:8080/api/todos';
    $.getJSON(url)
    .then(addTodos);
    // handle form keypress
    $('#todoInput').keypress((event)=>{
        if(event.which === 13){
            createTodo();
        }
    })
});
// add todo to the list of todos
function addTodos(todos){
    for(todo of todos){
        addTodo(todo);
    }
}
// add todo
function addTodo(todo){
    let newTodo = $(`<li class="task">${todo.name} <span>X</span</li>`);
    newTodo.data("id", todo._id);
    newTodo.data('completed', todo.completed);
        if(todo.completed){
            newTodo.addClass("done");
        }
        $('.list').append(newTodo);
}
// create a new todo
function createTodo(){
    let userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput})
    .then(newTodo =>{
        $('#todoInput').val('');
        addTodo(newTodo)
    });
}
// delete todo
$('.list').on('click', 'span', function(e){
    e.stopPropagation();
   removeTodo($(this).parent());
})

function removeTodo(todo){
    let clickedID = todo.data("id"); 
    let deleteUrl = '/api/todos/'+clickedID;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(() => {
        todo.remove();
    })
}
// complete todo
$('.list').on('click', 'li', function(){
    updateTodo($(this));
})

function updateTodo(todo){
    let updateUrl = '/api/todos/'+todo.data('id');
    let isDone = !todo.data('completed');
    let updatedData = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updatedData
    })
    .then(updatedTodo => {
        todo.toggleClass('done');
        todo.data('completed', isDone);
    })
}