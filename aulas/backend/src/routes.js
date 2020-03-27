const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), SessionController.create); // Rota de login

routes.get('/ongs', OngController.index); // Rota de listar ongs

routes.post('/ongs', OngController.create); // Rota de criar ongs

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index); // Rota de listar casos cadastrados pelas ongs

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index); // Rota de listar casos

routes.post('/incidents', IncidentController.create); // Rota de criar casos

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete); // Rota de apagar casos

// routes.post('/sessions', SessionController.create); // Rota de login
// routes.get('/ongs', OngController.index); // Rota de listar ongs
// routes.post('/ongs', OngController.create); // Rota de criar ongs
// routes.get('/profile', ProfileController.index); // Rota de listar casos cadastrados pelas ongs
// routes.get('/incidents', IncidentController.index); // Rota de listar casos
// routes.post('/incidents', IncidentController.create); // Rota de criar casos
// routes.delete('/incidents/:id', IncidentController.delete); // Rota de apagar casos

module.exports = routes;