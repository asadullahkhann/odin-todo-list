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
                todoEditBtnDiv.appendChild(todoEditBtn);
                todoDiv.appendChild(todoHeadingDiv);
                todoDiv.appendChild(todoContentDiv);
                todoDiv.appendChild(todoEditBtnDiv);
                todosContainer.appendChild(todoDiv);
        };

    }
    return {renderTodos};
})();

addTodoBtn.addEventListener('click', () => {
    dialog.showModal();
});

dialog.addEventListener('close', () => {
    const dialogInputsValues = [];
    const priority = selectEl.value;
    for(const dialogInput of dialogInputs) {
        dialogInputsValues.push(dialogInput.value);
    }
    const [task, desc, dueDate] = dialogInputsValues;
    projects[projects.currentProject].push(new Todo(task, desc, priority, dueDate));
    domManipulator.renderTodos();

});