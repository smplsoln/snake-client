let connection;

let { KEY_TO_SERVER_MSG_MAP, CTRL_C } = require('./constants');

const getMsgForKey = (key) => {
  if (!Object.keys(KEY_TO_SERVER_MSG_MAP).includes(key)) {
    return KEY_TO_SERVER_MSG_MAP[['w']]; // default Move up
  }
  let msg = KEY_TO_SERVER_MSG_MAP[key];
  return msg;
};

let msgCount = 0;
const handleUserInput = (key) => {
  console.log(`Key pressed: ${key}`);

  // your code here
  // handle CTRL+C
  if (key === CTRL_C) {
    console.log('CTRL + C pressed, ending connection!');
    // conn.destroy();
    process.exit();
  }
  if (connection.destroyed) {
    console.log('Connection destroyed: Not sending Move commands to server');
    process.exit();
    return;
  }

  let msg = getMsgForKey(key);
  console.log(`msg ${msgCount} : ${msg}`);
  msgCount++;
  connection.write(msg);
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
