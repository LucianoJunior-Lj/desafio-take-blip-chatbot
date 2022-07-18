const { Router } = require('express');
const repositoriesController = require('../controllers/respositoriesController');

const repositoriesRoutes = Router();

repositoriesRoutes.route('/five-oldest')
  .get(repositoriesController.listFiveOldestRepositories);

module.exports = repositoriesRoutes;