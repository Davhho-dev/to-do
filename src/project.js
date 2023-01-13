import { addToProjectList, displayProject } from "./UI";

let projectArr = [];

function projectModal() {
    const projectModal = document.querySelector(".project-modal");
    projectModal.showModal();
    const closeBtn = document.querySelector(".project-close");
    closeBtn.addEventListener("click", () => {
        projectModal.close();
    });
    return projectModal;
}

function projectForm() {
    const form = document.querySelector(".project-form");
    const projectModal = document.querySelector(".project-modal");
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
        addToProjectList(projectArr);
        displayProject(newProject);
        projectModal.close();
        form.reset();
        // console.log(projectArr);
        return projectArr;
    });
}

function editModal() {
    const editModal = document.querySelector(".edit-modal");
    editModal.showModal();
    const closeBtn = document.querySelector(".edit-close");
    closeBtn.addEventListener("click", () => {
        editModal.close();
    });
    return editModal;
}

function editForm(projectIndex) {
    const form = document.querySelector(".edit-form");
    const projectModal = document.querySelector(".edit-modal");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("edit-title");
        projectArr[projectIndex].title = title.value;
        const description = document.getElementById("edit-description");
        projectArr[projectIndex].description = description.value;
        const dueDate = document.getElementById("edit-due-date");
        projectArr[projectIndex].dueDate = dueDate.value;
        let priority = "Low";
        if(document.querySelector(".edit-modal #medium").checked) priority = "Medium";
        else if(document.querySelector(".edit-modal #high").checked) priority = "High";
        else priority;
        projectArr[projectIndex].priority = priority;
        console.log("project-module");
        console.log(projectArr);
        addToProjectList(projectArr);
        displayProject(projectArr[projectIndex]);
        projectModal.close();
        form.reset();
        return projectArr;
    }, {once: true}); //prevent form from submitting twice when editing more than once
}

function deleteProject(projectIndex) {
    return projectArr.splice(projectIndex, 1);
}

const userProject = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
} 


export {projectModal, projectForm, projectArr, editModal, editForm, deleteProject};