const TaskRepository = require('./../repositories/TaskRepository');

module.exports = (option) => {
    const tasks = new TaskRepository();
    if(option.all)
    return tasks.get()
    return tasks.get().filter(task=>task.status=='pending')

}