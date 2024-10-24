import './styles.css';
import { Todo, getProjects, setProjects } from './todos';

const addProjectBtn = document.querySelector('.add-project>button');
const addProjectInput = document.querySelector('.add-project>input');
const projectBtns = document.querySelectorAll('.projects>button');
const projectBtnsContainer = document.querySelector('.projects');
const todosContainer = document.querySelector('.todos-container');
const dialog = document.querySelector('dialog');
const dialogInputs = document.querySelectorAll('dialog input');
const selectEl = document.querySelector('select');
const addTodoBtn = document.querySelector('.add-todo-btn');

const eventHandlers = (function() {
    const handleAddTodoBtnClick = () => {
        dialog.showModal();
        dialog.addEventListener('close', eventHandlers.handleCloseForAdding);
    };
    const handleEditBtnClick = e => {
        const projects = getProjects();
        projects.dynamicInfo.editTodoIndex = +e.target.parentNode.parentNode.getAttribute('data-index');
        setProjects(projects);
        domManipulator.showEditDialog();
        dialog.addEventListener('close', eventHandlers.handleCloseForEditing);

    }
    const handleCloseForAdding = () => {
        const dialogInputsValues = [];
        const priority = selectEl.value;
        for(const dialogInput of dialogInputs) {
            dialogInputsValues.push(dialogInput.value);
        }
        const [task, desc, dueDate] = dialogInputsValues;
        const projects = getProjects();
        projects[projects.currentProject].push(new Todo(task, desc, priority, dueDate));
        setProjects(projects);
        domManipulator.renderTodos();
        dialog.removeEventListener('close', eventHandlers.handleCloseForAdding);
    };
    const handleCloseForEditing = () => {
        const projects = getProjects();
        const editTodo = projects[projects.currentProject][dynamicInfo.editTodoIndex];
        let i = 0;
        for(const prop in editTodo) {
            if(prop === 'priority') {
                editTodo[prop] = selectEl.value;
                continue;
            };
            editTodo[prop] = dialogInputs[i].value;
            i++;
        };
        setProjects(projects);
        domManipulator.renderTodos();
        dialog.removeEventListener('close', eventHandlers.handleCloseForEditing);
    };
    const handleAddProjectBtnClick = () => {
        const projects = getProjects();
        projects[addProjectInput.value] = [];
        setProjects(projects);
        domManipulator.createProjectBtn();

    };
    const handleProjectBtnClick = e => {
        const projects = getProjects();
        projects.currentProject = e.target.textContent.slice(2);
        setProjects(projects);
        domManipulator.renderTodos();
    };
    const handleDeletelBtnClick = e => {
        const projects = getProjects();
        const deleteTodoIndex = +e.target.parentNode.parentNode.getAttribute('data-index');
        projects[projects.currentProject].splice(deleteTodoIndex, 1);
        setProjects(projects);
        domManipulator.renderTodos();
    }
    return {
        handleCloseForAdding, 
        handleAddTodoBtnClick, 
        handleEditBtnClick, 
        handleCloseForEditing, 
        handleAddProjectBtnClick,
        handleProjectBtnClick,
        handleDeletelBtnClick,
    };
})();

const domManipulator = (function() {
    const clearTodosContainer = () => {
        while(todosContainer.firstChild) {
            todosContainer.removeChild(todosContainer.firstChild);
        }
    }
    const renderTodos = () => {
        clearTodosContainer();
        let dataIndex = 0;
        const projects = getProjects();
        for(const todo of projects[projects.currentProject]) {
            const todoDiv = document.createElement('div');
            const todoHeadingDiv = document.createElement('div');
            const todoContentDiv = document.createElement('div');
            const todoEditBtnDiv = document.createElement('div');
            const todoEditBtn = document.createElement('button');
            const todoDeleteBtn = document.createElement('button');
            todoDiv.classList.add('todo');
            todoDiv.setAttribute('data-index', dataIndex);
            dataIndex++;
            todoHeadingDiv.classList.add('heading');
            todoContentDiv.classList.add('content');
            todoEditBtnDiv.classList.add('edit-btn');
            for(const prop in todo) {
                const h3 = document.createElement('h3');
                const para = document.createElement('p');
                h3.textContent = prop[0].toUpperCase() + prop.slice(1);
                para.textContent = todo[prop];
                todoHeadingDiv.appendChild(h3);
                todoContentDiv.appendChild(para);
            }
                todoEditBtn.textContent = 'Edit';
                todoEditBtn.addEventListener('click', eventHandlers.handleEditBtnClick);
                todoDeleteBtn.textContent = 'Delete';
                todoDeleteBtn.addEventListener('click', eventHandlers.handleDeletelBtnClick);
                todoEditBtnDiv.appendChild(todoEditBtn);
                todoEditBtnDiv.appendChild(todoDeleteBtn);
                todoDiv.appendChild(todoHeadingDiv);
                todoDiv.appendChild(todoContentDiv);
                todoDiv.appendChild(todoEditBtnDiv);
                todosContainer.appendChild(todoDiv);
        };
    };
    const showEditDialog = () => {
        const editTodo = projects[projects.currentProject][dynamicInfo.editTodoIndex];
        let i = 0;
        for(const prop in editTodo) {
            if(prop === 'priority') {
                dialog.querySelectorAll('option').forEach(option => {
                    if(option.value === prop) option.selected === true;
                });
                continue;
            };
            dialogInputs[i].value = editTodo[prop];
            i++;
        };
        dialog.showModal();
    };
    const createProjectBtn = () => {
        const newProjectBtn = document.createElement('button');
        newProjectBtn.textContent = '# ' + addProjectInput.value;
        newProjectBtn.addEventListener('click', eventHandlers.handleProjectBtnClick);
        addProjectInput.value = '';
        projectBtnsContainer.appendChild(newProjectBtn);
    };
    const restoreProjectsBtns = () => {
        const projects = getProjects();
        for(const prop in projects) {
            if(prop === 'Today' || prop === 'currentProject') continue;
            const projectBtn = document.createElement('button');
            projectBtn.textContent = '# ' + prop;
            projectBtn.addEventListener('click', eventHandlers.handleProjectBtnClick);
            projectBtnsContainer.appendChild(projectBtn);
        }
    }
    return {
        renderTodos, 
        showEditDialog, 
        createProjectBtn, 
        restoreProjectsBtns
    };
})();

addTodoBtn.addEventListener('click', eventHandlers.handleAddTodoBtnClick);

addProjectBtn.addEventListener('click', eventHandlers.handleAddProjectBtnClick);

projectBtns.forEach(projectBtn => {
    projectBtn.addEventListener('click', eventHandlers.handleProjectBtnClick);
});

window.addEventListener('load', () => {
    domManipulator.restoreProjectsBtns();
    domManipulator.renderTodos();
});