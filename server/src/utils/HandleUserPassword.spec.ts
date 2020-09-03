import { HandleUserPassword } from "./HandleUserPassword";
const handleUserPassword = new HandleUserPassword();

describe("Handle User Password", () => {
  it("should encrypt and compare password", async () => {
    const password = "123456789";
    const encryptedPassword = await handleUserPassword.encrypt(password);

    const isPasswordEncrypted = await handleUserPassword.compare(
      password,
      encryptedPassword
    );

    expect(isPasswordEncrypted).toBeTruthy();
  });
});
