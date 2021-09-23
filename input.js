
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

const getMoveForKey = (key) => {
  let moveIndex = 0;
  if (key === 'w' || key === 'W') {
    moveIndex = 0;
  }

  if (key === 'a' || key === 'A') {
    moveIndex = 1;
  }

  if (key === 's' || key === 'S') {
    moveIndex = 2;
  }

  if (key === 'd' || key === 'D') {
    moveIndex = 3;
  }
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

