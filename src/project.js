function projectModal() {
    const projectModal = document.querySelector(".project-modal");
    projectModal.showModal();
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
        projectModal.close();
    });
    return projectModal;
}

export {projectModal};