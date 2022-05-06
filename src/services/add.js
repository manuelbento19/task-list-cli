const { Task } = require('../models/task');
const TaskRepository = require('./../repositories/TaskRepository');

module.exports = (description,priority='low') => {

    const taskRepository = new TaskRepository()

    const task = new Task();
    task.description = description;
    task.priority = priority;
    const tasks = taskRepository.get();
    tasks.push(task)
    taskRepository.save(tasks)    
}