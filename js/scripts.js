const addInput = document.querySelector("#add-task");
const addButton = document.querySelector(".button-add");
const taskList = document.querySelector(".list-task");


const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
let allTasks = localStorageTasks !== null ? localStorageTasks : [];



// funções

const creatingTaskStructure = elem => {

    const task = document.createElement('div');
    task.classList.add('task');
    
    const p = document.createElement('p');
    p.innerHTML = elem.name;
    task.appendChild(p);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('onclick', `deleteTask(${elem.id})`);
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    task.appendChild(deleteButton);

    taskList.append(task);
};

const creatingTaskLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
};

const generateID = () => Math.round(Math.random() * 1000);

const init = () => {
    allTasks.forEach(creatingTaskStructure);
};


// eventos

addButton.addEventListener('click', function(e){
    e.preventDefault();

    if(addInput.value){

        taskList.innerHTML = '';

        const newTaskObject = {id: generateID(), name: addInput.value}
        allTasks.push(newTaskObject);
        init();

        creatingTaskLocalStorage();

        addInput.value = '';
        addInput.focus();

    } else {

        alert('Insira alguma tarefa.');
    };
});

// inicializador

init();