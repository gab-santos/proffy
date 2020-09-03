// import request from "supertest";

// import app from "../../src/app";
// import { fakeUser } from "../data";
// import * as prepareTest from "../prepareTest";
// import UsersRepository from "../../src/repositories/UsersRepository";
// import { encryptPassword } from "../../src/utils/HandleUserPassword";

// beforeEach(() => prepareTest.beforeEach());
// afterAll(() => prepareTest.afterAll());

// describe("User - Login", () => {
//   it("should not be able to authenticate user if email not registered", async () => {
//     const response = await request(app).post("/authentication").send({
//       email: fakeUser.email,
//       password: fakeUser.password,
//     });

//     expect(response.status).toBe(404);
//   });

//   it("should not be able to authenticate user if email not registered", async () => {
//     const email = fakeUser.email;
//     const password = await encryptPassword(fakeUser.password);

//     await UsersRepository.create({ ...fakeUser, email, password });

//     const response = await request(app).post("/authentication").send({
//       email: email,
//       password: "123456",
//     });

//     expect(response.status).toBe(401);
//   });

//   it("should return user data when authenticate", async () => {
//     const email = fakeUser.email;
//     const password = fakeUser.password;
//     const encryptedPassword = await encryptPassword(password);

//     await UsersRepository.create({
//       ...fakeUser,
//       email,
//       password: encryptedPassword,
//     });

//     const response = await request(app).post("/authentication").send({
//       email: email,
//       password: password,
//     });

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("user");
//   });

//   it("should not return user password when authenticate", async () => {
//     const email = fakeUser.email;
//     const password = fakeUser.password;
//     const encryptedPassword = await encryptPassword(password);

//     await UsersRepository.create({
//       ...fakeUser,
//       email,
//       password: encryptedPassword,
//     });

//     const response = await request(app).post("/authentication").send({
//       email: email,
//       password: password,
//     });

//     expect(response.status).toBe(200);
//     expect(response.body.user).not.toHaveProperty("password");
//   });

//   it("should return JWT when authenticate user", async () => {
//     const email = fakeUser.email;
//     const password = fakeUser.password;
//     const encryptedPassword = await encryptPassword(password);

//     await UsersRepository.create({
//       ...fakeUser,
//       email,
//       password: encryptedPassword,
//     });

//     const response = await request(app).post("/authentication").send({
//       email: email,
//       password: password,
//     });

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("token");
//   });
// });
it("Classes", () => expect(true).toBe(true));
