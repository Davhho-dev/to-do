import { projectModal, projectForm, projectArr, editModal, editForm, deleteProject} from "./project";
import { taskModal, taskForm, taskArr, updateTask } from "./task";
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
