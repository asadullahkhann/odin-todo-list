import './styles.css';
import { Todo, projects } from './todos';

const addProjectBtn = document.querySelector('add-project>button');
const addProjectInput = document.querySelector('add-project>input');
const projectBtns = document.querySelectorAll('projects>button');
const todosContainer = document.querySelector('.todos-container');
const dialog = document.querySelector('dialog');
const dialogInputs = document.querySelectorAll('dialog input');
const selectEl = document.querySelector('select');
const addTodoBtn = document.querySelector('.add-todo-btn');

const dynamicInfo = {
    editTodoIndex: null,
}

const eventHandlers = (function() {
    const handleAddTodoBtnClick = () => {
        dialog.showModal();
        dialog.addEventListener('close', eventHandlers.handleCloseForAdding);
    };
    const handleEditBtnClick = e => {
        dynamicInfo.editTodoIndex = +e.target.parentNode.parentNode.getAttribute('data-index');
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
        projects[projects.currentProject].push(new Todo(task, desc, priority, dueDate));
        domManipulator.renderTodos();
        dialog.removeEventListener('close', eventHandlers.handleCloseForAdding);
    };
    const handleCloseForEditing = () => {
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
        domManipulator.renderTodos();
        dialog.removeEventListener('close', eventHandlers.handleCloseForEditing);
    }
    return {handleCloseForAdding, handleAddTodoBtnClick, handleEditBtnClick, handleCloseForEditing};
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
        for(const todo of projects[projects.currentProject]) {
            const todoDiv = document.createElement('div');
            const todoHeadingDiv = document.createElement('div');
            const todoContentDiv = document.createElement('div');
            const todoEditBtnDiv = document.createElement('div');
            const todoEditBtn = document.createElement('button');
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
                todoEditBtnDiv.appendChild(todoEditBtn);
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
    }
    return {renderTodos, showEditDialog};
})();

addTodoBtn.addEventListener('click', eventHandlers.handleAddTodoBtnClick);