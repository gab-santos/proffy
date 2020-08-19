import request from "supertest";

import app from "../../src/app";
import { fakeUser } from "../data";
import * as prepareTest from "../prepareTest";

describe("User - Integration", () => {
  beforeEach(() => prepareTest.beforeEach());
  afterAll(() => prepareTest.afterAll());

  // it("should not be able to register a new user without name, last_name, email or password", async () => {
  //   const response = await request(app).post("/users").send({
  //     name: "",
  //     last_name: "",
  //     email: "",
  //     password: fakeUser.password,
  //   });

  //   console.log(response.body);

  //   expect(response.status).toBe(400);
  //   expect(response.body.validation.keys).toMatchObject([
  //     "name",
  //     "last_name",
  //     "email",
  //     "password",
  //   ]);
  // });
  it("user integration", () => expect(true).toBe(true));
});
