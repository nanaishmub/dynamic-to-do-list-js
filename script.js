document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        let taskText = taskInput.value.trim();

        if (taskText.textContent === ''){
            alert('Please enter a task');
        }else{
            document.createElement('li').textContent = taskText;
            document.createElement('button').classList.add('remove-btn').textContent = 'Remove';
        }
    }
})