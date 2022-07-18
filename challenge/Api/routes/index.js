const { Router } = require('express');
const repositoriesRoutes = require('./repositoriesRoutes');

const routes = Router();

routes.use('/repositories', repositoriesRoutes);

module.exports = routes;