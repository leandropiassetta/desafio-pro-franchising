const validateSchema = (schema) => (req, res, next) => {
  let error = false;

  const isValid = schema.validate(req.body);

  if (isValid.error) {
    const detailsMessage = isValid.error.details[0].message;
    error = detailsMessage;
  }

  if (!error) {
    return next();
  }

  return res.status(400).json({ message: error });
};

module.exports = {
  validateSchema,
};