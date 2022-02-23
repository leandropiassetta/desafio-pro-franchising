const clientModel = require('../models/clientModels');
const { createToken } = require('../api/auth/jwt');


const clientLogin = async(email, password) => {

  if(!email || !password) {
    return { message: 'Os campos precisam ser preenchido' }
  }

  const verifyUser = await clientModel.getClientByEmail(email);

  if(!verifyUser) {
    return { message: 'Usuário ou senha inválida' }
  }

  else if(verifyUser.password === password) {
    const { _id: id } = verifyUser;

    const token = createToken({
      id, email: verifyUser.email, role: verifyUser.role
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