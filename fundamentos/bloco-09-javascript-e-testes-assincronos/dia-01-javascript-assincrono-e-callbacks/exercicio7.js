const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('texto transformado em maiusculo');

module.exports = { uppercase };