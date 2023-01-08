function taskModal() {
    const taskModal = document.querySelector(".task-modal");
    taskModal.showModal();
    const closeBtn = document.querySelector(".task-close");
    closeBtn.addEventListener("click", (e) => {
        taskModal.close();
    });
    return taskModal;
}

export {taskModal};