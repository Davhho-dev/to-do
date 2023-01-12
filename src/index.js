import { projectModal, projectForm, projectArr, editModal, editForm} from "./project";
import { taskModal, taskForm, taskArr } from "./task";
import { displayCompletedList, changeArrow, displayProject, displayTask} from "./UI";

const addProjectBtn = document.querySelector(".add-project");
addProjectBtn.addEventListener("click", () => {
    projectModal();
});

projectForm();
taskForm();

//have edit form function and placed next to these two functions above (projectForm and task form). The edit form should be the same as project form. Maybe create a new edit object that references the old object and then we can update the UI based upon that edit object. For some reason, editing the new array is causing problems.

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

        // if(e.target.classList.value === "material-icons-outlined edit") {
        //     editProjectModal(projectIndex);
            
        //     editProject(projectIndex);
        //     // displayProject(projectArr[projectIndex]);
        // }
        // console.log(e.target.classList.value);
    })
})

const projectBtn = document.querySelectorAll(".project-list");
projectBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(e.target.classList.value === "material-icons-outlined edit") {
            const title = e.target.parentElement.parentElement.childNodes[0].textContent;
            const projectIndex = projectArr.findIndex(project => project.title === title);
            editModal();
            editForm(projectIndex);
            console.log("index module");
            console.log(projectArr);
            console.log(projectArr[projectIndex]);
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
