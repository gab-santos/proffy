import { celebrate, Joi, Segments } from "celebrate";
import { RequestHandler } from "express";

export class UserValidators {
  register(): RequestHandler {
    return celebrate(
      {
        [Segments.BODY]: Joi.object().keys({
          name: Joi.string().required(),
          last_name: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().required(),
          avatar: Joi.string().dataUri(),
          bio: Joi.string(),
          whatsapp: Joi.string(),
        }),
      },
      {
        abortEarly: false,
      }
    );
  }

  authenticate(): RequestHandler {
    return celebrate(
      {
        [Segments.HEADERS]: Joi.object()
          .keys({
            authorization: Joi.string().required(),
          })
          .unknown(),
      },
      {
        abortEarly: false,
      }
    );
  }
}
