import { Request, Response } from "express";
import UsersRepository from "../repositories/UsersRepository";
import { encryptPassword } from "../utils/encryptAndComparePasswords";

class UsersController {
  async create(request: Request, response: Response) {
    const { name, last_name, email, password } = request.body;

    try {
      if (await UsersRepository.show(email))
        return response.status(400).json({ message: "User already exists!" });

      const encryptedPassword = await encryptPassword(password);

      await UsersRepository.create({
        name,
        last_name,
        email,
        password: encryptedPassword,
      });

      return response.status(204).json();
      //
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        message: "Unnexpected error creating user!",
        error: err,
      });
    }
  }
}

export default new UsersController();
