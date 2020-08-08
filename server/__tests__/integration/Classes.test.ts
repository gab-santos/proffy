import request from "supertest";
import faker from "faker/locale/pt_BR";
import app from "../../src/app";

import prepareDb from "../prepareDb";

const fakeUser = {
  name: faker.name.findName(),
  avatar: faker.image.avatar(),
  whatsapp: faker.phone.phoneNumber(),
  bio: faker.lorem.paragraph(),
};

const fakeClass = {
  subject: faker.lorem.word(),
  cost: faker.commerce.price(80),
};

const fakeSchedule = {
  schedule: [
    { week_day: faker.random.number(6), from: "8:00", to: "12:00" },
    { week_day: faker.random.number(6), from: "10:00", to: "18:00" },
    { week_day: faker.random.number(6), from: "8:00", to: "12:00" },
  ],
};

describe("Classes - Integration", () => {
  beforeEach(async () => await prepareDb.beforeEach());

  afterAll(async () => await prepareDb.afterAll());

  it("should be abe to create an user", async () => {
    const response = await request(app)
      .post("/classes")
      .send({ ...fakeUser, ...fakeClass, ...fakeSchedule });

    expect(response.status).toBe(201);
  });
});
