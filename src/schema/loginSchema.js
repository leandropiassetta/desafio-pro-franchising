const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().not().empty().required(),
  password: Joi.string().min(6).not().empty().required(),
});

module.exports = {
  loginSchema,
};