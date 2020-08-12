/* eslint-disable camelcase */
import { Request, Response } from "express";
import ConnectionsRepository from "../repositories/ConnectionsRepository";

class ConnectionsController {
  async index(request: Request, response: Response) {
    try {
      const total = await ConnectionsRepository.index();

      return response.status(200).json(total);
      //
    } catch (err) {
      console.log(err);
      response.status(400).json({
        message: "Unexpected error while listing the connections!",
      });
    }
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;
    try {
      await ConnectionsRepository.create(user_id);

      response.status(204).json();
      //
    } catch (err) {
      console.log(err);
      response.status(400).json({
        message: "Unexpected error while creating new connection!",
      });
    }
  }
}

export default new ConnectionsController();
