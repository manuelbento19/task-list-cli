const { Task } = require('../models/task');
const TaskRepository = require('./../repositories/TaskRepository');

module.exports = (id) => {
    
    const taskRepository = new TaskRepository();
    var tasks = taskRepository.get();
    var task = tasks.find((item)=>item.id==id)
    
    
    if(task)
    {   
        task.status='done';
        if(task.status!='done')
        task.completedAt = new Date()
        
        taskRepository.save(tasks)    
        return task

    }
    return "This task doesn't exists"
}