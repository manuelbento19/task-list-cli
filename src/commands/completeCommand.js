const completeService = require("../services/completeService");

module.exports = (cli) => {
    cli
        .command("complete")
        .argument('<id>')
        .description("Marks a task as done")
        .action((id)=>{
            console.log(completeService(id))
        })
};
