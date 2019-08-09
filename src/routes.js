const express = require('express');
const DevController = require('./controllers/DevController');
const unlikeController = require('./controllers/unlikeController');
const LikeController = require('./controllers/LikeController');

const routes = express.Router();


routes.post('/devs', (req, res) => DevController.store(req, res));
routes.post('/devs/:devId/likes', (req, res) => LikeController.store(req, res));
routes.post('/devs/:devId/unlikes', (req, res) => unlikeController.store(req, res));
routes.get('/devs', (req, res) => DevController.index(req, res));

module.exports = routes;