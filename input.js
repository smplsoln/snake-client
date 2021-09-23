
const moves = ["Move: up", 'Move: left', 'Move: down', 'Move: right'];

let connection;

const getRandomMove = () => {
  const moveIndex = randomIndex(moves.length);
  console.log('moveIndex: ' + moveIndex);
  const move = moves[moveIndex];
  // console.log('move ' + moveIndex + ' : ' + move);
  return move;
};

const randomIndex = (bound) => {
  return Math.floor(Math.floor(Math.random() * 1000) % bound);
};

let keyToMoveIndexMap = {
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
  '\u001B\u005B\u0043': 3
};

const getMoveForKey = (key) => {
  let moveIndex = 0;
  moveIndex = keyToMoveIndexMap[key];
  let move = moves[moveIndex];
  return move;
};

let moveCount = 0;
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

  let move = getMoveForKey(key);
  console.log(`move ${moveCount} : ${move}`);
  moveCount++;
  connection.write(move);
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

module.exports = { setupInput, getRandomMove };

