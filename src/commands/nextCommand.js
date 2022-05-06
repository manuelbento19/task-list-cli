module.exports = (cli) => {
    cli
        .command("next")
        .description("Shows the next task of each priority")
        .action((title)=>{
            console.log("Shows the next task of each priority")
        })
};
