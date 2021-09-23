let connection;

const serverMessages = ['Move: up', 'Move: left', 'Move: down', 'Move: right', 'Say: Hi Snakes', 'Say: Bye Snakes'];

let keyTomsgIndexMap = {
  'w': 0,
  'a': 1,
  's': 2,
  'd': 3,
  'W': 0,
  'A': 1,
  'S': 2,
  'D': 3,
  '\u001B\u005B\u0041': 0,
  '\u001B\u005B\u0044': 1,
  '\u001B\u005B\u0042': 2,
  '\u001B\u005B\u0043': 3,
  'h': 4,
  'H': 4,
  'b': 5,
  'B': 5
};

const getRandomMsg = () => {
  const msgIndex = randomIndex(serverMessages.length);
  console.log('msgIndex: ' + msgIndex);
  const msg = serverMessages[msgIndex];
  // console.log('msg ' + msgIndex + ' : ' + msg);
  return msg;
};

const randomIndex = (bound) => {
  return Math.floor(Math.floor(Math.random() * 1000) % bound);
};

const getMsgForKey = (key) => {
  let msgIndex = 0;
  if (Object.keys(keyTomsgIndexMap).includes(key)) {
    msgIndex = keyTomsgIndexMap[key];
  }
  let msg = serverMessages[msgIndex];
  return msg;
};

let msgCount = 0;
const handleUserInput = (key) => {
  console.log(`Key pressed: ${key}`);
  // your code here
  // handle CTRL+C
  if (key === '\u0003') {
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

