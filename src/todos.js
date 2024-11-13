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
    return { Today: [], currentProject: "Today", dynamicInfo: {} };
  }
  return JSON.parse(localStorage.getItem("projects"));
}

function setProjects(obj) {
  localStorage.setItem("projects", JSON.stringify(obj));
}

export { Todo, getProjects, setProjects };
