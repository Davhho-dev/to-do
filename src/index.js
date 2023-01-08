import { projectModal } from "./project";
import { taskModal } from "./task";
import { displayCompletedList, changeArrow } from "./UI";

const addProjectBtn = document.querySelector(".add-project");
addProjectBtn.addEventListener("click", () => {
    projectModal();
});

const addTaskbtn = document.querySelector(".add-task");
addTaskbtn.addEventListener("click", () => {
    taskModal();
})

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
