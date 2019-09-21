// Joi checks for validation of inputs as per schema

import Joi from "joi";
class ValidationSchema {
  static get schema() {
    return {
      position: Joi.object()
        .keys({
          x: Joi.number()
            .max(5)
            .min(0)
            .required(),
          y: Joi.number()
            .max(5)
            .min(0)
            .required()
        })
        .required(),
      direction: Joi.string()
        .valid("NORTH", "EAST", "WEST", "SOUTH")
        .required()
    };
  }
}
export default ValidationSchema;
