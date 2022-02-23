const { verifyToken } = require('../api/auth/jwt');

const clientLogin = async(authorization) => {

  if(!authorization) {
    return { message: 'Sem permissão de entrada' }
  }

  try {
      const client = verifyToken(authorization);
      return client.email;
  }catch(error) {
      return { message: 'Sem permissão de entrada' };
  }
  
}

module.exports = {
  clientLogin
}