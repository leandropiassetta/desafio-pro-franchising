const connect = require('./connection');
const { ObjectId } = require('mongodb');

const getAllClients = async () => {
  const db = await connect();
  const clients = await db.collection('clients').find().toArray();

  return clients;
};

// const getById = async (id) => {
//   const db = await connect();
//   const recipe = await db.collection('recipes').findOne({ _id: ObjectId(id) });
//   return recipe;
// };

const createClient = async({ name, email, password, phoneNumber, role = 'client' }) => {
  const db = await connect();
  const newClient = await db.collection('clients').insertOne({
    name, email, password, phoneNumber, role
  });

  return { 
    _id: newClient.insertedId, name, email, password, phoneNumber, role
  }

}

const getClientByEmail = async (email) => {
  const db = await connect();
  const client = db.collection('clients').findOne({ email });

  return client;
};


const editClient = async ({ id, name, email, password, phoneNumber, role }) => {
  const db = await connect();
  await db.collection('clients').updateOne({ 
    _id: ObjectId(id) }, { $set: { name, email, password, phoneNumber, role } });

  return { _id: id, name, email, password, phoneNumber, role };
};

// const deleteRecipe = async (id) => {
//   const db = await connect();
//   await db.collection('recipes').deleteOne({ _id: ObjectId(id) });
// };

// const addImage = async (id, image) => {
//   const db = await connect();
//   await db.collection('recipes').updateOne({
//     _id: ObjectId(id) }, { $set: { image } });
// };

module.exports = {
  createClient,
  getAllClients,
  // getById,
  getClientByEmail,
  editClient,
  // deleteClient,
  // addImage,
};