const express = require('express')
const http = require('http')
const path = require('path')
const { Server } = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = new Server(server)



// socket io
io.on('connection', (socket) => {
  // #$# wrote initially to understand []
  // console.log("Connection detected");
  // console.log(`Socket ID: ${socket.id}`);

  // #$# [ab2] added a new event listener to listen for the 'user-message' event
  socket.on('user-message', (msg) => {
    console.log(`Message received: ${msg}`);
    io.emit('broadcast-message', msg); // #$# broadcast the message to all connected clients
  });
});

app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
  return res.sendFile("/public/index.html")
})
server.listen(9000, () => console.log(`Server Started at PORT: 9000 http://localhost:9000`));



