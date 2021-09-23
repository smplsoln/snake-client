const handleUserInput = (key) => {
  // your code here
  // handle CTRL+C
  if (key === '\u0003') {
    console.log('CTRL + C pressed, ending connection!');
    // conn.destroy();
    process.exit();
  }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput }