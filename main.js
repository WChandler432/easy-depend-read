const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var argv = require('minimist')(process.argv.slice(2));
var chalk = require('chalk');
const fs = require('node:fs');


const processInput = () => {
    const input = argv;
    console.log(chalk.green('Received the following file path: '), input.f);
    let fileData;
    try {
        fileData = fs.readFileSync(input.f, 'utf8');
        console.log(fileData);
      } catch (err) {
        console.log(chalk.red('Failed to read file.'));
        console.error(err);
    }
    const fileDataAsJSON = JSON.parse(fileData);
    console.log(fileDataAsJSON.dependencies);
}

processInput();