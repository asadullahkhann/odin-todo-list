class Todo {
    constructor(task, desc, priority, dueDate) {
        this.task = task;
        this.description = desc;
        this.priority = priority;
        this.dueDate = dueDate;
    };
};

const projects = {
    'Today': [],                                                                                                                                    
    currentProject: 'Today',
};

export { projects, Todo };