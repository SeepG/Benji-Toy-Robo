import ValidationSchema from "./validationSchema";
import Joi from "joi";
//validate method is made static to be utilized in all commands, no initialization required

class ValidationHelper {
  static validate(req) {
    const { error } = Joi.validate(req, ValidationSchema.schema, {
      abortEarly: false, //so it returns first error and stops process
      language: {
        key: "{{key}} " //to get rid of double quotations in error message
      }
    });
    if (error) {
      throw new Error(
        JSON.stringify({
          isValidationError: true,
          messages: error.details.map(d => d.message)
        })
      );
    }
  }
}

export default ValidationHelper;
