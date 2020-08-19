import request from "supertest";

import app from "../../src/app";
import { fakeUser } from "../data";
import * as prepareTest from "../prepareTest";
import UsersRepository from "../../src/repositories/UsersRepository";

describe("User - Register", () => {
  beforeEach(() => prepareTest.beforeEach());
  afterAll(() => prepareTest.afterAll());

  it("should not be able to register if email already registered", async () => {
    const email = fakeUser.email;
    await UsersRepository.create({ ...fakeUser, email });

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
