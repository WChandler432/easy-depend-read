const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var argv = require('minimist')(process.argv.slice(2));
var chalk = require('chalk');
const fs = require('node:fs');


const processInput = () => {
    const input = argv;
    console.log(chalk.green('Received the following file path: '), input.f);
    console.log('');
    let fileData;
    try {
        fileData = fs.readFileSync(input.f, 'utf8');
      } catch (err) {
        console.log(chalk.red('Failed to read file.'));
        console.error(err);
    }
    const fileDataAsJSON = JSON.parse(fileData);
    return fileDataAsJSON.dependencies;
}

const getPackageInfo = async(packageName) => {
    const res = await fetch(`https://registry.npmjs.com/-/v1/search?text=${packageName}&size=20`);
    const data = await res.json();
    return data.objects[0];
}


const main = async() => {
    const depends = processInput();
    for (const [name, version] of Object.entries(depends)) {
        const info = await getPackageInfo(name);
        const packageVersion = info.package.version;
        const versionFromFile = version.substring(1);
        if (parseFloat(packageVersion) > parseFloat(versionFromFile)) {
            console.log(chalk.yellow('Package is out of date: '), info.package.name);
            console.log(chalk.blue('Version from registry: '), packageVersion);
            console.log(chalk.cyan('Version from provided file: '), versionFromFile);
            if (parseFloat(packageVersion.split(".")[0]) - parseFloat(versionFromFile.split(".")[0]) >= 1.0) {
                console.log(chalk.redBright('❌  Major version difference detected.'));
                console.log(chalk.redBright('If you upgrade, make sure to check for breaking changes.'));
            }
            console.log('');
        }
    }
}

main();