const minimist = require('minimist');
const chalk = require('chalk');

main();

function main() {
  const argv = minimist(process.argv.slice(2));
  const pluginName: pluginName = argv._[0];
  const plugin = getPlugin(pluginName);
  plugin({ pluginName });
}

function getPlugin(pluginName: pluginName): Function {
  if (!pluginName) {
    process.exit(1);
  }
  try {
    return require(`@dima-toolbox/${pluginName}`);
  } catch (err) {
    console.log(chalk.red(`插件不存在，请执行命令【 yarn [global] add @dima-toolbox/${pluginName} 】安装插件`));
    process.exit(1);
  }
}
