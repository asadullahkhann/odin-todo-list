import "./styles.css";
import dotsImg from './images/3-dots.svg';
import { 
  getProjects,
  addProject,
  changeCurrentProject,
  addTodo,
  deleteTodo,
  editTodo,
} from "./todos";
import { toggleDropdown } from './dropdownFunctions';

const addProjectBtn = document.querySelector(".add-project>button");
const addProjectInput = document.querySelector(".add-project>input");
const todayProjectBtn = document.querySelector(".projects>button");
const projectBtnsContainer = document.querySelector(".projects");
const todosContainer = document.querySelector(".todos-container");
const dialog = document.querySelector("dialog");
const dialogInputs = document.querySelectorAll("dialog input");
const selectEl = document.querySelector("select");
const addTodoBtn = document.querySelector(".add-todo-btn");
const sidebarDropdown = document.querySelector("body>.dropdown");
const showSidebarBtn = document.querySelector(".page-header button");
const closeSidebarBtn = document.querySelector(".close-menu");

const dynamicInfo = {editTodoIndex: null};

const eventHandlers = (function () {
  const handleAddTodoBtnClick = () => {
    domManipulator.showDialogForAddingTodo();
    dialog.addEventListener("close", eventHandlers.handleCloseForAdding);
  };
  const handleEditBtnClick = (e) => {
    dynamicInfo.editTodoIndex = +e
    .target
      .parentNode
        .parentNode
          .parentNode
            .getAttribute('data-index');
    domManipulator.showEditDialog();
    dialog.addEventListener("close", eventHandlers.handleCloseForEditing);
  };
  const handleCloseForAdding = () => {
    const values = [...dialogInputs]
      .map((dialogInput) => dialogInput.value)
        .slice(0,2);
    values.push(selectEl.value);
    values.push(dialogInputs[dialogInputs.length - 1].value);
    addTodo(values);
    domManipulator.renderTodos();
    dialog.removeEventListener("close", eventHandlers.handleCloseForAdding);
  };
  const handleCloseForEditing = () => {
    const todoIndex = dynamicInfo.editTodoIndex;
    const values = [...dialogInputs].map((dialogInput) => dialogInput.value).slice(0, 2);
    values.push(selectEl.value);
    values.push(dialogInputs[dialogInputs.length - 1].value);
    editTodo(todoIndex, values);
    domManipulator.renderTodos();
    dialog.removeEventListener("close", eventHandlers.handleCloseForEditing);
  };
  const handleAddProjectBtnClick = () => {
    if (addProjectInput.value.length > 3) {
      addProject(addProjectInput.value);
      domManipulator.createProjectBtn();
    }
  };
  const handleProjectBtnClick = (e) => {
    changeCurrentProject(e.target.textContent.slice(2));
    domManipulator.changeColorsOfSelectedProjectBtn();
    domManipulator.renderTodos();
  };
  const handleDeletelBtnClick = (e) => {
    const projects = getProjects();
    const todoIndex = +e
      .target
        .parentNode
          .parentNode
            .parentNode
              .getAttribute("data-index");
    deleteTodo(projects.currentProject, todoIndex);
    domManipulator.renderTodos();
  };
  const handleShowSidebarBtnClick = () => {
    toggleDropdown(sidebarDropdown);
    domManipulator.toggleSidebarControlBtn();
  };
  const handleCloseSidebarBtnClick = () => {
    toggleDropdown(sidebarDropdown);
    domManipulator.toggleSidebarControlBtn();
  };
  const handleToggleDropdownBtnClick = (e) => {
    const thisDropdown = e
      .currentTarget
        .parentNode
          .nextSibling;
    document.querySelectorAll('.edit-btn>.dropdown').forEach(dropdown => {
      if (!(dropdown === thisDropdown)) {
        dropdown.setAttribute('class', 'dropdown hide');
      }
    });
    toggleDropdown(thisDropdown);
  }
  return {
    handleCloseForAdding,
    handleAddTodoBtnClick,
    handleEditBtnClick,
    handleCloseForEditing,
    handleAddProjectBtnClick,
    handleProjectBtnClick,
    handleDeletelBtnClick,
    handleShowSidebarBtnClick,
    handleCloseSidebarBtnClick,
    handleToggleDropdownBtnClick
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
    let dataIndex = 0;
    const projects = getProjects();
    for (const todo of projects[projects.currentProject]) {
      const todoDiv = document.createElement("div");
      const todoEditBtnDiv = document.createElement("div");
      const toggleDropdownDiv = document.createElement('div');
      const dropdownDiv = document.createElement('div');
      const toggleDropdownBtn = document.createElement('button');
      const toggleDropdownBtnImg = document.createElement('img');
      const todoEditBtn = document.createElement("button");
      const todoDeleteBtn = document.createElement("button");
      todoDiv.classList.add("todo");
      todoDiv.setAttribute("data-index", dataIndex);
      dataIndex++;
      todoEditBtnDiv.classList.add("edit-btn");
      for (const prop in todo) {
        const columnDiv = document.createElement("div");
        const h3 = document.createElement("h3");
        const para = document.createElement("p");
        columnDiv.classList.add("col");
        h3.textContent = `${prop[0].toUpperCase()}${prop.slice(1)}`;
        if (prop === "dueDate") {
          h3.textContent = `${prop[0].toUpperCase()}${prop.slice(1, 3)}-${prop.slice(3)}`;
        }
        para.textContent = todo[prop];
        columnDiv.appendChild(h3);
        columnDiv.appendChild(para);
        todoDiv.appendChild(columnDiv);
      }
      toggleDropdownBtn.addEventListener('click', eventHandlers.handleToggleDropdownBtnClick);
      todoEditBtn.textContent = "Edit";
      todoEditBtn.addEventListener("click", eventHandlers.handleEditBtnClick);
      todoDeleteBtn.textContent = "Delete";
      todoDeleteBtn.addEventListener(
        "click",
        eventHandlers.handleDeletelBtnClick,
      );
      toggleDropdownBtnImg.setAttribute('src', dotsImg);
      toggleDropdownBtn.appendChild(toggleDropdownBtnImg);
      toggleDropdownDiv.appendChild(toggleDropdownBtn);
      dropdownDiv.appendChild(todoEditBtn);
      dropdownDiv.appendChild(todoDeleteBtn);
      toggleDropdownDiv.classList.add('toggle-dropdown');
      dropdownDiv.classList.add('dropdown', 'hide');
      todoEditBtnDiv.appendChild(toggleDropdownDiv);
      todoEditBtnDiv.appendChild(dropdownDiv);
      todoDiv.appendChild(todoEditBtnDiv);
      todosContainer.appendChild(todoDiv);
    }
  };
  const showDialogForAddingTodo = () => {
    dialogInputs.forEach((dialogInput) => {
      dialogInput.value = "";
    });
    dialog.querySelector("option").selected = true;
    dialog.showModal();
  };
  const showEditDialog = () => {
    const projects = getProjects();
    const editTodo =
      projects[projects.currentProject][dynamicInfo.editTodoIndex];
    let i = 0;
    for (const prop in editTodo) {
      if (prop === "priority") {
        dialog.querySelectorAll("option").forEach((option) => {
          if (option.value === editTodo[prop]) option.selected = true;
        });
        continue;
      }
      dialogInputs[i].value = editTodo[prop];
      i++;
    }
    dialog.showModal();
  };
  const createProjectBtn = () => {
    const newProjectBtn = document.createElement("button");
    newProjectBtn.textContent = `# ${addProjectInput.value}`;
    newProjectBtn.addEventListener(
      "click",
      eventHandlers.handleProjectBtnClick,
    );
    addProjectInput.value = "";
    projectBtnsContainer.appendChild(newProjectBtn);
  };
  const restoreProjectsBtns = () => {
    const projects = getProjects();
    for (const prop in projects) {
      if (
        prop === "Today" ||
        prop === "currentProject" ||
        prop === "dynamicInfo"
      )
        continue;
      const projectBtn = document.createElement("button");
      projectBtn.textContent = `# ${prop}`;
      projectBtn.addEventListener("click", eventHandlers.handleProjectBtnClick);
      projectBtnsContainer.appendChild(projectBtn);
    }
    changeColorsOfSelectedProjectBtn();
  };
  const changeColorsOfSelectedProjectBtn = () => {
    const projects = getProjects();
    const projectBtns = document.querySelectorAll(".projects>button");
    projectBtns.forEach((projectBtn) => {
      if (projectBtn.textContent.slice(2) === projects.currentProject) {
        projectBtn.setAttribute("class", "selected-project-btn");
      } else {
        projectBtn.setAttribute("class", "");
      }
    });
  };
  const toggleSidebarControlBtn = () => {
    showSidebarBtn.classList.toggle("hide");
    closeSidebarBtn.classList.toggle("hide");
  };
  return {
    renderTodos,
    showEditDialog,
    createProjectBtn,
    restoreProjectsBtns,
    changeColorsOfSelectedProjectBtn,
    toggleSidebarControlBtn,
    showDialogForAddingTodo,
  };
})();

addTodoBtn.addEventListener("click", eventHandlers.handleAddTodoBtnClick);

addProjectBtn.addEventListener("click", eventHandlers.handleAddProjectBtnClick);

todayProjectBtn.addEventListener("click", eventHandlers.handleProjectBtnClick);

window.addEventListener("load", () => {
  domManipulator.restoreProjectsBtns();
  domManipulator.renderTodos();
});

showSidebarBtn.addEventListener(
  "click",
  eventHandlers.handleShowSidebarBtnClick,
);
closeSidebarBtn.addEventListener(
  "click",
  eventHandlers.handleCloseSidebarBtnClick,
);
