const express = require('express');
const cors = require('cors');
const Joi = require('joi');
const PORT = 3000;

const app = express();

// in-built middleware function in express. parses incoming requests with JSON payload.
app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

// // testing server
// app.get('/', (request,response) => {
// 	return response.send("Hello World!");
// 	 });

//Anki Robo PLACE command. Places Anki on 5*5 table-top
const schema = {
	position : {
		x: Joi.number().max(4).min(0).required(),
		y: Joi.number().max(4).min(0).required()
	},
	direction : Joi.string().valid('NORTH','EAST','WEST','SOUTH').required()
};
app.post("/place", (request,response) => {
	const req = request.body;
	console.log(request.body);
	const {error, value} = Joi.validate(req,schema);
	console.log(error);
	console.log(value);
if(error) { //If the validation throws an error
		return response.status(400).json(error);
} else {
		req.message = "Success!";
		return response.json(req);
}
});
//Anki Robo MOVE command
app.post("/move", (request,response) => {
	try {
			const req = request.body;
			console.log(request.body);
			validate(req); //validation for input
			switch(req.direction){
				case 'NORTH':
					req.position.y++;
					break;
				case 'WEST':
					req.position.x--;
					break;
				case 'SOUTH':
					req.position.y--;	
					break;
				case 'EAST':
					req.position.x++;
					break;
			}
			// validation for output
				validate(req);
				req.message = "Success!";
				return response.json(req);
		
	} catch (error) {
		const customError = JSON.parse(error.message);
		if(customError.status && customError.status === 400){
			return response.status(400).json(customError.message);
		}
	}

});

const validate =(req)=>{
	const {error, value} = Joi.validate(req,schema);
	if(error){
		throw new Error(JSON.stringify(
			{
				status:400,
				message: error.message
			}
			));
	}
}

// connecting to port
app.listen(PORT, () => {
	console.log(`Anki listens to your commands on port ${PORT}`)
})