import ValidationSchema from './validationSchema'
import Joi from 'joi';
//validate method is made static to be utilized in all commands, no initialization required

class ValidationHelper{
	static validate(req){
		const {error} = Joi.validate(req,ValidationSchema.schema,{abortEarly:false});
		if(error){
			throw new Error(JSON.stringify(
				{
					isValidationError:true,
					messages: error.details.map(d=>d.message)
				}
				));
		}
	}
}

export default ValidationHelper;