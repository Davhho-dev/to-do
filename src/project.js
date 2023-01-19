import { displayProject, displayMain, displayDeleteMain } from "./UI";
import { updateTask } from "./task";


let projectArr = [];

const userProject = (title, desc, dueDate, priority) => {
    return {title, desc, dueDate, priority};
}

function projectForm() {
    const projectModal = document.querySelector(".project-modal");
    const form = document.querySelector(".project-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title");
        const description = document.getElementById("description");
        const dueDate = document.getElementById("due-date");
        let priority = "Low";
        if(document.querySelector(".project-modal #medium").checked) priority = "Medium";
        else if(document.querySelector(".project-modal #high").checked) priority = "High";
        else priority;
        const newProject = userProject(title.value, description.value, dueDate.value, priority);
        projectArr.push(newProject);
        displayProject(projectArr);
        displayMain(newProject);
        projectModal.close();
        HTMLFormElement.prototype.reset.call(form);
    }, {once: true});
}

function editProjectForm(projectTitle) {

    const editModal = document.querySelector(".edit-modal");
    const editForm = document.querySelector(".edit-form");
    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("edit-title");
        const description = document.getElementById("edit-description");
        const dueDate = document.getElementById("edit-due-date");
        let priority = "Low";
        if(document.querySelector(".edit-form #medium").checked) priority = "Medium";
        else if(document.querySelector(".edit-form #high").checked) priority = "High";
        else priority;
        const index = findProject(projectTitle);
        projectArr[index].title = title.value;
        projectArr[index].desc = description.value;
        projectArr[index].dueDate = dueDate.value;
        projectArr[index].priority = priority;
        displayProject(projectArr);
        displayMain(projectArr[index]);
        updateTask(index, title.value);
        editModal.close();
        console.log(projectArr);
        HTMLFormElement.prototype.reset.call(editForm)
    }, {once: true});
}

function deleteProject(projectTitle) {
    const index = findProject(projectTitle);
    projectArr.splice(index, 1);
    console.log(projectArr);
    displayProject(projectArr);
    displayDeleteMain(projectArr);
}

function selectedProject(projectTitle) {
    const index = findProject(projectTitle);
    displayMain(projectArr[index]);
}

function findProject(projectTitle) {
    return projectArr.findIndex(project => project.title === projectTitle);
}

export {projectForm, editProjectForm, deleteProject, selectedProject};