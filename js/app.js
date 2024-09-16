
// TASK 1

const btn1 = document.querySelector('#btn1');
let userLink;
btn1.addEventListener('click', () => {
    userLink=prompt('Enter your link, please.');
    if(userLink && (userLink.startsWith('http://') || userLink.startsWith('https://'))) {
        console.log(userLink);
    } else {
        alert('Please enter a link!');
        userLink = undefined;
    }
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',()=>{
    if (userLink) {
        window.location.href = userLink;
    } else {
        alert('Please enter a link!');
    }
});

// TASK 2

const btns = document.querySelector('#btns');
btns.addEventListener('click', (event) =>{
    if (event.target.tagName === 'BUTTON') {
        alert(`You clicked on ${event.target.textContent}`);
    }
});

// TASK 3
const taskList = document.querySelector('#task-list');
const addTaskBtn = document.querySelector('#add-task-btn');
const newTaskInput = document.querySelector('#new-task-input');

function createTaskElement(taskText) {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.classList.add('btn', 'delete-btn');
    deleteBtn.style.marginLeft = '10px';
    newTask.appendChild(deleteBtn);
    return newTask;
}

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT' && event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
});

addTaskBtn.addEventListener('click' , () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const newTask = createTaskElement(taskText);
        taskList.appendChild(newTask);
        newTaskInput.value = '';
    }
});










