const form = document.getElementById('add__element');
const list = document.querySelector('.task__container-list');



var data = new Date();
var day = String(data.getDate()).padStart(2,'0');
var month = String(data.getMonth()+1).padStart(2,'0');
var year = data.getFullYear();

const arrayList = [];


form.addEventListener('submit',(evento) => {
    evento.preventDefault();

    const n = 0;
    const newObject = {
        id: n + 1,
        task: evento.target['main__task'].value,
        taskDate: new Date(),
    }

    arrayList.push(newObject);

    renderArray(newObject);
})

function renderArray (object) {
    const container = document.querySelector('.task__container-list');
    const arrayInTags = arrayList.forEach((element) => {
        html = `<li class="task__list-item">
        <h2 class="task__list-number">Task ${newObject.id}</h2>
        <p class="task__list-description">${newObject.task}</p>
        <div class="task__list-data">
            <h2 class="task__data">Criado no dia:</h2>
            <p class="task__data-number">${newObject.taskDate}</p>
        </div>
        <input type="checkbox" name="check" id="task__check" class="checkbox__input">
    </li>`
    })
    container.appendChild(html);
}