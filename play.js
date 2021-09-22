const net = require('net');

const { connect } = require('./client');

// establish a connection with the game server
// const connect = client.connect;

console.log({ connect });

console.log("Connecting ...");
let conn = connect();

console.log(`Connection obj returneed by node: ${conn}`);
console.log({ conn });

conn.on("connect", () => {
  // code that does something when the connection is first established
  console.log("*** Connected to Snek server! ***");
  console.log(`Connection: ${conn}`);
  console.log({ conn });

  conn.write("Name: PAR");
});

// listener when data is receeived from server
conn.on('data', (data) => {
  console.log(`Server ~~~: ${data}`);
});

conn.on('close', () => {
  console.log("*** Kicked out by Server! ***");
  console.log("~~~ Alright! Alright! Alright! ~~~");
  console.log(`Connection: ${conn}`);
  console.log({ conn });
});

conn.on('timeout', () => {
  console.log("*** OOPS! Timeout! ***");
  console.log("~~~ Alright! Alright! Alright! ~~~");
  console.log(`Connection: ${conn}`);
  console.log({ conn });
});

// Moves
const moves = ["Move: up", 'Move: left', 'Move: down', 'Move: right'];
const moveInterval = 50;
let moveCount = 0;

// 2nd callback on 'connect' to send moves
conn.on("connect", () => {
  console.log("*** Connected to Snek server! ***");
  setInterval(() => {
    const move = getRandomMove();
    console.log(`move ${moveCount} : ${move}`);
    moveCount++;
    conn.write(move);
  }, moveInterval);
});

function getRandomMove() {
  const moveIndex = randomIndex(moves.length);
  console.log('moveIndex: ' + moveIndex);
  const move = moves[moveIndex];
  // console.log('move ' + moveIndex + ' : ' + move);
  return move;
}

function randomIndex(bound) {
  return Math.floor(Math.floor(Math.random() * 1000) % bound);
}
