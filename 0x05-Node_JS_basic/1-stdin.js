// a program that welcomes you and asks for your name.

console.log("Welcome to Holberton School, what is your name?");

if (!process.stdin.isTTY) {
    // the program received an argument through piped data
    process.stdin.on('data', (name) => {
        process.stdout.write(`Your name is: ${name}`);
        process.stdout.write("This important software is now closing");
        process.exit(0);
    });
} else {
    // the program waits for a name or argument from the terminal to be entered
    process.stdin.on('data', (name) => {
        process.stdout.write(`Your name is: ${name}`);
        process.exit(0);
    });
}