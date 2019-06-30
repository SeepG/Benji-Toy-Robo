import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import PlaceCommand from './services/placeCommand';
import MoveCommand from './services/moveCommand';
import LeftCommand from './services/leftCommand';
import RightCommand from './services/rightCommand';
const PORT = 3000;
const app = express();

// in-built middleware function in express. parses incoming requests with JSON payload.
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// // testing server
// app.get('/', (request,response) => {
// 	return response.send("Hello World!");
// 	 });

// api routes
//Robo PLACE command
app.post("/place", (request,response) => {
	try {
		const req = request.body;
		const placeCommand = new PlaceCommand();
		const resp = placeCommand.Invoke(req);
		return response.json(resp);
	} catch (error) {
		const err = JSON.parse(error.message);
		if(err.isValidationError){
			return response.status(400).json(err.messages);
		}
		return response.status(500).json(error.message);
	}
});

//Robo MOVE command
app.post("/move", (request,response) => {
	try {
			const req = request.body;
			console.log(request.body);
			const moveCommand = new MoveCommand();
			const respMove = moveCommand.Invoke(req);
			return response.json(respMove);
		
	} catch (error) {
		const newError = JSON.parse(error.message);
		if(newError.isValidationError){
			return response.status(400).json(newError.messages);
		} return response.status(500).json(error.message);
	}
});

// Robo LEFT command
app.post("/left", (request,response) => {
	try {
			const req = request.body;
			console.log(request.body);
			const leftCommand = new LeftCommand();
			const resp = leftCommand.Invoke(req);
			return response.json(resp);
		
	} catch (error) {
		const newError = JSON.parse(error.message);
		if(newError.isValidationError){
			return response.status(400).json(newError.messages);
		} return response.status(500).json(error.message);
	}
});

//Robo RIGHT command
app.post("/right", (request,response) => {
	try {
			const req = request.body;
			const rightCommand = new RightCommand();
			const resp = rightCommand.Invoke(req);
			return response.json(resp);
		
	} catch (error) {
		const newError = JSON.parse(error.message);
		if(newError.isValidationError){
			return response.status(400).json(newError.messages);
		} return response.status(500).json(error.message);
	}
});

// connecting to port
app.listen(PORT, () => {
	console.log(`Benji listens to your commands on port ${PORT}`)
})