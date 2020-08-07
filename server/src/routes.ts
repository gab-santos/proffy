import { Router } from "express";

const routes = Router();

routes.get("/hw", (request, response) =>
  response.status(200).json({ success: "Hello World :)" })
);

export default routes;
