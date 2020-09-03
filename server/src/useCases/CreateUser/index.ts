import { CreateUserUseCase } from "./CreateUserUseCase";
import { HandleUserPassword } from "../../utils/HandleUserPassword";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { Database } from "../../database";
import { CreateUserControler } from "./CreateUserController";

const database = new Database();

const userRepository = new UserRepository(database);

const handleUserPassword = new HandleUserPassword();

const createUserUseCase = new CreateUserUseCase(
  userRepository,
  handleUserPassword
);

const createUserController = new CreateUserControler(createUserUseCase);

export { createUserUseCase, createUserController };
