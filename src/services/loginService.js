const clientModel = require('../models/clientModels');
const { createToken } = require('../api/auth/jwt');
const bcrypt = require('bcrypt');

const clientLogin = async(email, password) => {

  if(!email || !password) {
    return { message: 'Os campos precisam ser preenchido' }
  }

  const verifyClient = await clientModel.getClientByEmail(email);
  const { password: hash } = verifyClient;
  const cryptPassword = await bcrypt.compare(password, hash);

  if(!verifyClient || !cryptPassword) {
    return { message: 'Usuário ou senha inválida' }
  }

  else if(cryptPassword) {
    const { _id: id } = verifyClient;

    const token = createToken({
      id, email: verifyClient.email, role: verifyClient.role
    });

    return token
  }

  else {
    return { message: 'Usuário ou senha inválida' }
  }
}

module.exports = {
  clientLogin
}