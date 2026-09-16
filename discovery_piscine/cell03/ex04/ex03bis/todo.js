const $button = $('#newButton');
const $ft_list = $('#ft_list');

$(window).on('load', loadFromCookies);

$button.on('click', function() {
    const text = prompt("Enter a new TO DO:");
    if (text !== null && text.trim() !== "") {
        addTodoItem(text, true);
    }
});

function addTodoItem(text, shouldSave) {
    const $div = $('<div></div>')
        .addClass('todo-item')
        .text(text);

    $div.on('click', function() {
        if (confirm("Remove To-Do item?")) {
            $div.remove();
            saveToCookies();
        }
    });

    $ft_list.prepend($div);

    if (shouldSave) {
        saveToCookies();
    }
}

function saveToCookies() {
    const tasks = [];
    
    $ft_list.find('.todo-item').each(function() {
        tasks.push($(this).text());
    });

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