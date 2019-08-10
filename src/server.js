const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, { origins: '*:*'});

const connectedUsers = {}
io.on('connection', socket => {
  // connectedUsers[ID_USUARIO] = socket.id
  console.log('connected')
  const { user } = socket.handshake.query
  connectedUsers[user] = socket.id
})


mongoose.connect('mongodb://127.0.0.1/tinDev', { useNewUrlParser: true });

app.use((req, res, next) => {
  req.io = io;
  req.io;
  req.connectedUsers = connectedUsers;
  console.log('useee')

  return next();
})

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333);
