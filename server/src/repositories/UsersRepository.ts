/* eslint-disable camelcase */
import { Transaction } from "knex";
import connection from "../database/connection";

interface User {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

class UsersRepository {
  async create(user: User, trx?: Transaction) {
    const db = trx || connection;

    const insertedUsersIds = await db("users").insert(user);

    return insertedUsersIds[0];
  }
}

export default new UsersRepository();
