import * as Joi from 'joi';

export const coreEnvValidationSchema = Joi.object({
  MONGODB_URI: Joi.string().required(),
  MONGODB_USER: Joi.string().required(),
  MONGODB_PASS: Joi.string().required(),
  MONGODB_DBNAME: Joi.string().required(),
  PORT: Joi.number().default(3000),
});
