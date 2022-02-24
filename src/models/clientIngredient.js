// const connect = require('./connection');

// const createIngredients = async({ name, unitOfMeasurement, price  }) => {
//   const db = await connect();

//   const ingredients = await db.collection('ingredients').insertOne({
//     name, unitOfMeasurement, price
//   });

//   return { 
//     _id: ingredients.insertedId, name, unitOfMeasurement, price 
//   }
// }

// const createProducts = async({ name, image, price, ingredients }) => {
//   const db = await connect();

//   const product = await db.collection('products').insertOne({
//     name, image, price, ingredients
//   });

//   return { 
//     _id: product.insertedId, name, image, price, ingredients
//   }
// }

// module.exports = {
//   createIngredients,
//   createProducts
// }