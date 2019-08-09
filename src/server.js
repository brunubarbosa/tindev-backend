const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');


const server = express();


mongoose.connect('mongodb://127.0.0.1/tinDev', { useNewUrlParser: true });
server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(3333);
