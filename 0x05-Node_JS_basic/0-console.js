function displayMessage(string) {
  process.stdout.write(string + '\n', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = displayMessage;
