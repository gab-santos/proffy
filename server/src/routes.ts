import { Router } from "express";

import upload from "./config/multer";
import UsersValidators from "./validators/Users";

// import ClassesController from "./controllers/ClassesController";
// import ConnectionsController from "./controllers/ConnectionsController";
// import UsersController from "./controllers/UsersController";
import { createUserController } from "./useCases/CreateUser";

const routes = Router();

routes.get("/hw", (req, res) =>
  res.status(200).json({ success: "Hello World :)" })
);

routes.post(
  "/register",
  upload.single("avatar"),
  UsersValidators.create(),
  (request, response) => createUserController.handle(request, response)
);
// routes.post("/authentication", UsersValidators.show(), UsersController.show);

// routes.post("/classes", ClassesController.create);
// routes.get("/classes", ClassesController.index);

// routes.post("/connections", ConnectionsController.create);
// routes.get("/connections", ConnectionsController.index);

export default routes;
