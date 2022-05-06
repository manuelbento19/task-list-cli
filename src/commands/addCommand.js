const addService = require('../services/add');

module.exports = (cli) => {
    cli
        .command("add")
        .argument("<description>")
        .option("-p <priority>,--priority <priority>")
        .description("Adds a pending task. Can set the task's priority to low, normal or high with the -p (or --priority) option")
        .action((description,args)=>{
            addService(description,args.p)  
        })
};
