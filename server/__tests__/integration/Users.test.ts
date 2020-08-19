import request from "supertest";

import app from "../../src/app";
import { fakeUser } from "../data";
import * as prepareTest from "../prepareTest";
import UsersRepository from "../../src/repositories/UsersRepository";
import { encryptPassword } from "../../src/utils/encryptAndComparePasswords";

beforeEach(() => prepareTest.beforeEach());
afterAll(() => prepareTest.afterAll());

describe("User - Register", () => {
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

describe("User - Login", () => {
  it("should not be able to authenticate user if email not registered", async () => {
    const response = await request(app).post("/authentication").send({
      email: fakeUser.email,
      password: fakeUser.password,
    });

    expect(response.status).toBe(404);
  });

  it("should not be able to authenticate user if email not registered", async () => {
    const email = fakeUser.email;
    const password = await encryptPassword(fakeUser.password);

    await UsersRepository.create({ ...fakeUser, email, password });

    const response = await request(app).post("/authentication").send({
      email: email,
      password: "123456",
    });

    expect(response.status).toBe(401);
  });

  it("should return user data when authenticate", async () => {
    const email = fakeUser.email;
    const password = fakeUser.password;
    const encryptedPassword = await encryptPassword(password);

    await UsersRepository.create({
      ...fakeUser,
      email,
      password: encryptedPassword,
    });

    const response = await request(app).post("/authentication").send({
      email: email,
      password: password,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user");
  });

  it("should not return user password when authenticate", async () => {
    const email = fakeUser.email;
    const password = fakeUser.password;
    const encryptedPassword = await encryptPassword(password);

    await UsersRepository.create({
      ...fakeUser,
      email,
      password: encryptedPassword,
    });

    const response = await request(app).post("/authentication").send({
      email: email,
      password: password,
    });

    expect(response.status).toBe(200);
    expect(response.body.user).not.toHaveProperty("password");
  });

  it("should return JWT when authenticate user", async () => {
    const email = fakeUser.email;
    const password = fakeUser.password;
    const encryptedPassword = await encryptPassword(password);

    await UsersRepository.create({
      ...fakeUser,
      email,
      password: encryptedPassword,
    });

    const response = await request(app).post("/authentication").send({
      email: email,
      password: password,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
});
