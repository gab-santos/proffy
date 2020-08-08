/* eslint-disable camelcase */
import { Transaction } from "knex";
import connection from "../database/connection";

interface Class {
  subject: string;
  cost: number;
}

class ClassesRepository {
  async create(class_user: Class, user_id: number, trx?: Transaction) {
    const db = trx || connection;

    const insertedClassesIds = await db("classes").insert({
      ...class_user,
      user_id,
    });

    return insertedClassesIds[0];
  }
}

export default new ClassesRepository();
