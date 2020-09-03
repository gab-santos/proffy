import { hash, compare } from "bcryptjs";

export class HandleUserPassword {
  async encrypt(password: string): Promise<string> {
    return await hash(password, 10);
  }

  async compare(password: string, encryptedPassword: string): Promise<boolean> {
    return await compare(password, encryptedPassword);
  }
}
