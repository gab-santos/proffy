import dotenv from "dotenv";
import { HandleJWT } from "./HandleJWT";
import { User } from "../entities/User";
import { fakeUser } from "../../__tests__/data";

dotenv.config();
const handleJWT = new HandleJWT();

describe("JWT", () => {
  it("should create and vetify a JWT", () => {
    const user = new User({ ...fakeUser });
    const token = handleJWT.sign(user);

    const id = handleJWT.verify(token);

    expect(id).toBe(user.id);
  });
});
