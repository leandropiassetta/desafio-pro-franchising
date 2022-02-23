const clientModels = require('../models/clientModels');

const getAllClients = async() => {
  const clients = await clientModels.getAllClients();

  return clients;
} 

const createClient = async(data) => {
  const registerClient = await clientModels.createClient(data);

  return registerClient;
}

module.exports = {
  createClient,
  getAllClients
}