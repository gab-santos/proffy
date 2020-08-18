import db from "../src/database/connection";

export async function beforeEach(): Promise<void> {
  await db.migrate.rollback();
  await db.migrate.latest();
}

export async function afterAll(): Promise<void> {
  await db.destroy();
}
