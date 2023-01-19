import { projectForm, editProjectForm} from "./project";
import { taskForm, editTaskForm } from "./task";


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
        HTMLFormElement.prototype.reset.call(form);
    });
}

function displayEditTaskModal(projectTitle,taskTitle) {
    const form = document.querySelector(".edit-task-form");
    const editTaskModal = document.querySelector(".edit-task-modal");
    editTaskModal.showModal();
    editTaskForm(projectTitle, taskTitle);

    const closeBtn = document.querySelector(".edit-task-close");
    closeBtn.addEventListener("click", () => {
        editTaskModal.close();
        HTMLFormElement.prototype.reset.call(form);
    })
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

export {displayProject, displayProjectModal, displayEditProjectModal, displayMain, displayDeleteMain, displayTaskModal, displayTask, displayEditTaskModal};