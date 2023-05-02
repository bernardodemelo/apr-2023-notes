// Requiring the npm package.
const chalk = require('chalk');

// Using the Chalk Package
console.log(chalk.blue('Hello world!'));

console.log(chalk.blue('Hello')+ 'World' + chalk.red('!'));

console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));