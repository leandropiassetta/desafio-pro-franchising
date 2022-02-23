const express = require('express').Router();
const { createClient, getAllClients } = require('../controllers/clientControllers');
const { validateSchema } = require('../middlewares/validateSchema');
const { clientSchema } = require('../schema/clientSchema');

const router = express;

router.post('/', validateSchema(clientSchema), createClient);
router.get('/', getAllClients);


module.exports = router