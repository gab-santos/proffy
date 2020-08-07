import express from "express";
import cors from "cors";
import routes from "./routes";

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
  }
}

export default new AppController().app;
