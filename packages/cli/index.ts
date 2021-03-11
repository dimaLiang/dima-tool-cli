const minimist = require('minimist');

function main() {
  console.log(minimist(process.argv.slice(2)));
}

main();
