import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { Request, Response } from "express";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const authHeader = request.headers.authorization;

    try {
      const { user, token } = await this.authenticateUserUseCase.execute({
        authHeader,
      });

      return response.status(200).json({ user, token });
      //
    } catch (err) {
      return response.status(401).json({
        message: "Unexpected error authenticating user!",
        error: err.message,
      });
    }
  }
}
