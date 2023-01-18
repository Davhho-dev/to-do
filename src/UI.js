// import { projectArr } from "./project";

// function displayCompletedList(innerText) {
//     const completedList = document.querySelector(".completed-list");
//     if(innerText === "Completed\nexpand_more" || innerText === "expand_more") {
//         const projectHover = document.querySelectorAll(".user-project");
//         projectHover.forEach((project) => {
//             project.addEventListener("mouseover", () => {
//                 project.setAttribute("style", "background-color: rgba(255, 255, 255, 0.296); border-radius: 5px;");
//             });
//             project.addEventListener("mouseout", () => {
//                 project.style.background = "none";
//             });
//         })
//         return completedList.classList.remove("hidden");
//     }else return completedList.classList.add("hidden");
// }

// function changeArrow(arrowDirection) {
//     const arrowIcon = document.querySelector(".completed-tab .material-icons-outlined");
//     if(arrowDirection === "Completed\nexpand_more" || arrowDirection === "expand_more") return arrowIcon.innerText = "expand_less"
//     else return arrowIcon.innerText = "expand_more";
// }

// function addToProjectList(arr) {
//     const completedList = document.querySelector(".project-list");
//     completedList.textContent = "";
//     arr.forEach((project) => {
//         const newProjectContainer = document.createElement("div");
//         newProjectContainer.classList.add("new-project-con");
//         const projectTitle = document.createElement("p");
//         projectTitle.classList.add("project-title");
//         projectTitle.textContent = project.title;
//         newProjectContainer.appendChild(projectTitle);
//         newProjectContainer.appendChild(createProjectButtons());
//         completedList.appendChild(newProjectContainer);
//     })
//     return completedList;
// }

// function displayTask(arr) {
//     const taskList = document.querySelector(".project-task-list");
//     clearTaskList();
//     arr.forEach(task => {
//         const projectTask = document.createElement("div");
//         projectTask.classList.add('project-task');
//         const projectTaskLeft = document.createElement("div");
//         projectTaskLeft.classList.add("project-task-left");
//         const checkBox = document.createElement("div");
//         checkBox.classList.add('checkbox');
//         const taskDescription = document.createElement("p");
//         taskDescription.classList.add("project-task-desc");
//         taskDescription.textContent = task;
//         projectTaskLeft.appendChild(checkBox);
//         projectTaskLeft.appendChild(taskDescription);
//         projectTask.appendChild(projectTaskLeft);
//         projectTask.appendChild(createProjectButtons());
//         const addTaskBtn = document.querySelector(".add-task");
//         return taskList.insertBefore(projectTask, addTaskBtn);
//     });
// }

// function displayProject(projectObj) {
//     clearTaskList();
//     const header = document.querySelector(".main-hd");
//     header.textContent = projectObj.title;
//     const description = document.querySelector(".main-hd-desc");
//     description.textContent = projectObj.description;
//     const date = document.querySelector(".main-hd-date-user");
//     date.textContent = projectObj.dueDate;
//     const priority = document.querySelector(".main-hd-priority-user");
//     priority.textContent = projectObj.priority;
//     priority.style.color = changePriorityColor(projectObj.priority);

//     //iterate through project title element that contains project title
//     for (const a of document.querySelectorAll(".project-title")) {
//         if(a.textContent.includes(projectObj.title)) {
//             a.setAttribute("style", "color: white; opacity: 1;");
//             a.parentElement.style.backgroundColor = "rgba(255, 255, 255, 0.296)";
//         }else {
//             a.setAttribute("style", "color: #EBEBEB; opacity: .5;");
//             a.parentElement.style.background = "none";
//         }
//     }
// }

// function removeProject() {
//     if(projectArr.length === 0) {
//         const headerContainer = document.querySelector(".main-hd-con");
//         headerContainer.textContent = "";
//         headerContainer.style.paddingBottom = "6.15rem";
//         return headerContainer;
//     }else {
//         const header = document.querySelector(".main-hd");
//         header.textContent = projectArr[0].title;
//         const description = document.querySelector(".main-hd-desc");
//         description.textContent = projectArr[0].description;
//         const date = document.querySelector(".main-hd-date-user");
//         date.textContent = projectArr[0].dueDate;
//         const priority = document.querySelector(".main-hd-priority-user");
//         priority.textContent = projectArr[0].priority;
//         priority.style.color = changePriorityColor(projectArr[0].priority);
//         const selected = document.querySelector(".project-title");
//         selected.setAttribute("style", "color: white; opacity: 1;");
//         selected.parentElement.style.backgroundColor = "rgba(255, 255, 255, 0.296)";
//     }
// }

// function changePriorityColor(priority) {
//     if(priority === "Low") return "green";
//     else if(priority === "Medium") return "yellow";
//     else return "red";
// }

// function createProjectButtons() {
//     const projectBtn = document.createElement("div");
//     projectBtn.classList.add("project-btn");
//     const editBtn = document.createElement("span");
//     const deleteBtn = document.createElement("span");
//     editBtn.classList.add("material-icons-outlined");
//     editBtn.classList.add("edit");
//     deleteBtn.classList.add("material-icons-outlined");
//     deleteBtn.classList.add("delete");
//     editBtn.textContent = "edit";
//     deleteBtn.textContent = "delete";
//     projectBtn.appendChild(editBtn);
//     projectBtn.appendChild(deleteBtn);
//     return projectBtn;
// }

// function clearTaskList() {
//     const taskList = document.querySelector(".project-task-list");
//     const projectTask = document.querySelectorAll(".project-task");
//     for(let i = 0; i < projectTask.length; i++) {
//         taskList.removeChild(document.querySelector(".project-task"));
//     }
//     return taskList;
// }

