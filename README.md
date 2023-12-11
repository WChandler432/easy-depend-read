# easy-depend-read
A lightweight CLI tool written in Node.js. Takes in a project's package.json file path and returns a list of deprecated / out of date dependencies. It will also recommend dependency updates where applicable. 

# Startup and usage instructions

- Clone repository
- cd into repo folder
- Run command: 'node main.js -f {file path to package.json file}'
- Observe command line output

## Roadmap / Wishlist items

- Have script run as alias / make script easier to run
- ~~Get most up to date package info (npms has out of date info on some packages)~~  (Replaced npms with npm registry api - 12/10/23)
- Deprecation warnings

## Work History

- 12/10/2023: Created repository, added basic version checking and upgrade warnings for major version changes. Originally grabbed package info from [https://npms.io/], but since that api was discovered to be deprecated switched to calling the npm registry directly. 
