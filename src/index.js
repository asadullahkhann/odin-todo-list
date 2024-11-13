import "./styles.css";
import { Todo, getProjects, setProjects } from "./todos";

const addProjectBtn = document.querySelector(".add-project>button");
const addProjectInput = document.querySelector(".add-project>input");
const todayProjectBtn = document.querySelector(".projects>button");
const projectBtnsContainer = document.querySelector(".projects");
const todosContainer = document.querySelector(".todos-container");
const dialog = document.querySelector("dialog");
const dialogInputs = document.querySelectorAll("dialog input");
const selectEl = document.querySelector("select");
const addTodoBtn = document.querySelector(".add-todo-btn");
const sidebarDialog = document.querySelector(".sidebar");
const showSidebarBtn = document.querySelector(".page-header button");
const closeSidebarBtn = document.querySelector(".close-menu");

const eventHandlers = (function () {
  const handleAddTodoBtnClick = () => {
    domManipulator.showDialogForAddingTodo();
    dialog.addEventListener("close", eventHandlers.handleCloseForAdding);
  };
  const handleEditBtnClick = (e) => {
    const projects = getProjects();
    projects.dynamicInfo.editTodoIndex =
      +e.target.parentNode.parentNode.getAttribute("data-index");
    setProjects(projects);
    domManipulator.showEditDialog();
    dialog.addEventListener("close", eventHandlers.handleCloseForEditing);
  };
  const handleCloseForAdding = () => {
    const dialogInputsValues = [];
    const priority = selectEl.value;
    for (const dialogInput of dialogInputs) {
      dialogInputsValues.push(dialogInput.value);
    }
    const [task, desc, dueDate] = dialogInputsValues;
    const projects = getProjects();
    projects[projects.currentProject].push(
      new Todo(task, desc, priority, dueDate),
    );
    setProjects(projects);
    domManipulator.renderTodos();
    dialog.removeEventListener("close", eventHandlers.handleCloseForAdding);
  };
  const handleCloseForEditing = () => {
    const projects = getProjects();
    const editTodo =
      projects[projects.currentProject][projects.dynamicInfo.editTodoIndex];
    let i = 0;
    for (const prop in editTodo) {
      if (prop === "priority") {
        editTodo[prop] = selectEl.value;
        continue;
      }
      editTodo[prop] = dialogInputs[i].value;
      i++;
    }
    setProjects(projects);
    domManipulator.renderTodos();
    dialog.removeEventListener("close", eventHandlers.handleCloseForEditing);
  };
  const handleAddProjectBtnClick = () => {
    if (addProjectInput.value.length > 3) {
      const projects = getProjects();
      projects[addProjectInput.value] = [];
      setProjects(projects);
      domManipulator.createProjectBtn();
    }
  };
  const handleProjectBtnClick = (e) => {
    const projects = getProjects();
    projects.currentProject = e.target.textContent.slice(2);
    setProjects(projects);
    domManipulator.changeColorsOfSelectedProjectBtn();
    domManipulator.renderTodos();
  };
  const handleDeletelBtnClick = (e) => {
    const projects = getProjects();
    const deleteTodoIndex =
      +e.target.parentNode.parentNode.getAttribute("data-index");
    projects[projects.currentProject].splice(deleteTodoIndex, 1);
    setProjects(projects);
    domManipulator.renderTodos();
  };
  const handleShowSidebarBtnClick = () => {
    sidebarDialog.show();
    domManipulator.toggleSidebarControlBtn();
  };
  const handleCloseSidebarBtnClick = () => {
    sidebarDialog.close();
    domManipulator.toggleSidebarControlBtn();
  };
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
      todoEditBtn.textContent = "Edit";
      todoEditBtn.addEventListener("click", eventHandlers.handleEditBtnClick);
      todoDeleteBtn.textContent = "Delete";
      todoDeleteBtn.addEventListener(
        "click",
        eventHandlers.handleDeletelBtnClick,
      );
      todoEditBtnDiv.appendChild(todoEditBtn);
      todoEditBtnDiv.appendChild(todoDeleteBtn);
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
      projects[projects.currentProject][projects.dynamicInfo.editTodoIndex];
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
