const chalk = require('chalk');

export function error(msg: string) {
  console.log(chalk.red(msg));
}
