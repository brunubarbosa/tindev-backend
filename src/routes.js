const express = require('express');
const DevController = require('./controllers/DevController');
const UnlikeController = require('./controllers/UnlikeController');
const LikeController = require('./controllers/LikeController');

const routes = express.Router();


routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/unlikes', UnlikeController.store);
routes.get('/devs', DevController.index);

module.exports = routes;