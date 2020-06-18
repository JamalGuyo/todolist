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