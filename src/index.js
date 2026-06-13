import './styles.css';
import {
  getProjects,
  addProject,
  changeCurrentProject,
  addTodo,
  deleteTodo,
  editTodo,
} from './todos';
import { toggleDropdown } from './dropdownFunctions';
import { createVisualTodo } from './visualTodoCreator';

const addProjectBtn = document.querySelector('.add-project>button');
const addProjectInput = document.querySelector('.add-project>input');
const todayProjectBtn = document.querySelector('.projects>button');
const projectBtnsContainer = document.querySelector('.projects');
const todosContainer = document.querySelector('.todos-container');
const dialog = document.querySelector('dialog');
const dialogInputs = document.querySelectorAll('dialog input');
const descTextArea = document.querySelector('textarea');
const selectEl = document.querySelector('select');
const addTodoBtn = document.querySelector('.add-todo-btn');
const sidebar = document.querySelector('.sidebar');
const toggleSidebarBtn = document.querySelector('header button');
const toggleSidebarBtnImgs = document.querySelectorAll('header>button>img');
const bodyEl = document.querySelector('body');

// to be able to access this info from multiple places
const dynamicInfo = { editTodoIndex: null };

// to be able to remove event listeners
const eventHandlers = (function () {
  const getDialogInputValues = () => {
    const values = [];
    values.push(dialogInputs[0].value);
    values.push(descTextArea.value);
    values.push(selectEl.value);
    values.push(dialogInputs[1].value);
    return values;
  };

  const handleCloseForAdding = () => {
    const values = getDialogInputValues();
    addTodo(values);
    domManipulator.renderTodos();
    domManipulator.addEventHandlersToTodoBtns();
    dialog.removeEventListener('close', eventHandlers.handleCloseForAdding);
    toggleSidebar(sidebar);
  };

  const handleCloseForEditing = () => {
    const todoIndex = dynamicInfo.editTodoIndex;
    const values = getDialogInputValues();
    editTodo(todoIndex, values);
    domManipulator.renderTodos();
    domManipulator.addEventHandlersToTodoBtns();
    dialog.removeEventListener('close', eventHandlers.handleCloseForEditing);
  };

  const handleProjectBtnClick = (e) => {
    const projectName = e.target.textContent.slice(2);
    changeCurrentProject(projectName);
    domManipulator.changeColorsOfSelectedProjectBtn();
    domManipulator.renderTodos();
    domManipulator.addEventHandlersToTodoBtns();
  };

  const toggleSidebar = () => {
    toggleSidebarBtnImgs.forEach(toggleSidebarBtnImg => {
      toggleSidebarBtnImg.classList.toggle('hide');
    });
    toggleDropdown(sidebar);
  };

  const toggleEditDropdown = (e) => {
    const thisDropdown = e.target.nextSibling;
    document.querySelectorAll('.dropdown').forEach((dropdown) => {
      if (dropdown === thisDropdown) return; 
      dropdown.setAttribute('class', 'dropdown hide');
    });
    toggleDropdown(thisDropdown);
  };

  const getIndexOfThisTodo = (e) => {
    const index =
      e.target.parentNode.parentNode.getAttribute('data-index');
    return Number(index);
  };

  const handleEditBtnClick = (e) => {
    dynamicInfo.editTodoIndex = getIndexOfThisTodo(e);
    domManipulator.showDialogForEditingTodo();
    dialog.addEventListener('close', eventHandlers.handleCloseForEditing);
  };

  const handleDeleteBtnClick = (e) => {
    const projects = getProjects();
    const indexOfThisTodo = getIndexOfThisTodo(e);
    deleteTodo(projects.currentProject, indexOfThisTodo);
    domManipulator.renderTodos();
    domManipulator.addEventHandlersToTodoBtns();
  };

  return {
    handleCloseForAdding,
    handleCloseForEditing,
    handleProjectBtnClick,
    toggleSidebar,
    toggleEditDropdown,
    handleEditBtnClick,
    handleDeleteBtnClick,
  };
})();

