const form = document.getElementById('add__element');
const list = document.querySelector('.task__container-list');
const itemInput = document.getElementById('main__task');

var data = new Date();
var day = String(data.getDate()).padStart(2,'0');
var month = String(data.getMonth()+1).padStart(2,'0');
var year = data.getFullYear();

const arrayList = [];


form.addEventListener('submit',(evento) => {
    evento.preventDefault();
    savingItem ();
})

function savingItem (){
    const newItem = itemInput.value;
    const n = 0;
    const newObject = { 
        id: n + 1,
        task: newItem,
        taskDate: new Date(),
    }
    const doubleChecking = arrayList.some((element) => element.task.toUpperCase() === newItem.toUpperCase());

    if (doubleChecking) {
        alert('Essa tarefa já existe!!');
    } else {
        arrayList.push(newObject);
    }
}

console.log(arrayList);


function renderArray (object) {
    const container = document.querySelector('.task__container-list');
    const arrayInTags = arrayList.forEach((element) => {
        html = `<li class="task__list-item">
        <h2 class="task__list-number">Task ${element.id}</h2>
        <p class="task__list-description">${element.task}</p>
        <div class="task__list-data">
            <h2 class="task__data">Criado no dia:</h2>
            <p class="task__data-number">${element.taskDate}</p>
        </div>
        <input type="checkbox" name="check" id="task__check" class="checkbox__input">
    </li>`
    })

    container.appendChild(html);
}