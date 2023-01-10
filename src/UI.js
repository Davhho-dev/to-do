function displayCompletedList(innerText) {
    const completedList = document.querySelector(".completed-list");
    if(innerText === "Completed\nexpand_more" || innerText === "expand_more") {
        const projectHover = document.querySelectorAll(".user-project");
        projectHover.forEach((project) => {
            project.addEventListener("mouseover", () => {
                project.setAttribute("style", "background-color: rgba(255, 255, 255, 0.296); border-radius: 5px;");
            });
            project.addEventListener("mouseout", () => {
                project.style.background = "none";
            });
        })
        return completedList.classList.remove("hidden");
    }else return completedList.classList.add("hidden");
}

function changeArrow(arrowDirection) {
    const arrowIcon = document.querySelector(".completed-tab .material-icons-outlined");
    if(arrowDirection === "Completed\nexpand_more" || arrowDirection === "expand_more") return arrowIcon.innerText = "expand_less"
    else return arrowIcon.innerText = "expand_more";
}

function addToProjectList(arr) {
    const completedList = document.querySelector(".project-list");
    completedList.textContent = "";
    arr.forEach((project) => {
        const newProjectContainer = document.createElement("div");
        newProjectContainer.classList.add("new-project-con");
        const projectTitle = document.createElement("p");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.title;
        newProjectContainer.appendChild(projectTitle);
        newProjectContainer.appendChild(createProjectButtons());
        completedList.appendChild(newProjectContainer);
    })
    return completedList;
}

function displayProject(projectObj) {
    const header = document.querySelector(".main-hd");
    header.textContent = projectObj.title;
    const description = document.querySelector(".main-hd-desc");
    description.textContent = projectObj.description;
    const date = document.querySelector(".main-hd-date-user");
    date.textContent = projectObj.dueDate;
    const priority = document.querySelector(".main-hd-priority-user");
    priority.textContent = projectObj.priority;
    priority.style.color = changePriorityColor(projectObj.priority);
}

function changePriorityColor(priority) {
    if(priority === "Low") return "green";
    else if(priority === "Medium") return "yellow";
    else return "red";
}

function createProjectButtons() {
    const projectBtn = document.createElement("div");
    projectBtn.classList.add("project-btn");
    const editBtn = document.createElement("span");
    const deleteBtn = document.createElement("span");
    editBtn.classList.add("material-icons-outlined");
    editBtn.classList.add("edit");
    deleteBtn.classList.add("material-icons-outlined");
    deleteBtn.classList.add("delete");
    editBtn.textContent = "edit";
    deleteBtn.textContent = "delete";
    projectBtn.appendChild(editBtn);
    projectBtn.appendChild(deleteBtn);
    return projectBtn;
}

export {displayCompletedList, changeArrow, addToProjectList, displayProject};