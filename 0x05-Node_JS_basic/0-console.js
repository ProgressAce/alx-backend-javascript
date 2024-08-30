function displayMessage(string) {
  process.stdout.write(string, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = displayMessage;
