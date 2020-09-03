import request from "supertest";

import app from "../../app";
import { fakeUser } from "../../../__tests__/data";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { Database } from "../../database";
import { User } from "../../entities/User";

const database = new Database();
const userRepository = new UserRepository(database);

beforeEach(() => database.prepareDatabase());
afterAll(() => database.disconnect());

describe("User - Register", () => {
  it("should not be able to register a new user without name, last_name, email or password", async () => {
    const response = await request(app)
      .post("/register")
      .field("name", "")
      .field("last_name", "")
      .field("email", "")
      .field("password", "");

    expect(response.status).toBe(400);
    expect(response.body.validation.keys).toMatchObject([
      "name",
      "last_name",
      "email",
      "password",
    ]);
  });

  it("should not be able to register if email already registered", async () => {
    const email = fakeUser.email;
    const user = new User({ ...fakeUser, email });
    await userRepository.save(user);

    const response = await request(app)
      .post("/register")
      .field("name", fakeUser.name)
      .field("last_name", fakeUser.last_name)
      .field("email", email)
      .field("password", fakeUser.password);

    expect(response.status).toBe(400);
  });

  it("should be able to register a new user", async () => {
    const response = await request(app)
      .post("/register")
      .field("name", fakeUser.name)
      .field("last_name", fakeUser.last_name)
      .field("email", fakeUser.email)
      .field("password", fakeUser.password);

    expect(response.status).toBe(204);
  });
});
