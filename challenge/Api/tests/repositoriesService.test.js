const sinon = require('sinon');
const { expect } = require('chai');

const request = require('../utils/request');
const repositoriesService = require('../services/repositoriesService');

const mockListRepositories = [
  {
    name: "test1",
    owner: {
      avatar_url: "https://teste.com",
    },
    created_at: "2013-11-25T13:04:51Z",
    language: "C",
    description: "test description 1", 
  },
  {
    name: "test2",
    owner: {
      avatar_url: "https://teste.com",
    },
    created_at: "2013-12-25T13:04:51Z",
    language: "C#",
    description: "test description 2", 
  },
  {
    name: "test3",
    owner: {
      avatar_url: "https://teste.com",
    },
    created_at: "2014-10-25T13:04:51Z",
    language: "C#",
    description: "test description 3", 
  },
  {
    name: "test4",
    owner: {
      avatar_url: "https://teste.com",
    },
    created_at: "2014-11-25T13:04:51Z",
    language: "JavaScript",
    description: "test description 4",
  },
  {
    name: "test5",
    owner: {
      avatar_url: "https://teste.com",
    },
    created_at: "2015-10-25T13:04:51Z",
    language: "C#",
    description: "test description 5",
  },
  {
    name: "test6",
    owner: {
      avatar_url: "https://teste.com",
    },
    created_at: "2015-11-25T13:04:51Z",
    language: "C",
    description: "test description 6",
  },
  {
    name: "test7",
    owner: {
      avatar_url: "https://teste.com",
    },
    created_at: "2015-12-25T13:04:51Z",
    language: "C#",
    description: "test description 7",
  },
  {
    name: "test8",
    owner: {
      avatar_url: "https://teste.com",
    },
    created_at: "2016-10-25T13:04:51Z",
    language: "C#",
    description: "test description 8",
  },
  {
    name: "test9",
    owner: {
      avatar_url: "https://teste.com",
    },
    created_at: "2016-11-25T13:04:51Z",
    language: "C#",
    description: "test description 9",
  },
];

const expectedListRepositories = [
  {
    name: "test2",
    imageUrl: "https://teste.com",
    description: "test description 2",
  },
  {
    name: "test3",
    imageUrl: "https://teste.com",
    description: "test description 3",
  },
  {
    name: "test5",
    imageUrl: "https://teste.com",
    description: "test description 5",
  },
  {
    name: "test7",
    imageUrl: "https://teste.com",
    description: "test description 7",
  },
  {
    name: "test8",
    imageUrl: "https://teste.com",
    description: "test description 8",
  },
];

describe('Service repository tests', () => {
  before(() => {
    sinon.stub(request, 'requestData').resolves(mockListRepositories);
  });

  after(() => {
    request.requestData.restore();
  });

  describe('listFiveOldestRepositories tests', () => {
    it('should return a vector equal to expectedListRepositories', async () => {
      const response = await repositoriesService.listFiveOldestRepositories();
      expect(response).to.deep.equal(expectedListRepositories);
    });
  });
});
