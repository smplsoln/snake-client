// const net = require('net');

const { connect } = require('./client');
const { setupInput, getRandomMove } = require("./input");

// establish a connection with the game server
// const connect = client.connect;

console.log({ connect });
console.log("Connecting ...");
let conn = connect();

console.log(`Connection obj returned by node: ${conn}`);
console.log({ conn });

conn.on("connect", () => {
  // code that does something when the connection is first established
  console.log("*** Connected to Snek server! ***");
  console.log(`Connection: ${conn}`);
  // console.log({ conn });

  conn.write("Name: PAR");
});

// listener when data is received from server
conn.on('data', (data) => {
  console.log(`Server ~~~: ${data}`);
});

conn.on('close', () => {
  // console.log("*** Kicked out by Server! ***");
  console.log("~~~ Alright! Alright! Alright! ~~~");
  console.log(`Connection closed: ${conn}`);
  // console.log({ conn });
  conn.destroy();
});

conn.on('timeout', () => {
  console.log("*** OOPS! Timeout! ***");
  console.log("~~~ Alright! Alright! Alright! ~~~");
  console.log(`Connection: ${conn}`);
  // console.log({ conn });
});

// Setup Standard Input ( and keyboard listener)
const stdin = setupInput(conn);

// Moves
// let moveInterval = 50;
// let moveCount = 0;
// let refreshIntervalId;

// 2nd callback on 'connect' to send moves
// conn.on("connect", () => {
//   console.log("*** Connected to Snek server! ***");
//   refreshIntervalId = setInterval(() => {
//     if (conn.destroyed) {
//       console.log('Connection destroyed: Not sending Move commands to server');
//       console.log(`Connection destroyed, Ending client data sender: ${refreshIntervalId}`);
//       clearInterval(refreshIntervalId);
//       process.exit();
//       return;
//     }
//     const move = getRandomMove();
//     console.log(`move ${moveCount} : ${move}`);
//     moveCount++;
//     conn.write(move);
//   }, moveInterval);
// });