const domManipulator = (function () {
  const clearTodosContainer = () => {
    while (todosContainer.firstChild) {
      todosContainer.removeChild(todosContainer.firstChild);
    }
  };
  const renderTodos = () => {
    clearTodosContainer();
    const projects = getProjects();
    const currentProject = projects[projects.currentProject];
    currentProject.forEach((todo) => {
      const todoIndex = currentProject.indexOf(todo);
      createVisualTodo(todo, todoIndex);
    });
    if (!todosContainer.firstChild) {
      const textNode = document.createTextNode('No todos yet. Add your first task to get started.');
      todosContainer.appendChild(textNode);
      todosContainer.classList.add('empty');
    }
  };

  const addEventHandlersToTodoBtns = () => {
    const toggleDropdownBtns = document.querySelectorAll(
      '.toggle-dropdown',
    );
    const editTodoBtns = document.querySelectorAll(
      '.dropdown>button:nth-child(1)',
    );
    const deleteTodoBtns = document.querySelectorAll(
      '.dropdown>button:nth-child(2)',
    );
    toggleDropdownBtns.forEach((toggleEditDropdownBtn) => {
      toggleEditDropdownBtn.addEventListener(
        'click',
        eventHandlers.toggleEditDropdown,
      );
    });
    editTodoBtns.forEach((editTodoBtn) => {
      editTodoBtn.addEventListener('click', eventHandlers.handleEditBtnClick);
    });
    deleteTodoBtns.forEach((deleteTodoBtn) => {
      deleteTodoBtn.addEventListener(
        'click',
        eventHandlers.handleDeleteBtnClick,
      );
    });
  };

  const showDialogForAddingTodo = () => {
    dialogInputs.forEach((dialogInput) => {
      dialogInput.value = '';
    });
    dialog.querySelector('option').selected = true;
    dialog.showModal();
  };

  const showDialogForEditingTodo = () => {
    const projects = getProjects();
    const currentProject = projects[projects.currentProject];
    const editTodo = currentProject[dynamicInfo.editTodoIndex];
    dialogInputs[0].value = editTodo['todo'];
    descTextArea.value = editTodo['description'];
    dialog.querySelectorAll('option').forEach(option => {
      if (option.value === editTodo['priority']) option.selected = true;
    });
    dialogInputs[1].value = editTodo['dueDate'];
    dialog.showModal();
  };

  const createProjectBtn = () => {
    const newProjectBtn = document.createElement('button');
    newProjectBtn.textContent = `# ${addProjectInput.value}`;
    newProjectBtn.addEventListener(
      'click',
      eventHandlers.handleProjectBtnClick,
    );
    addProjectInput.value = '';
    projectBtnsContainer.appendChild(newProjectBtn);
  };

  const restoreProjectsBtns = () => {
    const projects = getProjects();
    const propsToSkip = ['Today', 'currentProject', 'dynamicInfo'];
    for (const prop in projects) {
      if (propsToSkip.includes(prop)) continue;
      const projectBtn = document.createElement('button');
      projectBtn.textContent = `# ${prop}`;
      projectBtn.addEventListener('click', eventHandlers.handleProjectBtnClick);
      projectBtnsContainer.appendChild(projectBtn);
    }
    changeColorsOfSelectedProjectBtn();
  };

  const changeColorsOfSelectedProjectBtn = () => {
    const projects = getProjects();
    const projectBtns = document.querySelectorAll('.projects>button');
    projectBtns.forEach((projectBtn) => {
      if (projectBtn.textContent.slice(2) === projects.currentProject) {
        projectBtn.setAttribute('class', 'selected-project-btn');
      } else {
        projectBtn.setAttribute('class', '');
      }
    });
  };

  return {
    renderTodos,
    addEventHandlersToTodoBtns,
    showDialogForEditingTodo,
    createProjectBtn,
    restoreProjectsBtns,
    changeColorsOfSelectedProjectBtn,
    showDialogForAddingTodo,
  };
})();

addTodoBtn.addEventListener('click', () => {
  domManipulator.showDialogForAddingTodo();
  dialog.addEventListener('close', eventHandlers.handleCloseForAdding);
});

addProjectBtn.addEventListener('click', () => {
  if (addProjectInput.value.length > 3) {
    const projectName = addProjectInput.value;
    addProject(projectName);
    domManipulator.createProjectBtn();
  }
});

todayProjectBtn.addEventListener('click', eventHandlers.handleProjectBtnClick);

window.addEventListener('load', () => {
  domManipulator.restoreProjectsBtns();
  domManipulator.renderTodos();
  domManipulator.addEventHandlersToTodoBtns();
  bodyEl.classList.remove('preload');
});

toggleSidebarBtn.addEventListener('click', eventHandlers.toggleSidebar);
