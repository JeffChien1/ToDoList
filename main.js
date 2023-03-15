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

let n = 0;
function savingItem(){
    const newItem = itemInput.value;  

    const doubleChecking = arrayList.some((element) => element.task.toUpperCase() === newItem.toUpperCase());
    if (doubleChecking) {
        alert('Essa tarefa já existe!!');
    } else {
        n = n + 1;
        const newObject = { 
            id: n,
            task: newItem,
            taskDate: dataAtual,
            check: false
        }
        arrayList.push(newObject);
    }
}

function renderArray (object) {
    let html = '';
    const container = document.querySelector('.task__container-list');
    const arrayInTags = arrayList.forEach((element, index) => {
        const card = `<li class="task__list-item data-value="${index}">
        <h2 class="task__list-number">Task ${element.id}</h2>
        <p class="task__list-description">${element.task}</p>
        <div class="task__list-data">
            <h2 class="task__data">Criado no dia:</h2>
            <p class="task__data-number">${element.taskDate}</p>
        </div>
        <input type="checkbox" name="check" id="task__check" class="checkbox__input">
    </li>`
        html += card
    }); 
    list.innerHTML = html;

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

    inputsCheck.forEach(i => {
        i.addEventListener('change', (event) => {
            const taskId = Number(event.target.value);
            arrayList.map((task) => {
                if(task.id === taskId) {
                    task.check = event.target.checked
                }
                return task;
            })
            console.log(arrayList);
        })
    })
}