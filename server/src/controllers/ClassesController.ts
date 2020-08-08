/* eslint-disable camelcase */
import { Request, Response } from "express";
import db from "../database/connection";
import UsersRepository from "../repositories/UsersRepository";
import ClassesRepository from "../repositories/ClassesRepository";
import ClassScheduleRepository from "../repositories/ClassScheduleRepository";

class ClassesController {
  async create(request: Request, response: Response) {
    const trx = await db.transaction();
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    try {
      const user = {
        name,
        avatar,
        whatsapp,
        bio,
      };

      const insertedUserId = await UsersRepository.create(user, trx);

      const class_user = {
        subject,
        cost,
      };

      const insertedClassId = await ClassesRepository.create(
        class_user,
        insertedUserId,
        trx
      );

      await ClassScheduleRepository.create(schedule, insertedClassId, trx);

      await trx.commit();
      return response
        .status(201)
        .json({ id: insertedClassId, ...user, ...class_user, schedule });
      //
    } catch (err) {
      console.error(err);
      await trx.rollback();
      return response.status(400).json({
        message: "Unexpected error while creating new user!",
        error: err,
      });
    }
  }
}

export default new ClassesController();
