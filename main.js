const form = document.getElementById('add__element');
const element = document.getElementById('list__element');
const today = new Date();


form.addEventListener('submit',(evento) => {
    evento.preventDefault();

    console.log(evento);

    creatingElement(evento.target['main__task'].value);
})

function creatingElement (main__task) {
    const newItem = document.createElement('li');
    const taskNumber = document.createElement('h2');
    const newTask = document.createElement('p');
    const newDate = document.createElement('p');
    
    newItem.classList.add('task__list-item');
    taskNumber.classList.add('task__list-number');
    newTask.classList.add('task__list-description');
    newDate.classList.add('task__data-number');

    taskNumber.innerHTML = "Task 1";
    newTask.innerHTML = main__task;
    newDate.innerHTML = today;

    newItem.appendChild(newTask);
    newItem.appendChild(taskNumber);
    newItem.appendChild(newDate);

    console.log(newItem);
}