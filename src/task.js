// import { addToTaskList, displayTask } from "./UI";

// let taskArr = [];

// function taskModal() {
//     const taskModal = document.querySelector(".task-modal");
//     taskModal.showModal();
//     const closeBtn = document.querySelector(".task-close");
//     closeBtn.addEventListener("click", (e) => {
//         taskModal.close();
//     });
//     return taskModal;
// }

// function taskForm() {
//     const form = document.querySelector(".task-form");
//     const taskModal = document.querySelector(".task-modal");
//     const title = document.querySelector(".main-hd");
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const description = document.getElementById("task-description");
//         if(!checkTaskArray(title.textContent)) {
//             const newTask = userTask(title.textContent, [description.value]);
//             taskArr.push(newTask);
//             const projectIndex = taskArr.findIndex(task => task.project === title.textContent);
//             displayTask(taskArr[projectIndex].description);
//         }else {
//             const projectIndex = taskArr.findIndex(task => task.project === title.textContent);
//             taskArr[projectIndex].description.push(description.value); 
//             displayTask(taskArr[projectIndex].description);
//         }
//         // addToTaskList(taskArr);
//         taskModal.close();
//         form.reset();
//         // console.log(taskArr);
//         // console.log(taskArr[0].description);
//         return taskArr;
//     })
// }

// function editTaskModal() {
//     const taskModal = document.querySelector(".edit-task-modal");
//     taskModal.showModal();
//     const closeBtn = document.querySelector(".edit-task-close");
//     closeBtn.addEventListener("click", (e) => {
//         taskModal.close();
//     });
//     return taskModal;
// }

// function editTaskForm(taskIndex, taskDesc) {
//     const form = document.querySelector(".edit-task-form");
//     const taskModal = document.querySelector(".edit-task-modal");
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const description = document.getElementById("edit-task-description");
//         taskArr[taskIndex].description[taskDesc] = description.value;
//         displayTask(taskArr[taskIndex].description);
//         taskModal.close();
//         form.reset();
//         return taskArr;
//     }, {once: true});
// }

// function deleteTask(taskIndex, descIndex) {
//     return taskArr[taskIndex].description.splice(descIndex, 1);
// }

// function updateTask(index, newTitle) {
//     taskArr[index].project = newTitle;
//     displayTask(taskArr[index].description);
//     console.log(taskArr[index]);
//     return taskArr;
// }

// function checkTaskArray(title) {
//     if(taskArr.length === 0) return false;
//     for(let x = 0; x < taskArr.length; x++) {
//         if(taskArr[x].project === title) return true;
//     }
// }

// function strikeThrough(checkbox, el) {
//     if(!checkbox.classList.contains("active")) {
//         checkbox.style.backgroundColor = "#FFB647";
//         el.style.textDecoration = "line-through";
//         checkbox.classList.add("active");
//     }else {
//         checkbox.style.background = "none";
//         el.style.textDecoration = "none";
//         checkbox.classList.remove("active");
//     }
// }

// const userTask = (project, description) => {
//     return {project, description};
// } 

// export {taskModal, taskForm, taskArr, updateTask, editTaskModal, editTaskForm, deleteTask, strikeThrough};

import { displayTask } from "./UI";

let taskArr = [];

const userTask = (title, desc) => {
    return {title, desc};
}

function taskForm() {
    const taskModal = document.querySelector(".task-modal");
    const form = document.querySelector(".task-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.querySelector(".main-hd");
        const description = document.getElementById("task-description");
        if(!taskTitleMatch(title.textContent)) {
            const newTask = userTask(title.textContent, [description.value]);
            taskArr.push(newTask);
        }else {
            const index = findIndex(taskArr);
            taskArr[index].desc.push(description.value);
        }
        const index = findIndex(taskArr);
        displayTask(taskArr[index].desc);
        taskModal.close();
        HTMLFormElement.prototype.reset.call(form)
    }, {once: true});
}

function deleteTask(projectTitle) {
    const index = findIndex(taskArr, projectTitle);
    taskArr.splice(index, 1);
    displayTask(taskArr[index]);
    if(taskArr.length !== 0) displayTask(taskArr[0].desc);
}

function selectedTask() {
    const index = findIndex(taskArr);
    if(index != -1) displayTask(taskArr[index].desc);
}

function findIndex(arr, projectTitle) {
    const title = document.querySelector(".main-hd");
    if(typeof projectTitle === "undefined") return arr.findIndex(task => task.title === title.textContent);
    else return arr.findIndex(task => task.title === projectTitle);
}

function taskTitleMatch(title) {
    if(taskArr.length === 0) return false;
    for(let i = 0; i < taskArr.length; i++) {
        if(taskArr[i].title === title) return true;
    }
    return false;
}

export {taskForm, selectedTask, deleteTask};