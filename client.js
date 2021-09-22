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

module.exports = {
  connect
}