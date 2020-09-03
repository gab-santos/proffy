// import fs from "fs";
// import db from "../src/database/connection";
// import { imageTestUploadedPath } from "./data";

// export async function beforeEach(): Promise<void> {
//   fs.existsSync(imageTestUploadedPath) && fs.unlinkSync(imageTestUploadedPath);
//   await db.migrate.rollback();
//   await db.migrate.latest();
// }

// export async function afterAll(): Promise<void> {
//   await db.destroy();
// }
