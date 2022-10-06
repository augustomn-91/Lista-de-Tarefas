const addInput = document.querySelector("#add-task");
const addButton = document.querySelector(".button-add");
const taskList = document.querySelector(".list-task");



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

// eventos


// inicializador