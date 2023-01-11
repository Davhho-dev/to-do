import { projectModal, projectForm, projectArr} from "./project";
import { taskModal, taskForm, taskArr } from "./task";
import { displayCompletedList, changeArrow, displayProject, displayTask} from "./UI";

const addProjectBtn = document.querySelector(".add-project");
addProjectBtn.addEventListener("click", () => {
    projectModal();
});

projectForm();
taskForm();

const projectList = document.querySelectorAll(".project-list");
projectList.forEach((project) => {
    project.addEventListener("click", (e) => {
        const projectTitle = e.target.childNodes[0].childNodes[0].textContent;
        const projectIndex = projectArr.findIndex(project => project.title === projectTitle);
        displayProject(projectArr[projectIndex]);
        const taskIndex = taskArr.findIndex(task => task.project === projectTitle);
        if(taskIndex !== -1) displayTask(taskArr[taskIndex].description);
        // if(taskArr) displayTask(taskArr[taskIndex].description);
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
