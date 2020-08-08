import knex from "knex";
import path from "path";

const dbName =
  process.env.NODE_ENV === "test" ? "test.sqlite" : "database.sqlite";

const defaults: knex.Config = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "..", "database", dbName),
  },
  migrations: {
    directory: path.resolve(__dirname, "..", "database", "migrations"),
  },
  useNullAsDefault: true,
};

const config = {
  test: {
    ...defaults,
  } as knex.Config,

  development: {
    ...defaults,
  } as knex.Config,
};

export = config;
