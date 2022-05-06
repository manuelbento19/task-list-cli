const crypto = require('crypto');
class Task{
    id;
    description;
    created;
    status;
    priority;
    
    constructor(){
        this.id = crypto.randomBytes(3).toString('hex'),
        this.status ="pending";
        this.created = new Date();
    }
}


module.exports = {Task}