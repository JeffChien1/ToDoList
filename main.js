const form = document.getElementById('add__element');
const list = document.querySelector('.task__container-list');
const itemInput = document.getElementById('main__task');


var data = new Date();
var day = String(data.getDate()).padStart(2,'0');
var month = String(data.getMonth()+1).padStart(2,'0');
var year = data.getFullYear();
dataAtual = day + '/' + month + '/' + year;

const arrayList = [];


form.addEventListener('submit',(evento) => {
    evento.preventDefault();
    savingItem();
    renderArray();
})

function savingItem(){
    const newItem = itemInput.value;  
    let n = 0;
    n = n + 1;
    const newObject = { 
        id: n,
        task: newItem,
        taskDate: dataAtual,
    }

    const doubleChecking = arrayList.some((element) => element.task.toUpperCase() === newItem.toUpperCase());
    if (doubleChecking) {
        alert('Essa tarefa já existe!!');
    } else {
        arrayList.push(newObject);
    }
}

function renderArray (object) {
    itemInput.innerHTML = '';
    const container = document.querySelector('.task__container-list');
    const arrayInTags = arrayList.forEach((element) => {
        list.innerHTML += `<li class="task__list-item">
        <h2 class="task__list-number">Task ${element.id}</h2>
        <p class="task__list-description">${element.task}</p>
        <div class="task__list-data">
            <h2 class="task__data">Criado no dia:</h2>
            <p class="task__data-number">${element.taskDate}</p>
        </div>
        <input type="checkbox" name="check" id="task__check" class="checkbox__input">
    </li>`
    })
}