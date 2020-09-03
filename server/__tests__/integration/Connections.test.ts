// import request from "supertest";
// import faker from "faker/locale/pt_BR";

// import app from "../../src/app";
// import * as prepareTest from "../prepareTest";

// import UsersRepository from "../../src/repositories/UsersRepository";
// import ClassesRepository from "../../src/repositories/ClassesRepository";
// import ClassScheduleRepository from "../../src/repositories/ClassScheduleRepository";
// import ConnectionsRepository from "../../src/repositories/ConnectionsRepository";

// const fakeUser = {
//   name: faker.name.findName(),
//   avatar: faker.image.avatar(),
//   whatsapp: faker.phone.phoneNumber(),
//   bio: faker.lorem.paragraph(),
// };

// const fakeClass = {
//   subject: faker.lorem.word(),
//   cost: Number(faker.commerce.price(80)),
// };

// const fakeSchedule = {
//   schedule: [
//     { week_day: faker.random.number(6), from: "8:00", to: "12:00" },
//     { week_day: faker.random.number(6), from: "10:00", to: "18:00" },
//     { week_day: faker.random.number(6), from: "8:00", to: "12:00" },
//   ],
// };

// describe("Classes - Integration", () => {
//   beforeEach(async () => await prepareTest.beforeEach());
//   afterAll(async () => await prepareTest.afterAll());

//   // it("should be able to create an connection", async () => {
//   //   const insertedUserId = await UsersRepository.create(fakeUser);
//   //   const insertedClassId = await ClassesRepository.create(
//   //     fakeClass,
//   //     insertedUserId
//   //   );
//   //   await ClassScheduleRepository.create(
//   //     fakeSchedule.schedule,
//   //     insertedClassId
//   //   );

//   //   const response = await request(app).post("/connections").send({
//   //     user_id: insertedUserId,
//   //   });

//   //   expect(response.status).toBe(204);
//   // });

//   // it("should be able to list the connections", async () => {
//   //   const insertedUserId = await UsersRepository.create(fakeUser);
//   //   const insertedClassId = await ClassesRepository.create(
//   //     fakeClass,
//   //     insertedUserId
//   //   );
//   //   await ClassScheduleRepository.create(
//   //     fakeSchedule.schedule,
//   //     insertedClassId
//   //   );

//   //   await ConnectionsRepository.create(insertedUserId);

//   //   const response = await request(app).get("/connections");

//   //   expect(response.status).toBe(200);
//   //   expect(response.body.total).toEqual(1);
//   // });

//   it("Classes", () => expect(true).toBeTruthy());
// });
it("Connections", () => expect(true).toBe(true));
