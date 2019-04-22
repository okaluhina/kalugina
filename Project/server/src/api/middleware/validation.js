const Joi = require('joi');

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
     const result = Joi.validate(req.body, schema);
     if (result.error) {
       return res.status(400).send(result.error.message);
     }
     next();
    }
  },
  schemas: {
    registerClientSchema: Joi.object().keys({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string(),
      //add complexity test
      password: Joi.string().required()
    }),
    registerCompanySchema: Joi.object().keys({
      title: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }),
    authLocalSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }),
  } 
};