const connect = require('./connection');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

const getAllClients = async () => {
  const db = await connect();
  const clients = await db.collection('clients').find().toArray();

  return clients;
};

const getClientById = async (id) => {
  const db = await connect();
  const client = await db.collection('clients').findOne({ _id: ObjectId(id) });
  return client;
};

const createClient = async({ name, email, password, phoneNumber, role = 'client' }) => {
  const db = await connect();

  const hash = bcrypt.hashSync(password, 12);

  const newClient = await db.collection('clients').insertOne({
    name, email, password: hash, phoneNumber, role
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

const deleteClient = async (id) => {
  const db = await connect();
  await db.collection('clients').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  getClientByEmail,
  editClient,
  deleteClient,
};