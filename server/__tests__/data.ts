import faker from "faker";
import path from "path";

export const imageTestUploadedPath = path.resolve(
  __dirname,
  "..",
  "uploads",
  "avatar.png"
);

export const fakeUser = {
  name: faker.name.findName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatar: path.resolve(__dirname, "avatar.png"),
  bio: faker.lorem.paragraph(),
  whatsapp: faker.phone.phoneNumber(),
};

export const fakeClass = {
  subject: faker.lorem.word(),
  cost: Number(faker.commerce.price(80)),
};

export const fakeSchedule = {
  schedule: [
    { week_day: faker.random.number(6), from: "8:00", to: "12:00" },
    { week_day: faker.random.number(6), from: "10:00", to: "18:00" },
    { week_day: faker.random.number(6), from: "8:00", to: "12:00" },
  ],
};
