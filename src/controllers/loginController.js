const loginService = require('../services/loginService');

const loginClient = async(req, res) => {
  const { email, password } = req.body;

  const client = await loginService.clientLogin(email, password);

  if(client.message) {
    return res.status(401).json({ message: client.message });
  }

  return res.status(200).json({ message: 'Usuário logado com sucesso', token: client });
}

module.exports = { loginClient }