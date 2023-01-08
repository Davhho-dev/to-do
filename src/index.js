import { projectModal } from "./project";
import { displayCompletedList, changeArrow } from "./UI";

const addProjectBtn = document.querySelector(".add-project");
addProjectBtn.addEventListener("click", (e) => {
    projectModal();
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
