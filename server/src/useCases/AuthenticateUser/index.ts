import { UserRepository } from "../../repositories/implementations/UserRepository";
import { Database } from "../../database";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { HandleUserPassword } from "../../utils/HandleUserPassword";
import { HandleJWT } from "../../utils/HandleJWT";

const database = new Database();

const userRepository = new UserRepository(database);

const handleUserPassword = new HandleUserPassword();

const handleJWT = new HandleJWT();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  userRepository,
  handleUserPassword,
  handleJWT
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserUseCase, authenticateUserController };
