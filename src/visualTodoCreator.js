import dotsImg from "./images/3-dots.svg";

const todosContainer = document.querySelector(".todos-container");

function createVisualTodo(todoObj, todoIndex) {
  const todoDiv = document.createElement("div");
  const todoEditBtnDiv = document.createElement("div");
  const toggleDropdownDiv = document.createElement("div");
  const dropdownDiv = document.createElement("div");
  const toggleDropdownBtn = document.createElement("button");
  const toggleDropdownBtnImg = document.createElement("img");
  const todoEditBtn = document.createElement("button");
  const todoDeleteBtn = document.createElement("button");
  todoDiv.classList.add("todo");
  todoDiv.setAttribute("data-index", todoIndex);
  todoEditBtnDiv.classList.add("edit-btn");
  for (const prop in todoObj) {
    const columnDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    const para = document.createElement("p");
    columnDiv.classList.add("col");
    h3.textContent = `${prop[0].toUpperCase()}${prop.slice(1)}`;
    if (prop === "dueDate") {
      h3.textContent = `${prop[0].toUpperCase()}${prop.slice(1, 3)}-${prop.slice(3)}`;
    }
    para.textContent = todoObj[prop];
    columnDiv.appendChild(h3);
    columnDiv.appendChild(para);
    todoDiv.appendChild(columnDiv);
  }
  todoEditBtn.textContent = "Edit";
  todoDeleteBtn.textContent = "Delete";
  toggleDropdownBtnImg.setAttribute("src", dotsImg);
  toggleDropdownBtn.appendChild(toggleDropdownBtnImg);
  toggleDropdownDiv.appendChild(toggleDropdownBtn);
  dropdownDiv.appendChild(todoEditBtn);
  dropdownDiv.appendChild(todoDeleteBtn);
  toggleDropdownDiv.classList.add("toggle-dropdown");
  dropdownDiv.classList.add("dropdown", "hide");
  todoEditBtnDiv.appendChild(toggleDropdownDiv);
  todoEditBtnDiv.appendChild(dropdownDiv);
  todoDiv.appendChild(todoEditBtnDiv);
  todosContainer.appendChild(todoDiv);
}

export { createVisualTodo };
