import knex from "knex";
import config from "../config/knexfile";

type Env = "test" | "development";

const env = process.env.NODE_ENV as Env;

const db = knex(config[env]);

export default db;
