import { celebrate, Joi, Segments } from "celebrate";

class UsersValidators {
  create() {
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
}
export default new UsersValidators();
