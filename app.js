document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');
    const glasses = document.querySelectorAll('.glass');

    function createTaskItem(taskText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const removeButton = document.createElement('button');

        checkbox.type = 'checkbox';
        label.textContent = taskText;
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-task';

        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(removeButton);
        todoList.appendChild(li);
    }
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTaskItem(taskText);
            taskInput.value = '';
        }
    });
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
   
    // const glasses = document.querySelectorAll('.glass');

    glasses.forEach(glass => {
        glass.addEventListener('click', () => {
            glass.classList.toggle('filled');
        });
    }); 




})