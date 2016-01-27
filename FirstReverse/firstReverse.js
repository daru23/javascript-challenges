/* Created by Daniela Ruiz daru015@gmail.com */

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

/**
 *@method FirstReverse
 *@param str String
 */
function firstReverse(str) {
  return str.split("").reverse().join("");
}

//prompt
rl.setPrompt('PROMPT> ');
rl.prompt();

rl.on('line', function (line) {
  console.log('Reverse: ' + firstReverse(line))
});

rl.prompt();

rl.on('close', function () {
  console.log('Bye Bye!');
  process.exit(0);
});