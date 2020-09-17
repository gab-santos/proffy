import { IUserRepository } from "../IUserRepository";
import Knex from "knex";
import { Database } from "../../database";
import { User } from "../../entities/User";

export class UserRepository implements IUserRepository {
  private db: Knex;

  constructor(database: Database) {
    this.db = database.connection();
  }

  async findByEmail(email: string): Promise<User> {
    const userAlreadyExists = await this.db("users")
      .select("*")
      .where({ email });

    return userAlreadyExists[0];
  }

  async save(data: User): Promise<void> {
    await this.db("users").insert(data);
  }
}
