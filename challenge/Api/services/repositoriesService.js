const request = require('../utils/request');

const listFiveOldestRepositories = async () => {
  const data = await request.requestData('/repos?&sort=created&direction=asc');
  const repositories = data
    .filter(({ language }) => language === 'C#')
    .map(({ name, description, owner: { avatar_url: imageUrl } }) => (
      { name, description, imageUrl }
    ))
    .slice(0, 5);
  
  return repositories;
};

module.exports = {
  listFiveOldestRepositories,
};
