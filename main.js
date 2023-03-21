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
    filterElementDone();
    itemInput.focus();
})


let n = 0;
function savingItem(){
    const newItem = itemInput.value;  
    const doubleChecking = arrayList.some((element) => element.task.toUpperCase() === newItem.toUpperCase());
    if (doubleChecking) {
        alert('Essa tarefa já existe!!');
    } else {
        n = n + 1;
        arrayList.push({
            id: n,
            task: newItem,
            taskDate: dataAtual,
            check: false
        })
    }
    itemInput.value='';
}

function renderArray (object) {
    list.innerHTML = '';
    arrayList.forEach((element, index) => {
        list.innerHTML += `
    <li class="task__list-item" data-value="${index}">
        <h2 class="task__list-number">Task ${element.id}</h2>
        <p class="task__list-description">${element.task}</p>
        <div class="task__list-data">
            <h2 class="task__data">Criado no dia:</h2>
            <p class="task__data-number">${element.taskDate}</p>
        </div>
        <input type="checkbox" name="check" id="task__check" class="checkbox__input">
    </li>`
    }); 
}


function filterElementDone(){
    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');
    inputsCheck.forEach(i => {
        i.addEventListener('click', (event) => {
            const elementValue = event.target.parentElement.getAttribute('data-value');
            arrayList[elementValue].check = event.target.checked;
        })
    })

    const buttonFilterTaskDone = document.querySelector('.task__done');
    buttonFilterTaskDone.addEventListener('click', () => {
            let filteredTask = arrayList.filter(list => list.check === true);
            console.log(filteredTask)
        })
    }
