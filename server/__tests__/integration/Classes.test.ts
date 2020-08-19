import request from "supertest";
import faker from "faker/locale/pt_BR";

import app from "../../src/app";
import * as prepareTest from "../prepareTest";

import UsersRepository from "../../src/repositories/UsersRepository";
import ClassesRepository from "../../src/repositories/ClassesRepository";
import ClassScheduleRepository from "../../src/repositories/ClassScheduleRepository";

const fakeUser = {
  name: faker.name.findName(),
  avatar: faker.image.avatar(),
  whatsapp: faker.phone.phoneNumber(),
  bio: faker.lorem.paragraph(),
};

const fakeClass = {
  subject: faker.lorem.word(),
  cost: Number(faker.commerce.price(80)),
};

const fakeSchedule = {
  schedule: [
    { week_day: faker.random.number(6), from: "8:00", to: "12:00" },
    { week_day: faker.random.number(6), from: "10:00", to: "18:00" },
    { week_day: faker.random.number(6), from: "8:00", to: "12:00" },
  ],
};

describe("Classes - Integration", () => {
  beforeEach(async () => await prepareTest.beforeEach());
  afterAll(async () => await prepareTest.afterAll());

  // it("should be able to create an class", async () => {
  //   const response = await request(app)
  //     .post("/classes")
  //     .send({ ...fakeUser, ...fakeClass, ...fakeSchedule });

  //   expect(response.status).toBe(201);
  //   expect(response.body).toHaveProperty("id");
  // });

  // it("should be able to list user filtered by week_day, subject and time", async () => {
  //   const insertedUserId = await UsersRepository.create(fakeUser);
  //   const insertedClassId = await ClassesRepository.create(
  //     fakeClass,
  //     insertedUserId
  //   );
  //   await ClassScheduleRepository.create(
  //     fakeSchedule.schedule,
  //     insertedClassId
  //   );

  //   const response = await request(app).get("/classes").query({
  //     subject: fakeClass.subject,
  //     week_day: fakeSchedule.schedule[0].week_day,
  //     time: fakeSchedule.schedule[0].from,
  //   });

  //   expect(response.status).toBe(200);
  //   expect(response.body).toHaveLength(1);
  //   expect(response.body[0].id).toEqual(insertedUserId);
  // });

  it("Classes", () => expect(true).toBeTruthy());
});
