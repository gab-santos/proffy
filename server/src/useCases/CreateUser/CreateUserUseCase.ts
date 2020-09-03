import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../entities/User";
import { HandleUserPassword } from "../../utils/HandleUserPassword";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private handleUserPassword: HandleUserPassword
  ) {}

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) throw new Error("User already exists.");

    const encryptedPassword = await this.handleUserPassword.encrypt(
      data.password
    );

    const user = new User({ ...data, password: encryptedPassword });

    await this.userRepository.save(user);
  }
}
