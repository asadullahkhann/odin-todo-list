import './styles.css';
import { Todo, projects } from './todos';

const addProjectBtn = document.querySelector('add-project>button');
const addProjectInput = document.querySelector('add-project>input');
const projectBtns = document.querySelectorAll('projects>button');
const todoContainer = document.querySelector('.todo-container');
const dialog = document.querySelector('dialog');
const dialogInputs = document.querySelectorAll('dialog input');
const selectEl = document.querySelector('select');
const addTodoBtn = document.querySelector('.add-todo-btn');

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
    console.log(projects[projects.currentProject]);

});