import db from "../src/database/connection";

class PrepareDB {
  async beforeEach() {
    await db.migrate.rollback();
    await db.migrate.latest();
  }

  async afterAll() {
    await db.destroy();
  }
}

export default new PrepareDB();
