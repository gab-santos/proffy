import { Router } from "express";

import ClassesController from "./controllers/ClassesController";

const routes = Router();

routes.get("/hw", (req, res) =>
  res.status(200).json({ success: "Hello World :)" })
);

routes.post("/classes", ClassesController.create);
routes.get("/classes", ClassesController.index);

export default routes;
