import { displayTask } from "./UI";
import { oldProjectValue } from "./project";

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

function editTaskForm(projectTitle, taskTitle) {
    const editTaskModal = document.querySelector(".edit-task-modal");
    const form = document.querySelector(".edit-task-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.querySelector(".main-hd");
        const description = document.getElementById("edit-task-description");
        const index = findIndex(taskArr, projectTitle);
        const taskIndex = findTaskIndex(taskArr[index].desc, taskTitle);
        console.log(taskIndex);
        taskArr[index].desc[taskIndex] = description.value;
        displayTask(taskArr[index].desc);
        editTaskModal.close();
        HTMLFormElement.prototype.reset.call(form)
    }, {once: true});
}

function updateTask(index, newTitle) {
    taskArr[index].title = newTitle;
    displayTask(taskArr[index].desc);
}

function deleteTask(projectTitle, taskTitle) {
    const index = findIndex(taskArr, projectTitle);
    const taskIndex = findTaskIndex(taskArr[index].desc, taskTitle);
    taskArr[index].desc.splice(taskIndex, 1);
    displayTask(taskArr[index].desc);
}

function deleteEntireTask(projectTitle) {
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

function findTaskIndex(arr, taskTitle) {
    const title = document.querySelector(".main-hd");
    return arr.findIndex(index => index === taskTitle);
}

function taskTitleMatch(title) {
    if(taskArr.length === 0) return false;
    for(let i = 0; i < taskArr.length; i++) {
        if(taskArr[i].title === title) return true;
    }
    return false;
}

export {taskForm, selectedTask, deleteEntireTask, editTaskForm, deleteTask, updateTask};