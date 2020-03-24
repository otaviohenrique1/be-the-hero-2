const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const routes = express.Router();

routes.post('/sessions', ProfileController.index); // Rota de login

routes.get('/ongs', OngController.index); // Rota de listar ongs
routes.post('/ongs', OngController.create); // Rota de criar ongs

routes.get('/profile', ProfileController.index); // Rota de listar casos cadastrados pelas ongs

routes.get('/incidents', IncidentController.index); // Rota de listar casos
routes.post('/incidents', IncidentController.create); // Rota de criar casos
routes.delete('/incidents/:id', IncidentController.delete); // Rota de apagar casos

module.exports = routes;