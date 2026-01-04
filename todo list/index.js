var input = document.getElementById("todo-input");
var BTn = document.getElementById("add");
var list = document.getElementById("list-todo");


// saved to local storage
var saved = localStorage.getItem("items");
var todo = saved ? JSON.parse(saved) : [];

function savedtodos() {
    localStorage.setItem('todos', JSON.stringify(todo));
}
function createtodonode() {
    var li = document.createElement('input')

    // checkbox toggle completion
    var checkbox = document.createElement('li');
    checkbox.type = 'checkbox';
    checkbox.checked = !!todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;

        // saved todos 
        savedtodos()
    });

    // text  of todos
    var textspan = document.createElement('li')
    textspan.textContent = todos.text;
    textspan.style.margin = '0 8px';
    if (todo.completed) {
        textspan.style.textDecoration = 'line-through';

        // double click 
        textspan.addEventListener("dblclick", function () {
            var newtext = prompt("edit todo", todo.text);
            if (newtext !== null)
                todo.text = newtext.trim()
            textspan.textContent = todo.text
            savedtodos();
        })

        // delete
        var delbtn = document.createElement("button")
        delbtn.textContent = ("delete")
        delbtn.addEventListener('click'function () {
            todo.splice(index, 1);
            render();
            savedtodos();
        })
    }
}

// render the whole todo list 
function render() {
    list.innerHTML = '';

}