const listService = require('../services/list');

module.exports = (cli) => {
    cli
        .command("list")
        .option("-a,--all")
        .description("Shows pending tasks.","The -a (or --all) option shows all tasks")
        .action((args,option)=>{
            console.log(listService(args))
        })
};
