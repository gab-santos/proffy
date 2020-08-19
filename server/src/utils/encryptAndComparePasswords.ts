import { hash, compare } from "bcryptjs";

export async function encryptPassword(password: string): Promise<string> {
  return await hash(password, 10);
}

export async function comparePassword(
  password: string,
  encryptedPassword: string
): Promise<boolean> {
  return await compare(password, encryptedPassword);
}
