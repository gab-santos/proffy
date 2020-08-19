import express from "express";
import cors from "cors";
import routes from "./routes";
import { errors } from "celebrate";

class AppController {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
    this.app.use(errors());
  }
}

export default new AppController().app;
