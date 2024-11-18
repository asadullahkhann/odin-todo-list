class Todo {
  constructor(todo, desc, priority, dueDate) {
    this.todo = todo;
    this.description = desc;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

function getProjects() {
  if (!localStorage.getItem("projects")) {
    return { Today: [], currentProject: "Today" };
  }
  return JSON.parse(localStorage.getItem("projects"));
}

function setProjects(obj) {
  localStorage.setItem("projects", JSON.stringify(obj));
}

function addProject(projectName) {
  const projects = getProjects();
  projects[projectName] = [];
  setProjects(projects);
}

function changeCurrentProject(projectName) {
  const projects = getProjects();
  projects.currentProject = projectName;
  setProjects(projects);
}

function addTodo(values) {
  const projects = getProjects();
  projects[projects.currentProject].push(new Todo(...values));
  setProjects(projects);
}

function deleteTodo(project, index) {
  const projects = getProjects();
  projects[project].splice(index, 1);
  setProjects(projects);
}

function editTodo(todoIndex, values) {
  const projects = getProjects();
  const todo = projects[projects.currentProject][todoIndex];
  let i = 0;
  for (const prop in todo) {
    todo[prop] = values[i];
    i += 1;
  }
  setProjects(projects);
}

export {
  getProjects,
  addProject,
  changeCurrentProject,
  addTodo,
  deleteTodo,
  editTodo,
};
