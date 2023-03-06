const form = document.getElementById('add__element');
const list = document.querySelector('.task__container-list');


var data = new Date();
var day = String(data.getDate()).padStart(2,'0');
var month = String(data.getMonth()+1).padStart(2,'0');
var year = data.getFullYear();



form.addEventListener('submit',(evento) => {
    evento.preventDefault();

    creatingElement(evento.target['main__task'].value);
})

function creatingElement (main__task) {
    const newItem = document.createElement('li');
    const taskNumber = document.createElement('h2');
    const newTask = document.createElement('p');
    const newDate = document.createElement('div');
    const dateText = document.createElement('h2');
    const dateNumber = document.createElement('p');
    
    newItem.classList.add('task__list-item');
    taskNumber.classList.add('task__list-number');
    newTask.classList.add('task__list-description');
    newDate.classList.add('task__list-data');
    dateText.classList.add('task__data');
    dateNumber.classList.add('task__data-number');

    taskNumber.innerHTML = "Task 1";
    newTask.innerHTML = main__task;
    dateText.innerHTML = "Criado no dia:";
    dateNumber.innerHTML = day + '/' + month + '/' + year;

    newItem.appendChild(taskNumber);
    newItem.appendChild(newTask);
    newItem.appendChild(newDate);
    newDate.appendChild(dateText);
    newDate.appendChild(dateNumber);

    list.appendChild(newItem);

    console.log(newItem);
}