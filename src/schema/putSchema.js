const Joi = require('joi');

const putSchema = Joi.object({
  name: Joi.string().not().empty(),
  email: Joi.string().email().not().empty(),
  password: Joi.string().min(6).not().empty(),
  phoneNumber: Joi.number().min(14).not().empty(),
});

module.exports = {
  putSchema,
};