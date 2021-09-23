const net = require('net');

const { IP, PORT } = require("./constants");

// establish a connection with the game server
const connect = function() {
  const server = {
    host: IP, // IP of server
    port: PORT  // PORT on which server is listening
  };
  const conn = net.createConnection(server);

  // Interprete incoming data as UTF8 text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = {
  connect
};