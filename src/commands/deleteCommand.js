const deleteService = require("../services/deleteService");

module.exports = (cli) => {
    cli
        .command("delete")
        .argument('<id>')
        .description("Deletes a task")
        .action((task_id)=>{
           console.log(deleteService(task_id))
        })
};
