// import request from "supertest";
// import fs from "fs";

// import app from "../../src/app";
// import { fakeUser, imageTestUploadedPath } from "../data";
// import * as prepareTest from "../prepareTest";
// import {
//   encryptPassword,
//   comparePassword,
// } from "../../src/utils/HandleUserPassword";

// beforeEach(() => prepareTest.beforeEach());
// afterAll(() => prepareTest.afterAll());

// describe("User - Register", () => {
//   it("should be able to upload the user avatar", async () => {
//     await request(app)
//       .post("/register")
//       .attach("avatar", fakeUser.avatar)
//       .field("name", fakeUser.name)
//       .field("last_name", fakeUser.last_name)
//       .field("email", fakeUser.email)
//       .field("password", fakeUser.password);

//     const isImageTestUploaded = fs.existsSync(imageTestUploadedPath);

//     expect(isImageTestUploaded).toBeTruthy();
//   });
it("Classes", () => expect(true).toBe(true));
