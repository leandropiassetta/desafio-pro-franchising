const connect = require('./connection');
const { createToken } = require('../api/auth/jwt');
const { ObjectId } = require('mongodb');

// const getAll = async () => {
//   const db = await connect();
//   const recipes = await db.collection('recipes').find().toArray();

//   return recipes;
// };

// const getById = async (id) => {
//   const db = await connect();
//   const recipe = await db.collection('recipes').findOne({ _id: ObjectId(id) });
//   return recipe;
// };

const createClient = async({ name, email, password, phoneNumber, role }) => {
  const db = await connect();
  const newClient = await db.collection('clients').insertOne({
    name, email, password, phoneNumber, role
  });

  const tokenId = createToken({ id: newClient.insertedId, email  });

  return { 
    _id: newClient.insertedId, name, email, password, phoneNumber, role, token: tokenId
  }

}


// const editRecipe = async ({ id, ingredients, preparation, name }, payload) => {
//   const db = await connect();
//   await db.collection('recipes').updateOne({ 
//     _id: ObjectId(id) }, { $set: { ingredients, preparation, name, userId: payload.id } });

//   return { _id: id, name, ingredients, preparation, userId: payload.id };
// };

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
  // getAll,
  // getById,
  // editClient,
  // deleteClient,
  // addImage,
};