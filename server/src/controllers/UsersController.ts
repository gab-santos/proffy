// import { Request, Response } from "express";
// import jwt from "jsonwebtoken";

// import UsersRepository from "../repositories/UsersRepository";
// // import { comparePassword } from "../utils/HandleUserPassword";

// class UsersController {
//   async show(request: Request, response: Response) {
//     const { email, password } = request.body;
//     try {
//       const user = await UsersRepository.show(email);

//       if (!user)
//         return response.status(404).json({ message: "User not registered!" });

//       // if (!(await comparePassword(password, user.password)))
//       // return response.status(401).json({ message: "Invalid password!" });

//       const token = jwt.sign(
//         { id: user.id, email: user.email },
//         process.env.TOKEN_SECRET as string
//       );

//       (user.password as unknown) = undefined;

//       return response.status(200).json({ user, token });
//       //
//     } catch (err) {
//       console.log(err);
//       return response.status(400).json({
//         message: "Unexpected error authenticating user!",
//         error: err,
//       });
//     }
//   }
// }

// export default new UsersController();
