document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');


    function createTaskItem(taskText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const removeButton = document.createElement('button');

        checkbox.type = 'checkbox';
        label.textContent = taskText;
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-task';

    }





})