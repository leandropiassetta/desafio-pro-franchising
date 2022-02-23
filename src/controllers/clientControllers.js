const serviceClient = require('../services/clientServices');

const getAllClients = async(_req, res) => {
  const clients = await serviceClient.getAllClients();

  return res.status(200).json(clients);
}

const getClientById = async(req, res) => {
  const { id } = req.params;

  const client = await serviceClient.getClientById(id);

  return res.status(200).json(client);
}

const createClient = async(req, res) => {
  const dataClient = req.body;

  const newClient = await serviceClient.createClient(dataClient);

  return res.status(201).json({ message: 'Cliente criado com sucesso!!', newClient });
}

const editClient = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, phoneNumber, role } = req.body;

  const client = await serviceClient.editClient({ id, name, email, password, phoneNumber, role });

  return res.status(202).json({ message: 'Cliente editado com sucesso!!', client });
};

const deleteClient = async (req, res) => {
  const { id } = req.params;
  const client = await serviceClient.deleteClient(id);

  if(client.error) {
    return res.status(404).json(client);
  }

  if(client) {
    return res.status(202).json(client);
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  editClient,
  deleteClient,
}
