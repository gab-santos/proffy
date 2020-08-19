import request from "supertest";
import fs from "fs";

import app from "../../src/app";
import { fakeUser, imageTestUploadedPath } from "../data";
import * as prepareTest from "../prepareTest";
import {
  encryptPassword,
  comparePassword,
} from "../../src/utils/encryptAndComparePasswords";

describe("User - Register", () => {
  beforeEach(() => prepareTest.beforeEach());
  afterAll(() => prepareTest.afterAll());

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

  it("should be able to upload the user avatar", async () => {
    await request(app)
      .post("/register")
      .attach("avatar", fakeUser.avatar)
      .field("name", fakeUser.name)
      .field("last_name", fakeUser.last_name)
      .field("email", fakeUser.email)
      .field("password", fakeUser.password);

    const isImageTestUploaded = fs.existsSync(imageTestUploadedPath);

    expect(isImageTestUploaded).toBeTruthy();
  });

  it("should encrypt and compare user password", async () => {
    const password = fakeUser.password;
    const encryptedPassword = await encryptPassword(password);

    const isPasswordEncrypted = await comparePassword(
      password,
      encryptedPassword
    );

    expect(isPasswordEncrypted).toBeTruthy();
  });
});
