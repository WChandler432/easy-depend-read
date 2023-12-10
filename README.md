# easy-depend-read
A CLI tool written in Node.js. Takes in a project's package.json file path and returns a list of deprecated / out of date dependencies. It will also recommend dependency updates where applicable. 

# Startup and usage instructions

- Clone repository
- cd into repo folder
- Run command: 'node main.js -f {file path to package.json file}'
- Observe command line output

## Work History

- 12/10/2023: Created repository, added basic version checking and upgrade warnings for major version changes. Currently grabbing package info from [https://npms.io/]
