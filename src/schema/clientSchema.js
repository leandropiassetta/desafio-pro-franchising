const Joi = require('joi');

const clientSchema = Joi.object({
  name: Joi.string().not().empty().required(),
  email: Joi.string().email().not().empty().required(),
  password: Joi.string().min(6).not().empty().required(),
  phoneNumber: Joi.number().min(14).not().empty().required(),
});

module.exports = {
  clientSchema,
};