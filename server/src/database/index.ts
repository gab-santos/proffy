import Knex from "knex";

import knexConfig from "../config/knexfile";

type Env = "test" | "development";

const db = Knex(knexConfig[process.env.NODE_ENV as Env]);

export class Database {
  private db = db;

  connection(): Knex {
    return this.db;
  }

  async prepareDatabase(): Promise<void> {
    await this.db.migrate.rollback();
    await this.db.migrate.latest();
  }

  async disconnect(): Promise<void> {
    await this.db.destroy();
  }
}
