class Todo {
    constructor(todo, desc, priority, dueDate) {
        this.todo = todo;
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