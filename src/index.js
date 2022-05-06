const cli = require('./cli/cli');
const fs = require('fs');
const path = require('path');

var directory = path.join(__dirname,'./commands/')

fs
    .readdirSync(directory)
    .filter(file=>file.match(/.js\b/))
    .map(file=> require(`./commands/${file}`)(cli))
    
cli.parse(process.argv)