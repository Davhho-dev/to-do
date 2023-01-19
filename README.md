# To-Do List 

Author: David H

The project is based on The Odin Project's building a To Do List

---
<br>

## About

The project consisted of creating several modules to assist with each functionality of the application. Utilizing a module bundler (webpack) to bundle and compile all of the code into a simple file. 

The project was at the very least, to take users input and display either a project and task. User's have the ability to edit or delete a project and task. 

Initially, the project consisted of other element, however, ended up taking those elements and functionality out of the equation to decrease the amount of time spent on the project. 

The project at the very least, is capable of displaying, updating, deleting a project and a task. 

---
<br>

## Thought Process

Initially, was designing and the layout of the web application. Adopting a simple style with dark tones. 

Once the layout was complete, was implementing functionality to the project. This involved adding the ability to add project and task via button and displaying a modal using `dialog` and having a `form` nested in that modal. 

Any functionality that regarded creating a project, displaying said project on the header and side of the web application was set within it's respective module. 
    
    Project Module Functionality:
        
        Create a new project obj using the user's input for title, description, due date, and priority.

        The project Obj would be pushed into an array which would allow tracking of the projects that were created.

        Changing name of project would update the obj within the array.

        Deleting a project would delete the obj within the array.

<br>

    Task Module Functionality:

        Essentially same as the project module.

        Create a new task obj using user's input for description.

        Task obj would be pushed into an array to be tracked, where the description of task would correspond to respective project

        Editing name of task and deleting task was functional.

        Editing the project name would require task obj to track index of that project so that the task could link to the correct project.

<br>

    UI Module Functionality:

        Display the project as the user created a project.

        Display the task as the user created a task.

        Display any name changes to project and/or task.

        Display any deletions of project and/or task.

<br>

    Index Module Functionality:

        Calling the correct functions from respective module when a user interacts with a button or clicks on a project to be displayed.

<br>

A code revision was needed as the original code was slightly confusing. The revised code was easier to read and made more logical sense. Additionally, some element and functions were scraped due to the time commitment. 

---


## Credits

Google Material Icons

- use several icons such as delete, edit, and add icons

<br>
Google Fonts

- Poppins
- Lara

<br>
Duck SVG icon for the favicon

<img src="https://www.svgrepo.com/show/120913/duck.svg" alt="duck svg" width="200">


https://www.svgrepo.com/svg/120913/duck


