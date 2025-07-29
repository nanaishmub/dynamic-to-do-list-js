document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    function loadTasks(){
        const taskArray = JSON.parse(localStorage.getItem('tasks') || []);
        taskArray.forEach(taskText => addTask(taskText, false));
    }

    function addTask(taskText, save = true){
        let taskText = taskInput.value.trim(); //retrieves input value from the input element

        if (taskText.textContent === ''){
            alert('Please enter a task'); // if input is empty, this user will be alerted
        }else{
            let list = document.createElement('li').textContent = taskText; //creates an li element
            let removeBtn = document.createElement('button').classList.add('remove-btn').textContent = 'Remove'; //creates a button, gives it a class name of remove-btn and sets it's text content to Remove
            removeBtn.setAttribute('onclick', taskList.removeChild(list), taskArray.pop(taskText)); // sets an onclick event so that when the button is clicked it the list element is removed
            taskList.appendChild(list); // appends list to taskList
        }

        if (save){
            const taskArray = JSON.parse(localStorage.getItem('tasks') || []);
            taskArray.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(taskArray));
        }
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => { //listens a key to be pressed
        if (event.key = 'Enter'){ // if the key is pressed, the fucntion, addTask will be invoked.
            addTask();
        }
    })

    

})