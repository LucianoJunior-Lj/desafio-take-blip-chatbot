const repositoriesService = require('../services/repositoriesService');

const listFiveOldestRepositories = async (_req, res) => {
  const repositories = await repositoriesService.listFiveOldestRepositories();
  return res.status(200).json({ repositories });
};

module.exports = {
  listFiveOldestRepositories
};
