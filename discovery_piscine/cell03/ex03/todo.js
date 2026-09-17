const button = document.getElementById('newButton');
const ft_list = document.getElementById('ft_list');

window.addEventListener('load', loadFromCookies);

button.addEventListener('click', () => {
    const text = prompt("Enter a new TO DO:");
    if (text.trim()) {
        addTodoItem(text.trim(), true);
    }
});

function addTodoItem(text, shouldSave) {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.textContent = text;

    div.addEventListener('click', () => {
        if (confirm("Remove To-Do item?")) {
            div.remove();
            saveToCookies();
        }
    });

    ft_list.prepend(div);

    if (shouldSave) {
        saveToCookies();
    }
}

function saveToCookies() {
    const tasks = Array.from(ft_list.children).map(div => div.textContent);
    document.cookie = `todos=${encodeURIComponent(JSON.stringify(tasks))};path=/`;
}

function loadFromCookies() {
    const cookieString = document.cookie.split(';').find(c => c.trim().startsWith('todos='));
    if (!cookieString) return;

    const value = cookieString.trim().split('=')[1];
    const tasks = JSON.parse(decodeURIComponent(value));
    
    tasks.reverse().forEach(text => addTodoItem(text, false));
}