import { IUserRepository } from "../../repositories/IUserRepository";
import { IAuthenticateUserRequestDTO } from "./AuthenticateUserDTO";
import { HandleUserPassword } from "../../utils/HandleUserPassword";
import { User } from "../../entities/User";
import { HandleJWT } from "../../utils/HandleJWT";

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private handleUserPassword: HandleUserPassword,
    private handleJWT: HandleJWT
  ) {}

  async execute(
    data: IAuthenticateUserRequestDTO
  ): Promise<{ user: User; token: string }> {
    const authHeader = data.authHeader?.split(" ");

    if (authHeader?.length !== 2)
      throw new Error("Crendentials bad formatted!");

    const [scheme, hash] = authHeader;

    // !:negação, /:começa a rejex, ^:inicio da verificação, $: final da verificação, /: termina o regex, i: indica que é case sentitive
    if (!/^Basic$/i.test(scheme))
      throw new Error("Crendentials bad formatted!");

    const [email, password] = Buffer.from(hash, "base64").toString().split(":");

    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error("Email not registered!");

    if (!(await this.handleUserPassword.compare(password, user.password)))
      throw new Error("Invalid password!");

    (user.password as unknown) = undefined;

    const token = this.handleJWT.sign(user);

    return { user, token };
  }
}
