import { displayProjectModal, displayEditProjectModal, displayTaskModal, displayEditTaskModal} from "./UI";
import { deleteProject, selectedProject } from "./project";
import { selectedTask, deleteEntireTask, deleteTask } from "./task";

const addProjectBtn = document.querySelector(".add-project");
addProjectBtn.addEventListener("click", () => {
    displayProjectModal();
});

const editProjectBtn = document.querySelector(".project-list");
editProjectBtn.addEventListener("click", (e) => {
    if(e.target.className === "material-icons-outlined edit") {
        const projectTitle = e.target.parentElement.parentElement.childNodes[0].textContent;
        displayEditProjectModal(projectTitle);
    }else if(e.target.className === "material-icons-outlined delete") {
        const projectTitle = e.target.parentElement.parentElement.childNodes[0].textContent;
        deleteProject(projectTitle);
        deleteEntireTask(projectTitle);
    }else {
        if(e.target.className === "project-title") {
            const projectTitle = e.target.className;
            const projectCon = e.target.parentElement.parentElement;
            selectedProject(projectTitle);
            selectedTask();
        }else {
            const projectTitle = e.target.childNodes[0].textContent;
            const projectCon = e.target.parentElement;
            selectedProject(projectTitle);
            selectedTask();
        }
    }
});

const taskList = document.querySelector(".project-task-list");
taskList.addEventListener("click", (e) => {
    if(e.target.className === "add-task") {
        displayTaskModal();
    }else if(e.target.className === "material-icons-outlined edit") {
        const taskTitle = e.target.parentElement.parentElement.childNodes[0].textContent;
        const projectTitle = document.querySelector(".main-hd").textContent;
        displayEditTaskModal(projectTitle, taskTitle);
    }else if(e.target.className === "material-icons-outlined delete") {
        const taskTitle = e.target.parentElement.parentElement.childNodes[0].textContent;
        const projectTitle = document.querySelector(".main-hd").textContent;
        deleteTask(projectTitle, taskTitle);
    }
})