const TaskRepository = require('../repositories/TaskRepository');

module.exports = (task_id) => {
    
    const taskRepository = new TaskRepository();
    var tasks = taskRepository.get().filter((item)=>item.id!=task_id)

    taskRepository.save(tasks)
    return "This task was deleted successfully"
}