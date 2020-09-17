import jwt from "jsonwebtoken";
import { User } from "../entities/User";

export class HandleJWT {
  sign(user: User): string {
    return jwt.sign({ id: user.id }, process.env.TOKEN_SECRET as string);
  }

  verify(token: string): string {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string);
    return (decoded as { id: string }).id;
  }
}
