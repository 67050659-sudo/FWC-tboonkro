const button = document.getElementById('newButton');
const ft_list = document.getElementById('ft_list');

window.addEventListener('load', loadFromCookies);

button.addEventListener('click', function() {
    const text = prompt("Enter a new TO DO:");
    if (text !== null && text.trim() !== "") {
        addTodoItem(text, true);
    }
});

function addTodoItem(text, shouldSave) {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.textContent = text;

    div.addEventListener('click', function() {
        if (confirm("Remove To-Do item?")) {
            div.remove();
            saveToCookies();
        }
    });

    ft_list.insertBefore(div, ft_list.firstChild);

    if (shouldSave) {
        saveToCookies();
    }
}

function saveToCookies() {
    const divs = ft_list.getElementsByTagName('div');
    const tasks = [];
    
    for (let i = 0; i < divs.length; i++) {
        tasks.push(divs[i].textContent);
    }

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(tasks)) + ";path=/";
}

function loadFromCookies() {
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        const pair = cookies[i].trim().split('=');
        if (pair[0] === 'todos') {
            const tasks = JSON.parse(decodeURIComponent(pair[1]));
            for (let j = tasks.length - 1; j >= 0; j--) {
                addTodoItem(tasks[j], false);
            }
        }
    }
}