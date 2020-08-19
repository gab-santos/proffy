import { Transaction } from "knex";
import connection from "../database/connection";

interface User {
  name: string;
  last_name: string;
  email: string;
  password: string;
  avatar?: string;
  bio?: string;
  whatsapp?: string;
}

class UsersRepository {
  async create(user: User, trx?: Transaction): Promise<number> {
    const db = trx || connection;

    const insertedUsersIds = await db("users").insert(user);

    return insertedUsersIds[0];
  }

  async show(email: string): Promise<User> {
    const db = connection;

    const users = await db("users").select("*").where({ email });

    return users[0];
  }
}

export default new UsersRepository();
