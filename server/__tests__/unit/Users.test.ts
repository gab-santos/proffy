import request from "supertest";
import fs from "fs";

import app from "../../src/app";
import { fakeUser, imageTestUploadedPath } from "../data";
import * as prepareTest from "../prepareTest";

describe("User - Unit", () => {
  beforeEach(() => prepareTest.beforeEach());
  afterAll(() => prepareTest.afterAll());

  it("should not be able to register a new user without name, last_name, email or password", async () => {
    const response = await request(app)
      .post("/users")
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
      .post("/users")
      .attach("avatar", fakeUser.avatar)
      .field("name", fakeUser.name)
      .field("last_name", fakeUser.last_name)
      .field("email", fakeUser.email)
      .field("password", fakeUser.password);

    const isImageTestUploaded = fs.existsSync(imageTestUploadedPath);

    expect(isImageTestUploaded).toBeTruthy();
  });
});
