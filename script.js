document.addEventListener('DOMContentLoaded', function(addTask){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        let taskText = taskInput.value.trim(); //retrieves input value from the input element

        if (taskText.textContent === ''){
            alert('Please enter a task'); // if input is empty, this user will be alerted
        }else{
            let list = document.createElement('li').textContent = taskText; //creates an li element
            let removeBtn = document.createElement('button').classList.add('remove-btn').textContent = 'Remove'; //creates a button, gives it a class name of remove-btn and sets it's text content to Remove
            removeBtn.setAttribute('onclick', taskList.removeChild(list)); // sets an onclick event so that when the button is clicked it the list element is removed
            taskList.appendChild(list); // appends list to taskList
        }
    }

    taskInput.addEventListener('keypress', (event) => { //listens a key to be pressed
        if (enter.key = 'ENTER'){ // if the key is pressed, the fucntion, addTask will be invoked.
            addButton.addEventListener('click', addTask);
        }
    })
})