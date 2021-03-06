const express = require('express');

const AuthController = require('../controllers/AuthController')
const DevsController = require('../controllers/DevsController')

const routes = express.Router();

routes.post('/signIn', AuthController.store);

routes.post('/signUp', DevsController.store);

module.exports = app => app.use('/auth', routes);