// export {displayCompletedList, changeArrow, addToProjectList, displayProject, displayTask, removeProject};


import { projectForm, editProjectForm} from "./project";
import { taskForm } from "./task";


function displayProjectModal() {
    const form = document.querySelector(".project-form");
    const projectModal = document.querySelector(".project-modal");
    projectModal.showModal();
    projectForm();

    const closeBtn = document.querySelector(".project-close");
    closeBtn.addEventListener("click", () => {
        projectModal.close();
        HTMLFormElement.prototype.reset.call(form)
    });
}

function displayEditProjectModal(projectTitle) {
    const form = document.querySelector(".edit-form");
    const projectModal = document.querySelector(".edit-modal");
    projectModal.showModal();
    editProjectForm(projectTitle);

    const closeBtn = document.querySelector(".edit-close");
    closeBtn.addEventListener("click", () => {
        projectModal.close();
        HTMLFormElement.prototype.reset.call(form)
    });
}

/* displaying project list on left side of screen */
function displayProject(arr) {
    const headerContainer = document.querySelector(".main-hd-con");
    headerContainer.style.paddingBottom = "1rem";
    const projectList = document.querySelector(".project-list");
    projectList.textContent = "";
    for(let project = 0; project < arr.length; project++) {
        projectList.appendChild(createProjectEl(arr[project]));
    }
}

function createProjectEl(arr) {
    const projectCon = document.createElement("div");
    projectCon.classList.add("new-project-con");

    const projectTitle = document.createElement("p");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = arr.title;
    projectCon.appendChild(projectTitle);
    projectCon.appendChild(createButtons());
    return projectCon;
}

function createButtons() {
    const projectBtn = document.createElement("div");
    projectBtn.classList.add("project-btn");

    const editBtn = document.createElement("span");
    editBtn.classList.add("material-icons-outlined");
    editBtn.classList.add("edit");
    editBtn.textContent = "edit";
    projectBtn.appendChild(editBtn);

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("material-icons-outlined");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "delete";
    projectBtn.appendChild(deleteBtn);
    return projectBtn;
}

function displayTaskModal() {
    const form = document.querySelector(".task-form");
    const taskModal = document.querySelector(".task-modal");
    taskModal.showModal();
    taskForm();

    const closeBtn = document.querySelector(".task-close");
    closeBtn.addEventListener("click", () => {
        taskModal.close();
        HTMLFormElement.prototype.reset.call(form)
    });
}

function displayTask(arr) {
    const taskList = document.querySelector(".project-task-list");
    if(typeof arr === "undefined") {
        taskList.textContent = "";
    }else {
        taskList.textContent = "";
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            taskList.appendChild(createTaskEl(arr[i]));
        }
    }
    taskList.appendChild(createAddTaskBtn());
}

function createTaskEl(desc) {
    const projectTask = document.createElement("div");
    projectTask.classList.add("project-task");

    const taskLeft = document.createElement("div");
    taskLeft.classList.add("project-task-left");
    projectTask.appendChild(taskLeft);

    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");
    taskLeft.appendChild(checkbox);

    const taskDesc = document.createElement("p");
    taskDesc.classList.add("project-task-desc");
    taskDesc.textContent = desc;
    taskLeft.appendChild(taskDesc);

    projectTask.appendChild(createTaskButtons());

    return projectTask;
}

function createTaskButtons() {
    const projectBtn = document.createElement("div");
    projectBtn.classList.add("project-task-btn");

    const editBtn = document.createElement("span");
    editBtn.classList.add("material-icons-outlined");
    editBtn.classList.add("edit");
    editBtn.textContent = "edit";
    projectBtn.appendChild(editBtn);

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("material-icons-outlined");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "delete";
    projectBtn.appendChild(deleteBtn);
    return projectBtn;
}

function createAddTaskBtn() {
    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task");

    const addIcon = document.createElement("span");
    addIcon.classList.add("material-icons-outlined");
    addIcon.classList.add("add-icon");
    addIcon.textContent = "add";
    addTaskBtn.prepend(addIcon, "Add Task");
    return addTaskBtn;
}

function displayMain(project) {
    const header = document.querySelector(".main-hd");
    header.textContent = project.title;

    const desc = document.querySelector(".main-hd-desc");
    desc.textContent = project.desc;

    const dueDate = document.querySelector(".main-hd-date-user");
    dueDate.textContent = project.dueDate;

    const priority = document.querySelector(".main-hd-priority-user");
    priority.textContent = project.priority;
    priority.style.color = priorityColor(project.priority);

    const taskList = document.querySelector(".project-task-list");
    taskList.textContent = "";
    taskList.appendChild(createAddTaskBtn());
}

function displayDeleteMain(arr) {
    const headerContainer = document.querySelector(".main-hd-con");

    const header = document.querySelector(".main-hd");

    const desc = document.querySelector(".main-hd-desc");

    const dueDate = document.querySelector(".main-hd-date-user");

    const priority = document.querySelector(".main-hd-priority-user");

    if(arr.length === 0) {
        header.textContent = "";
        desc.textContent = "";
        dueDate.textContent = "";
        priority.textContent = "";
        headerContainer.style.paddingBottom = "4.9rem";
    }else {
        header.textContent = arr[0].title;
        desc.textContent = arr[0].desc;
        dueDate.textContent = arr[0].dueDate;
        priority.textContent = arr[0].priority;
    }

}

function priorityColor(level) {
    if(level === "Low") return "green";
    else if(level === "Medium") return "yellow";
    else return "red";
}

export {displayProject, displayProjectModal, displayEditProjectModal, displayMain, displayDeleteMain, displayTaskModal, displayTask};