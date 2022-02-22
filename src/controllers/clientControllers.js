const serviceClient = require('../services/clientServices');

const createClient = async(req, res) => {
  const dataClient = req.body;

  const newClient = await serviceClient.createClient(dataClient);

  return res.status(200).json({ message: 'Cliente criado com sucesso!!', newClient });
}

module.exports = {
  createClient
}
