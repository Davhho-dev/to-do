import { addToTaskList } from "./UI";

let taskArr = [];

function taskModal() {
    const taskModal = document.querySelector(".task-modal");
    taskModal.showModal();
    const closeBtn = document.querySelector(".task-close");
    closeBtn.addEventListener("click", (e) => {
        taskModal.close();
    });
    return taskModal;
}

function taskForm() {
    const form = document.querySelector(".task-form");
    const taskModal = document.querySelector(".task-modal");
    const title = document.querySelector(".main-hd");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const description = document.getElementById("task-description");
        if(!checkTaskArray(title.textContent)) {
            const newTask = userTask(title.textContent, [description.value]);
            taskArr.push(newTask);
        }else {
            const projectIndex = taskArr.findIndex(task => task.project === title.textContent);
            taskArr[projectIndex].description.push(description.value); 
        }
        addToTaskList(taskArr);
        taskModal.close();
        form.reset();
        // console.log(taskArr);
        // console.log(taskArr[0].description);
    })
}

function checkTaskArray(title) {
    if(taskArr.length === 0) return false;
    for(let x = 0; x < taskArr.length; x++) {
        if(taskArr[x].project === title) return true;
    }
}

const userTask = (project, description) => {
    return {project, description};
} 

export {taskModal, taskForm};