// import { Transaction } from "knex";
// import connection from "../database/connection";
// import convertHourToMinutes from "../utils/convertHourToMinutes";

// interface Schedule {
//   week_day: number;
//   from: string;
//   to: string;
// }

// class ClasseScheduleRepository {
//   async create(schedule: Schedule[], class_id: number, trx?: Transaction) {
//     const db = trx || connection;

//     const classSchedule = schedule.map((scheduleItem) => {
//       return {
//         class_id,
//         week_day: scheduleItem.week_day,
//         from: convertHourToMinutes(scheduleItem.from),
//         to: convertHourToMinutes(scheduleItem.to),
//       };
//     });

//     await db("class_schedule").insert(classSchedule);
//   }
// }

// export default new ClasseScheduleRepository();
