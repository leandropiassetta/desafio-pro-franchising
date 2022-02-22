const clientModels = require('../models/clientModels');

const createClient = async(data) => {
  const registerClient = await clientModels.createClient(data);

  return registerClient;
}

module.exports = {
  createClient
}