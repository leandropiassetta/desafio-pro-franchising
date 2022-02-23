const clientModels = require('../models/clientModels');

const getAllClients = async() => {
  const clients = await clientModels.getAllClients();

  return clients;
} 

const createClient = async(data) => {
  const registerClient = await clientModels.createClient(data);

  return registerClient;
}

const editClient = async ({ id, name, email, password, phoneNumber, role }) => {
  const client = await clientModels.editClient({ id, name, email, password, phoneNumber, role });

  return client;
};

module.exports = {
  createClient,
  getAllClients,
  editClient
}