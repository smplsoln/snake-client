const net = require('net');

// establish a connection with the game server
const connect = function() {
  const server = {
    host: 'localhost', // IP of server
    port: '50541'  // PORT on which server is listening
  };
  const conn = net.createConnection(server);

  // Interprete incoming data as UTF8 text
  conn.setEncoding('utf8');

  return conn;
};

console.log("Connecting ...");
let conn = connect();

console.log(`Connection obj returneed by node: ${conn}`);
console.log({conn});

conn.on("connect", () => {
  // code that does something when the connection is first established
  console.log("*** Connected to Snek server! ***");
  console.log(`Connection: ${conn}`);
  console.log({conn});
});

// listener when data is receeived from server
conn.on('data', (data) => {
  console.log(`Server ~~~: ${data}`);
});

conn.on('close', () => {
  console.log("*** Kicked out by Server! ***");
  console.log("~~~ Alright! Alright! Alright! ~~~");
  console.log(`Connection: ${conn}`);
  console.log({conn});
});

conn.on('timeout', () =>{
  console.log("*** OOPS! Timeout! ***");
  console.log("~~~ Alright! Alright! Alright! ~~~");
  console.log(`Connection: ${conn}`);
  console.log({conn});
});