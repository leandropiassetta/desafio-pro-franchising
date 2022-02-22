require('dotenv/config');
const { MongoClient } = require('mongodb');

const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/coffeeShop`;

const DB_NAME = process.env.DB_NAME;

const connection = () => MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => conn.db(DB_NAME));

module.exports = connection;