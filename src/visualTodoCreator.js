const todosContainer = document.querySelector('.todos-container');

function createVisualTodo(todoObj, todoIndex) {
  const todoDiv = document.createElement('div');
  const dropdownDiv = document.createElement('div');
  const toggleDropdownBtn = document.createElement('button');
  const todoEditBtn = document.createElement('button');
  const todoDeleteBtn = document.createElement('button');
  todoDiv.classList.add('todo');
  todoDiv.setAttribute('data-index', todoIndex);
  toggleDropdownBtn.classList.add('toggle-dropdown');
  for (const prop in todoObj) {
    const rowDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    const para = document.createElement('p');
    rowDiv.classList.add('row');
    h3.textContent = `${prop[0].toUpperCase()}${prop.slice(1)}`;
    if (prop === 'dueDate') {
      h3.textContent = 'Due Date';
    }
    para.textContent = todoObj[prop].replaceAll('-', '/');
    rowDiv.appendChild(h3);
    rowDiv.appendChild(para);
    todoDiv.appendChild(rowDiv);
  }
  toggleDropdownBtn.textContent = '⋮';
  todoEditBtn.textContent = 'Edit';
  todoDeleteBtn.textContent = 'Delete';
  dropdownDiv.appendChild(todoEditBtn);
  dropdownDiv.appendChild(todoDeleteBtn);
  dropdownDiv.classList.add('dropdown', 'hide');
  todoDiv.appendChild(toggleDropdownBtn);
  todoDiv.appendChild(dropdownDiv);
  todosContainer.appendChild(todoDiv);
  todosContainer.classList.remove('empty');
}

export { createVisualTodo };
