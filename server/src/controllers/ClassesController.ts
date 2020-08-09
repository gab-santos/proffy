import { Request, Response } from "express";
import db from "../database/connection";
import UsersRepository from "../repositories/UsersRepository";
import ClassesRepository from "../repositories/ClassesRepository";
import ClassScheduleRepository from "../repositories/ClassScheduleRepository";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface RequestWithQueryFilters extends Request {
  query: {
    subject: string;
    week_day: string;
    time: string;
  };
}

class ClassesController {
  async index(request: RequestWithQueryFilters, response: Response) {
    const { subject, week_day, time } = request.query;

    try {
      if (!subject || !week_day || !time)
        return response.status(400).json({
          message: "Missing filter to search classes!",
        });

      const timeInMinutes = convertHourToMinutes(time);

      const classes = await db("classes")
        .whereExists(function () {
          this.select("class_schedule.*")
            .from("class_schedule")
            .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
            .whereRaw("`class_schedule`.`week_day` = ??", [Number(week_day)])
            .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
            .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
        })
        .where("classes.subject", "=", subject)
        .innerJoin("users", "classes.user_id", "=", "users.id")
        .select(["users.*", "classes.subject", "classes.cost"]);

      return response.status(200).json(classes);
      //
    } catch (err) {
      console.log(err);
      response.status(400).json({
        message: "Unexpected error while listing classes!",
      });
    }
  }

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
        message: "Unexpected error while creating new class!",
        error: err,
      });
    }
  }
}

export default new ClassesController();
