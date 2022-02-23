
const loginService = require('../services/loginService');

const loginClient = async(req, res) => {
  const { authorization } = req.headers;
  const { email } = req.body;

  const client = await loginService.clientLogin(authorization, email);

  if(client.message) {
    return res.status(401).json({ message: client.message });
  }

  return res.status(200).json({ message: 'Usuário logado com sucesso', client });
}

module.exports = { loginClient }