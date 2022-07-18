const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com/orgs/takenet',
});

const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}

module.exports = { requestData };