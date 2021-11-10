let todo = document.getElementById('todo');
let btn = document.getElementById('btn');
let todos = document.getElementById('todos');

btn.addEventListener('click', onClick = () => {
    let p = document.createElement('p');
    p.innerHTML = todo.value;
    todos.appendChild(p);
    p.className = 'todos__todos';
    p.addEventListener('click', onClick = () => p.style = 'text-decoration: line-through;'  );
    todo.value = "";
    p.addEventListener('dblclick', onClick = () => todos.removeChild(p));
});
