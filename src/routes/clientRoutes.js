const express = require('express').Router();

const { 
  createClient, 
  getAllClients, 
  editClient, 
  getClientById,
  deleteClient
} = require('../controllers/clientControllers');

const { validateSchema } = require('../middlewares/validateSchema');
const { clientSchema } = require('../schema/clientSchema');
const { putSchema } = require('../schema/putSchema');


const router = express;

router.get('/', getAllClients);
router.get('/:id', getClientById);
router.post('/', validateSchema(clientSchema), createClient);
router.put('/:id', validateSchema(putSchema), editClient);
router.delete('/:id', deleteClient);


module.exports = router