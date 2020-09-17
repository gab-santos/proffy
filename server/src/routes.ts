import { Router } from "express";

import upload from "./config/multer";
import { userValidators } from "./validators";

// import ClassesController from "./controllers/ClassesController";
// import ConnectionsController from "./controllers/ConnectionsController";
// import UsersController from "./controllers/UsersController";
import { createUserController } from "./useCases/CreateUser";
import { authenticateUserController } from "./useCases/AuthenticateUser";

const routes = Router();

routes.get("/hw", (req, res) =>
  res.status(200).json({ success: "Hello World :)" })
);

routes.post(
  "/register",
  upload.single("avatar"),
  userValidators.register(),
  (request, response) => createUserController.handle(request, response)
);
routes.get(
  "/authenticate",
  userValidators.authenticate(),
  (request, response) => authenticateUserController.handle(request, response)
);

// routes.post("/classes", ClassesController.create);
// routes.get("/classes", ClassesController.index);

// routes.post("/connections", ConnectionsController.create);
// routes.get("/connections", ConnectionsController.index);

export default routes;
