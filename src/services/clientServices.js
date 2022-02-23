const clientModels = require('../models/clientModels');
const { ObjectId } = require('mongodb');

const getAllClients = async() => {
  const clients = await clientModels.getAllClients();

  return clients;
}

const getClientById = async (id) => {
  if (id.length < 24) {
    return { message: "Cliente inválido!!" }
  }

  const client = await clientModels.getClientById(id);

  if (!client) {
    return { message: "Cliente não encontrado!!" }
  }

  return client;
};

const createClient = async(data) => {

  const emailClient = await clientModels.getClientByEmail(data.email);

  if(emailClient) {
    return { message: 'Email já existe!!' }
  }

  const registerClient = await clientModels.createClient(data);

  return registerClient;
}

const editClient = async ({ id, name, email, password, phoneNumber, role }) => {
  const client = await clientModels.editClient({ id, name, email, password, phoneNumber, role });

  return client;
};

const deleteClient = async (id) => {
  const clientUserById = await clientModels.getClientById(id);
  
  if(!clientUserById) {
    return { error: 'Cliente não encotrado!!' };
  }

  if (clientUserById) {
    await clientModels.deleteClient(id);
  
    return { message: 'Cliente deletado com sucesso!!' };
  }
};

module.exports = {
  createClient,
  getClientById,
  getAllClients,
  editClient,
  deleteClient
}