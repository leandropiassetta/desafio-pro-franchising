const express = require('express').Router();
const { createClient } = require('../controllers/clientControllers');

const router = express;

router.post('/', createClient);

module.exports = router