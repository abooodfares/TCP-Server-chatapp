const net = require("net");

const server = net.createServer();

// an array of client sockets
const clients = [];
const messages = [];

server.on("connection", (socket) => {
  console.log("A new connection to the server!");
  messages.forEach((message) => {
    //newline
    socket.write(message + "\n");
  });

  socket.on("data", (data) => {
    messages.push(data);
    clients.map((s) => {
      s.write(data);
    });
  });

  clients.push(socket);
});



server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
