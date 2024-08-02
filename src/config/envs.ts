/* istanbul ignore file */
import 'dotenv/config';
import * as joi from 'joi';

/**
 * The environment variables type.
 */
type EnvType = {
  PORT: number;
  DATABASE_URL: string;
};

/**
 * The environment variables schema.
 */
const envSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);

/**
 * The environment variables validation result.
 */
const { error, value } = envSchema.validate(process.env);

/**
 * Throws an error if the environment variables are invalid.
 */
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

/**
 * The environment variables.
 */
const envsVars: EnvType = value;

/**
 * The environment variables exports.
 */
export const envs = {
  PORT: envsVars.PORT,
  DATABASE_URL: envsVars.DATABASE_URL,
};
