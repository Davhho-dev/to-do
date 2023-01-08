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

export {displayCompletedList, changeArrow};