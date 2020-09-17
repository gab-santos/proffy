import request from "supertest";

import app from "../../app";
import { fakeUser } from "../../../__tests__/data";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { Database } from "../../database";
import { User } from "../../entities/User";
import { HandleUserPassword } from "../../utils/HandleUserPassword";

const database = new Database();
const userRepository = new UserRepository(database);
const handleUserPassword = new HandleUserPassword();

let email: string;
let password: string;
let credentials: string;

beforeEach(async () => {
  await database.prepareDatabase();
  email = fakeUser.email;
  password = fakeUser.email;
  credentials = Buffer.from(`${email}:${password}`).toString("base64");
});

afterAll(() => database.disconnect());

describe("User - Authenticate", () => {
  it("should not be able to authenticate without authorization header", async () => {
    const response = await request(app).get("/authenticate");

    expect(response.status).toBe(400);
  });

  it("should not be able to authenticate with bad formatted authorization header", async () => {
    const responseWithNoSpace = await request(app)
      .get("/authenticate")
      .set("authorization", `Basic${credentials}`);

    const responseWithBasicSpelledWrong = await request(app)
      .get("/authenticate")
      .set("authorization", `Basi ${credentials}`);

    expect(responseWithNoSpace.status).toBe(401);
    expect(responseWithBasicSpelledWrong.status).toBe(401);
  });

  it("should not be able to authenticate with a not registered email", async () => {
    const response = await request(app)
      .get("/authenticate")
      .set("authorization", `Basic ${credentials}`);

    expect(response.status).toBe(401);
  });

  it("should not be able to authenticate with invalid password", async () => {
    const encriptedPassword = await handleUserPassword.encrypt("123123");
    const user = new User({ ...fakeUser, email, password: encriptedPassword });
    await userRepository.save(user);

    const response = await request(app)
      .get("/authenticate")
      .set("authorization", `Basic ${credentials}`);

    expect(response.status).toBe(401);
  });

  it("should return user data when authenticate", async () => {
    const encriptedPassword = await handleUserPassword.encrypt(password);
    const user = new User({ ...fakeUser, email, password: encriptedPassword });
    await userRepository.save(user);

    const response = await request(app)
      .get("/authenticate")
      .set("authorization", `Basic ${credentials}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user");
  });

  it("should not return user password when authenticate", async () => {
    const encriptedPassword = await handleUserPassword.encrypt(password);
    const user = new User({ ...fakeUser, email, password: encriptedPassword });
    await userRepository.save(user);

    const response = await request(app)
      .get("/authenticate")
      .set("authorization", `Basic ${credentials}`);

    expect(response.status).toBe(200);
    expect(response.body.user).not.toHaveProperty("password");
  });

  it("should return a JWT when authenticate", async () => {
    const encriptedPassword = await handleUserPassword.encrypt(password);
    const user = new User({ ...fakeUser, email, password: encriptedPassword });
    await userRepository.save(user);

    const response = await request(app)
      .get("/authenticate")
      .set("authorization", `Basic ${credentials}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
});
