const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,"../database/todo.json")

class TaskRepository{
    get(){
        return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)): []
    }
    save(tasks){
        try{
            fs.writeFileSync(filePath,JSON.stringify(tasks,null,1));
        }
        catch(err){
            return err.message
        }
    }
}
module.exports = TaskRepository