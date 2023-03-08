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

    console.log(arrayList);

    creatingElement(evento.target['main__task'].value);
})

function creatingElement (main__task) {
    
}