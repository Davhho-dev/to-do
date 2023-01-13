import { projectModal, projectForm, projectArr, editModal, editForm, deleteProject} from "./project";
import { taskModal, taskForm, taskArr, updateTask, editTaskModal, editTaskForm, deleteTask, strikeThrough } from "./task";
import { displayCompletedList, changeArrow, displayProject, displayTask, removeProject} from "./UI";

const addProjectBtn = document.querySelector(".add-project");
addProjectBtn.addEventListener("click", () => {
    projectModal();
});

projectForm();
taskForm();

const projectList = document.querySelectorAll(".project-list");
projectList.forEach((project) => {
    project.addEventListener("click", (e) => {
        // console.log(projectArr);
        let projectTitle = "";
        if(e.target.classList.value === "project-title") {
            projectTitle = e.target.childNodes[0].textContent;
        }else if(e.target.classList.value === "new-project-con") {
            projectTitle = e.target.childNodes[0].textContent;
        }else {
            projectTitle = e.target.parentElement.parentElement.childNodes[0].textContent;
        }
        const projectIndex = projectArr.findIndex(project => project.title === projectTitle);
        displayProject(projectArr[projectIndex]);
        const taskIndex = taskArr.findIndex(task => task.project === projectTitle);
        if(taskIndex !== -1) displayTask(taskArr[taskIndex].description);
    })
})

const projectBtn = document.querySelectorAll(".project-list");
projectBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(e.target.classList.value === "material-icons-outlined edit") {
            const title = e.target.parentElement.parentElement.childNodes[0].textContent;
            const projectIndex = projectArr.findIndex(project => project.title === title);
            const taskIndex = taskArr.findIndex(task => task.project === title);
            editModal();
            editForm(projectIndex);
            // updateTask(taskIndex, title);
            // console.log("index module");
            // console.log(projectArr);
            // console.log(projectArr[projectIndex]);
        }
        if(e.target.classList.value === "material-icons-outlined delete") {
            const title = e.target.parentElement.parentElement.childNodes[0].textContent;
            const projectIndex = projectArr.findIndex(project => project.title === title);
            deleteProject(projectIndex);
            const projectList = document.querySelector(".project-list");
            projectList.removeChild(e.target.parentElement.parentElement);
            removeProject(projectArr);
        }
    })
})

const taskBtn = document.querySelectorAll(".project-task-list");
taskBtn.forEach(task => {
    task.addEventListener("click", (e) => {
        if(e.target.classList.value === "material-icons-outlined edit") {
            const taskDesc = e.target.parentElement.parentElement.childNodes[0].childNodes[1].textContent;
            const header = document.querySelector(".main-hd").textContent;
            const taskIndex = taskArr.findIndex(task => task.project === header);
            const descIndex = taskArr[taskIndex].description.findIndex(desc => desc === taskDesc);
            console.log(descIndex);
            editTaskModal();
            editTaskForm(taskIndex, descIndex);
        }
        if(e.target.classList.value === "material-icons-outlined delete") {
            const taskDesc = e.target.parentElement.parentElement.childNodes[0].childNodes[1].textContent;
            const header = document.querySelector(".main-hd").textContent;
            const taskIndex = taskArr.findIndex(task => task.project === header);
            const descIndex = taskArr[taskIndex].description.findIndex(desc => desc === taskDesc);
            deleteTask(taskIndex, descIndex);
            const projectTaskList = document.querySelector(".project-task-list");
            projectTaskList.removeChild(e.target.parentElement.parentElement);
        }
        if(e.target.classList.value === "checkbox" || e.target.classList.value === "checkbox active") {
            const desc = e.target.parentElement.childNodes[1];
            const checkbox = e.target;
            strikeThrough(checkbox, desc);
        }
    })
})

const addTaskbtn = document.querySelector(".add-task");
addTaskbtn.addEventListener("click", () => {
    taskModal();
});

const completedTab = document.querySelector(".completed-tab");
completedTab.addEventListener("click", (e) => {
    const innerText = e.target.innerText;
    if(innerText === "Completed\nexpand_more" || innerText === "expand_more") {
        changeArrow(innerText);
        displayCompletedList(innerText);
    }else {
        changeArrow(innerText);
        displayCompletedList(innerText);
    }
});
