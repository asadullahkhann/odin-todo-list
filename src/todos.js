class Todo {
    constructor(task, desc, priority, dueDate) {
        this.task = task;
        this.desc = desc;
        this.priority = priority;
        this.dueDate = dueDate;
    };
};

const projects = {
    currentProject: 'Today',
};

export { projects, Todo };