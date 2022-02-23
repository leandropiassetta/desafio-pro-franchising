const serviceClient = require('../services/clientServices');

const getAllClients = async(_req, res) => {
  const clients = await serviceClient.getAllClients()

  return res.status(200).json(clients)
}

const createClient = async(req, res) => {
  const dataClient = req.body;

  const newClient = await serviceClient.createClient(dataClient);

  return res.status(201).json({ message: 'Cliente criado com sucesso!!', newClient });
}

module.exports = {
  createClient,
  getAllClients
}
