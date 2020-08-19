import { Router } from "express";

import upload from "./config/multer";
import UsersValidators from "./validators/Users";

import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = Router();

routes.get("/hw", (req, res) =>
  res.status(200).json({ success: "Hello World :)" })
);

routes.post(
  "/users",
  upload.single("avatar"),
  UsersValidators.create(),
  (req, res) => res.status(200).json({ ok: true })
);

routes.post("/classes", ClassesController.create);
routes.get("/classes", ClassesController.index);

routes.post("/connections", ConnectionsController.create);
routes.get("/connections", ConnectionsController.index);

export default routes;
