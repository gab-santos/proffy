import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserControler {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      last_name,
      email,
      password,
      avatar,
      bio,
      whatsapp,
    } = request.body;

    try {
      const user = {
        name,
        last_name,
        email,
        password,
        avatar,
        bio,
        whatsapp,
      };

      await this.createUserUseCase.execute(user);

      return response.status(204).json();
      //
    } catch (err) {
      return response.status(400).json({
        message: "Unexpected error creating user!",
        error: err.message,
      });
    }
  }
}
