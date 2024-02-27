// Accepts standard input from the terminal prints to standard output
console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('data', (answer) => {
    process.stdout.write(`Your name is: ${answer}`);
    process.exit(0);
  });
} else {
  process.stdin.on('data', (answer) => {
    process.stdout.write(`Your name is: ${answer}`);
    process.exit();
  });
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}
