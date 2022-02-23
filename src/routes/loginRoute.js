const router = require('express').Router();
const { validateSchema } = require('../middlewares/validateSchema');
const { loginSchema } = require('../schema/loginSchema');
const { loginClient } = require('../controllers/loginController');

router.post('/', validateSchema(loginSchema), loginClient);

module.exports = router;