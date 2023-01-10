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
        if(document.getElementById("medium").checked) priority = "Medium";
        else if(document.getElementById("high").checked) priority = "High";
        else priority;
        const newProject = userProject(title.value, description.value, dueDate.value, priority);
        projectArr.push(newProject);
        addToProjectList(projectArr);
        displayProject(newProject);
        projectModal.close();
        form.reset();
        console.log(projectArr);
    });
}

const userProject = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
} 


export {projectModal, projectForm};