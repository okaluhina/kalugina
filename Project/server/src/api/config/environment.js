const dotenv = require("dotenv");
const joi = require("joi");

const schema = joi
  .object({
    NODE_ENV: joi
      .string()
      .valid("development", "test", "production")
      .default("development"),
    APP_PORT: joi.number().default(3001),
    JWT_ENCRYPTION: joi.string(),
    JWT_EXPIRATION: joi.number().default(10000),
    MONGODB_HOST: joi.string().default("mongodb://localhost/cleaning-api"),
    MAIL_PASSWORD: joi.string(),
    MAIL_ADDRESS: joi.string().email(),
    MAIL_SERVICE: joi.string(),
    GOOGLE_CLIENT_ID: joi.string(),
    GOOGLE_CLIENT_SECRET: joi.string()
  })
  .unknown()
  .required();

dotenv.config();

const { error, value: envVars } = joi.validate(process.env, schema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  app: {
    environment: envVars.NODE_ENV,
    port: envVars.APP_PORT
  },
  jwt: {
    secret: envVars.JWT_ENCRYPTION,
    expiration: envVars.JWT_EXPIRATION
  },
  mongodb: {
    host: envVars.MONGODB_HOST
  },
  mail: {
    password: envVars.MAIL_PASSWORD,
    address: envVars.MAIL_ADDRESS,
    service: envVars.MAIL_SERVICE
  },
  google: {
    id: envVars.GOOGLE_CLIENT_ID,
    secret: envVars.GOOGLE_CLIENT_SECRET
  }
};